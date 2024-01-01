<script setup>
import { useCarcStore } from '@/stores/dataForCalculation'
import ListItem from './ListItem.vue'
const carcStore = useCarcStore()
import { ref } from 'vue'
const list = ref([])
const maxlentgh = 30 //максимальная длинна рассчитываемого ролика

//🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕
const pc1 = carcStore.carc.items[0].pc
const pc2 = carcStore.carc.items[1].pc

// #todo рассчитать сколько штук можут быть при данном метраже чтобы не было бльших чисел

const m1 = carcStore.carc.items[0].meter
const m2 = carcStore.carc.items[1].meter

const calculate = () => {
  let list = [];
  //перебот первых бирок
  for (let index1 = 0; index1 <= pc1; index1++) {
    console.log('🥕', index1)
    // переборы вторых бирок
    for (let index2 = 0; index2 <= pc2; index2++) {
      const sum = index1 * m1 + index2 * m2
      list.push([sum, index1, index2])
      console.log(`${index1}*${m1}+${index2}*${m2}=${sum}`)
    }
  }
  // отсортировать по сумме
  list.sort(function (a, b) {
    return a[0] - b[0]
  })
  // удалить нулевой элемент
 list.splice(0, 1);
  // list.
  return list
}
list.value=calculate()

//🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕
</script>
<template>
  <button @click="carcStore.sessionCarc.popup[0] = 'settings'">settings</button>
  <div>
    {{ m1 }}м {{ pc1 }}шт
    <br />
    {{ m2 }}м {{ pc2 }}шт
    <br />
    {{ list }}
    <div :key="val" v-for="val in list">
      <!-- {{ val }} -->
      <ListItem :valItem="val"/>
    </div>
  </div>
</template>
