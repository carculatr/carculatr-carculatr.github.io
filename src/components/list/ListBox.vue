<script setup>
import { ref, watch } from 'vue'
import ListItem from './ListItem.vue'
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
let list = ref([])
const maxLentgh = 70 //максимальная длинна рассчитываемого ролика

const calculateList = () => {
  //кол-во берок
  let pc1 = carcStore.carc.items[0].pc
  let pc2 = carcStore.carc.items[1].pc

  //Если 0 штук, то по умолчанию ставим 50,(всёравно потом обрежется в цикле до maxLentgh)
  if (pc1 == 0) pc1 = 50
  if (pc2 == 0) pc2 = 50

  //Метражи
  const m1 = carcStore.carc.items[0].meter
  const m2 = carcStore.carc.items[1].meter
  let LIST = []

  //перебот первых бирок
  for (let index1 = 0; index1 <= pc1; index1++) {
    // выйти из цикла если метраж больше maxLentgh
    // #TODO Проверить на производительность "==" и ">"
    if (index1 * m1 > maxLentgh) break

    // переборы вторых бирок
    for (let index2 = 0; index2 <= pc2; index2++) {
      let sum = index1 * m1 + index2 * m2
      // выйти из цикла если метраж больше maxLentgh
      if (sum > maxLentgh) break
      // LIST.push([sum, index1, index2])
      LIST.push([
        sum, //сумма метража бирок
        [
          [index1, index2] //кол-во бирок
          //[2, 1] // 2*4M + 1*2M = 10M - другие бирки
          //[1, 3] // 1*4M + 3*2M = 10M - с таким-же метражом
        ],
        [] //ролики с подходящим метражом
      ])
    }
  }

  // отсортировать по сумме
  LIST.sort(function (a, b) {
    return a[0] - b[0]
  })

  // сгруппировать повторяющиеся
  const groupSum = LIST.reduce((prev, current) => {
    //если первый элемент, задаём массив в который будем пушить
    if (prev === 0)
      prev = [
        // список всех подсчётов
        [
          0, // сумма подсчёта
          [
            // Массив для массива бирок. если будут дубли дубли метража, то внутри будет несколько массивов
            /*[5,6],[6,5]*/
          ]
        ]
      ]
    // предыдущий элемент массива
    const prevEl = prev.at(-1)
    //если повтор
    if (prevEl[0] === current[0]) {
      //добавить в предыдущий
      prevEl[1].push(current[1][0])
    } //если не повтр
    else {
      // просто добавляем текущее значение
      prev.push(current)
      // console.log("🔥not doube", current);
    }

    return prev
  }, 0)
  LIST = groupSum

  // записать подходящие ролики
  if (carcStore.carc.rolls.length) {
    //Если ролики указаны↑
    // #TODO для производительности можно этот перебор объединить с циклом выше(группировка повторов)
    //перебор подсчитанных сумм
    LIST = LIST.map((sumItem) => {
      //перебор роликов
      carcStore.carc.rolls.forEach((roll) => {
        //Если текущая сумма больше ролика, но не больше чем на 1.5 метра
        if (roll > sumItem[0] && roll < sumItem[0] + 1.5) {
          // то добавляем в мастер массив[ролик,разница],[ролик2,разница2]
          sumItem[2].push([
            roll,
            Number((roll - sumItem[0]).toFixed(2))
          ])
          // sumItem[2].push([roll, Number(roll - sumItem[0].toFixed(2))])
        }
      })
      return sumItem
    })
  }

  // удалить нулевой элемент
  LIST.splice(0, 1)
  return LIST
}
// вызвать при изменении бирок
watch(carcStore.carc.items, async () => recalc())
//вызывать при добавлении роликов
watch(carcStore.carc.rolls, async () => recalc())

const recalc = () => (list.value = calculateList())
recalc()


</script>
<template>
  <!-- кнопка настроек -->
  <button @click="carcStore.sessionCarc.popup[0] = 'settings'">settings</button>
  <!-- перебор произведений бирок -->
  <template :key="val" v-for="val in list">
    <ListItem :valItem="val" />
  </template>
</template>
<style scoped lang="scss">
// чётные полосы
.stripe:nth-child(odd) {
  background-color: var(--m3-bg-even);
}

//скрыть метражи не подходящие под ролики
// .stripe:not(:has(.approach)){ display: none;}
</style>
