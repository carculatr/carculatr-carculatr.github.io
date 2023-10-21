<!-- <script setup>
// import LineHuine from './line.vue'
// import { useMovieStore } from '../stores/counter';
// const moveieStore = useMovieStore();
</script> -->
<script>
export default {
  props: {
    rowNumber: String,
    lineNumber: String
  },
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
  <td class="cell">{{ rowNumber }} x {{ lineNumber }}</td>
</template>
<style scoped>
.cell {
  border: solid blue 1px;
}
</style>
