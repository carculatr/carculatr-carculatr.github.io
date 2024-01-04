<script setup>
import { ref, watch } from 'vue'
import { useCarcStore } from '@/stores/dataForCalculation'
import ListItem from './ListItem.vue'
const carcStore = useCarcStore()
const list = ref([])
const maxlentgh = 30 //максимальная длинна рассчитываемого ролика

//🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕
let pc1 = carcStore.carc.items[0].pc
let pc2 = carcStore.carc.items[1].pc;
pc1++;

// const pc1 = ref(carcStore.carc.items[0].pc)
// const pc2 = ref(carcStore.carc.items[1].pc)

// #todo рассчитать сколько штук можут быть при данном метраже чтобы не было бльших чисел

const m1 = carcStore.carc.items[0].meter
const m2 = carcStore.carc.items[1].meter

const calculateList = () => {
  let list = []
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
  list.splice(0, 1)
  // list.
  return list
}

watch(carcStore.carc.items, async () => {
  console.log('🔰calculateList')
  recalc()
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
<style scoped>
.stripe {
  /* background: gold; */
  /* border-bottom: 1px solid var(--m3-color-muted-3); */
}
.stripe:nth-child(even) {
  background-color: var(--m3-bg-even);
}
</style>
