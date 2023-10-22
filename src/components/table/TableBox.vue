<script setup>
import { ref, watch, onMounted } from 'vue'
import TableLine from './TableLine.vue'
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()
const rollLength = 71
const rowCount = ref(0)
const lineCount = ref(0)

var calculatePc = function () {
  //   console.log('🧴', `
  //  ${rollLength} / ${moveieStore.movies[0].meter}
  //  ${rollLength / moveieStore.movies[0].meter}
  //  ${Math.round(rollLength / moveieStore.movies[0].meter)}
  //   `)
  rowCount.value = Math.round(rollLength / moveieStore.movies[0].meter)
  lineCount.value = Math.round(rollLength / moveieStore.movies[1].meter)
}
calculatePc()

watch(moveieStore.movies, async () => {
  console.log("❓")
  calculatePc()
  console.log(rowCount);
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
  <table>
    <tbody>
      <TableLine v-for="n in lineCount" :key="n" :rowCount="rowCount" :lineNumber="n" />
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
