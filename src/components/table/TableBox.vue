<script setup>
import { ref, watch, onMounted } from 'vue'
import TableLine from './TableLine.vue'
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()

const maxRollLength = 71
const maxPc = 25
const rowCount = ref(0)
const lineCount = ref(0)

const props = defineProps({
  meter1: Number,
  meter2: Number,
  store: Array
})

var calculatePc = function () {
  //   console.log('🧴', `
  //  ${maxRollLength} / ${moveieStore.movies[0].meter}
  //  ${maxRollLength / moveieStore.movies[0].meter}
  //  ${Math.round(maxRollLength / moveieStore.movies[0].meter)}
  //   `)
  // rowCount.value = Math.round(maxRollLength / moveieStore.movies[0].meter)
  // lineCount.value = Math.round(maxRollLength / moveieStore.movies[1].meter)
  let tabWidth = Math.round(maxRollLength / props.store[0].meter)
  let tabHeight = Math.round(maxRollLength / props.store[1].meter)

  tabWidth < maxPc ? (rowCount.value = tabWidth) : (rowCount.value = maxPc)
  tabHeight < maxPc ? (lineCount.value = tabHeight) : (lineCount.value = maxPc)
}
calculatePc()

watch(moveieStore.movies, async () => {
  // console.log("❓")
  calculatePc()
  // console.log(rowCount);
})
</script>

<script>
export default {
  data: function () {
    return {
      // maxRollLentgh: 70, //максимальный метраж ролика который рассчиывать
      // rowCount: 4,
      // lineCount: 4
    }
  },
  created: function () {
    //рассчитать кол-во штук
  }
}
</script>

<template>
  <!-- {{ moveieStore.movies }}🍃 <br />
  {{ props.store[0].meter }}🍃🍃 <br />
  {{ props.meter1 }}🍃 <br />
  {{ props.meter2 }}🍃 <br /> -->

  <table>
    <tbody>
      <TableLine v-for="n in lineCount" :key="n" :rowCount="rowCount" :lineNumber="n" />
      <!-- #FIXME если через функцию то не реактивно?  -->
      <!-- <TableLine
        v-for="n in Math.round(maxRollLength / moveieStore.movies[1].meter)"
        :key="n"
        :rowCount="Math.round(maxRollLength / moveieStore.movies[0].meter)"
        :lineNumber="n"
      /> -->
    </tbody>
  </table>
</template>
<style scoped>
table {
  /* position: absolute; */
  top: 5px;
  left: 5px;
  border-collapse: collapse;
}
</style>
