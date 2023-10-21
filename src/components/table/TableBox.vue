<script setup>
import TableLine from './TableLine.vue'
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()
</script>

<script>
export default {
  data: function () {
    return {
      // msg: 'Я родился',
      rowCount: 5,
      lineCount: 5,
      numbers: [1, 2, 3, 4, 5] //DEL
      // displayCounter: '',
      // meter: 7.23,
      // focused: false
    }
  },
  computed: {
    evenNumbers() {
      // var qwe = this.numbers.filter(number => number % 2 === 0);
      var qwe2 = Array(this.rowCount)
        .fill()
        .map((e, i) => i + 1)
      // console.log("🍓",qwe);
      return qwe2
    }
  }
}
</script>

<template>
  
  🤯{{ moveieStore }}🤯
    <table>
      <tbody>
        <TableLine v-for="n in evenNumbers" :key="n" :movie="movie" :lineNumber="n"/>
      </tbody>
    </table>
</template>
<style>
td {
  background: gold;
  margin: 3px;
}
</style>
