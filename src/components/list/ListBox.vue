<script setup>
import { ref, watch } from 'vue'
import ListItem from './ListItem.vue'
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
let list = ref([])
const maxLentgh = 70 //максимальная длинна рассчитываемого ролика

//🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕
// const pc2 = ref(carcStore.carc.items[1].pc)
// setTimeout(() => {
//   // pc1.value++;
//   pc2++;
//   console.log("🔵")
//   recalc()
// }, 2000);

// #todo рассчитать сколько штук можут быть при данном метраже чтобы не было бльших чисел

const calculateList = () => {
  let pc1 = carcStore.carc.items[0].pc
  let pc2 = carcStore.carc.items[1].pc

  //Если 0 штук, то по умолчанию ставим 50,(всёравно потом обрежется в цикле до maxLentgh)
  if (pc1 == 0) pc1 = 50
  if (pc2 == 0) pc2 = 50

  const m1 = carcStore.carc.items[0].meter
  const m2 = carcStore.carc.items[1].meter
  let list = []

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
      // list.push([sum, index1, index2])
      list.push([sum, [[index1, index2]]])
      // console.log(`${index1}*${m1}+${index2}*${m2}=${sum}`)
    }
  }

  // отсортировать по сумме
  list.sort(function (a, b) {
    return a[0] - b[0]
  })

  // сгруппировать повторяющиеся
  var result = list.reduce((prev, current) => {
    //если первый элемент, задаём массив в который будем пушить
    if (prev === 0)
      prev = [
        // список всех подсчётов
        [
          0, // сумма подсчёта
          [
            /*[5,6],[6,5]*/
          ] // Массив для массива бирок. если будут дубли дубли метража, то внутри будет несколько массивов
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
  // console.log(result)
  // console.log(list)

  list = result
  // удалить нулевой элемент
  list.splice(0, 1)

  // list.
  // console.log('🔰NEW LIST', list)
  return list
}

watch(carcStore.carc.items, async () => {
  recalc()
  // console.log('🔰recalc', list.value)
})
const recalc = () => (list.value = calculateList())
recalc()

//🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕
</script>
<template>
  <button @click="carcStore.sessionCarc.popup[0] = 'settings'">settings</button>
  <div>
    <div :key="val" v-for="val in list" class="stripe">
      <ListItem :valItem="val" />
    </div>
  </div>
</template>
<style scoped lang="scss">
  // чётные полосы
.stripe:nth-child(odd) {
  background-color: var(--m3-bg-even);
}

//скрыть метражи не подходящие под ролики
// .stripe:not(:has(.approach)){ display: none;}
</style>
