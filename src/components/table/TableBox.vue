<script setup>
import TableLine from './TableLine.vue'
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()
</script>

<script>
export default {
  data: function () {
    return {
      maxRollLentgh: 70,
      rowCount: 4,
      lineCount: 4, 
    }
  },
  computed: {
    // evenNumbers() {
    //   // var qwe = this.numbers.filter(number => number % 2 === 0);
    //   var qwe2 = Array(this.rowCount)
    //     .fill()
    //     .map((e, i) => i + 1);
    //     console.log("😶",qwe2) 
    //   return qwe2
    // }
  }
}
</script>

<template>
  
  <!-- 🤯{{ moveieStore }}🤯 -->
    <table>
      <tbody>
        <!-- :movie="movie" -->
        <!-- <TableLine v-for="n in evenNumbers" :key="n"  :lineNumber="n"/> -->
        <TableLine  v-for="n in lineCount" :key="n" :rowCount="rowCount" :lineNumber="n"/>
      </tbody>
    </table>
</template>
<style>
table{
    border-collapse: collapse;
}
td {
  /* background: gold; */
  /* margin: 3px; */
}
</style>
