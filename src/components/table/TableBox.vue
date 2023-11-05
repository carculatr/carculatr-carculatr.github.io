<script setup>
import { ref, watch } from 'vue'
import TableLine from './TableLine.vue'
import { useCarcStore } from '../../stores/dataForCalculation'
const carcStore = useCarcStore()

const maxRollLength = 71
const maxPc = 25

const rowCount = ref(0)
const lineCount = ref(0)

const props = defineProps({
  // meter1: Number,
  // meter2: Number,
  store: Array
})

var calculatePc = function () {
  //   console.log('🧴', `
  //  ${maxRollLength} / ${carcStore.carc.items[0].meter}
  //  ${maxRollLength / carcStore.carc.items[0].meter}
  //  ${Math.round(maxRollLength / carcStore.carc.items[0].meter)}
  //   `)
  // rowCount.value = Math.round(maxRollLength / carcStore.carc.items[0].meter)
  // lineCount.value = Math.round(maxRollLength / carcStore.carc.items[1].meter)
  let tabWidth = Math.round(maxRollLength / props.store[0].meter)
  let tabHeight = Math.round(maxRollLength / props.store[1].meter)

  tabWidth < maxPc ? (rowCount.value = tabWidth) : (rowCount.value = maxPc)
  tabHeight < maxPc ? (lineCount.value = tabHeight) : (lineCount.value = maxPc)
}
calculatePc()

watch(carcStore.carc.items, async () => {
  calculatePc()
})

// /*🍓🍓🍓🍓🍓🍓 */
// const testScale = ref()
// let scale = 1
// // mouse wheel, trackpad pitch
// var qwe = document.querySelector("table");
// qwe.addEventListener(
// // testScale.value.addEventListener(
//   'wheel',
//   /** @param {WheelEvent} evt */ (evt) => {
//     evt.preventDefault()

//     // calc nextScale

//     const delta = evt.deltaY || evt.deltaX
//     const scaleStep =
//       Math.abs(delta) < 50
//         ? 0.05 // touchpad pitch
//         : 0.25 // mouse wheel

//     const scaleDelta = delta < 0 ? scaleStep : -scaleStep
//     const nextScale = scale + scaleDelta // 'scale' is previous scale

//     // calc fixedPoint
//     const fixedPoint = { x: evt.clientX, y: evt.clientY }

//     // scale
//     // 'svgEl' is element to scale
//     svgScale(svgEl, fixedPoint, scale, nextScale)
//     scale = nextScale
//   }
// )
// /*🍓🍓🍓🍓🍓🍓 */
</script>

<template>



  <table  ref="testScale">
    <tbody>
      <TableLine v-for="n in lineCount" :key="n" :rowCount="rowCount" :lineNumber="n" />
      <!-- #FIXME если через функцию то не реактивно?  -->
      <!-- <TableLine
        v-for="n in Math.round(maxRollLength / carcStore.carc.items[1].meter)"
        :key="n"
        :rowCount="Math.round(maxRollLength / carcStore.carc.items[0].meter)"
        :lineNumber="n"
      /> -->
    </tbody>
  </table>
</template>
<style scoped>
table {
  position: absolute;

  top: 15px;
  left: 15px;
  border-collapse: collapse;
}
</style>
