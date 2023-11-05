<script setup>
import TableCell from './TableCell.vue'
// import { useCarcStore } from '../../stores/dataForCalculation'
// const carcStore = useCarcStore()
</script>
<script>
export default {
    props: {
    lineNumber: Number,
    rowCount: Number
  },
  data: function () {
    return {
      // msg: 'Я родился',
      // rowCount: 5,
      lineCount: 5,
      numbers: [1, 2, 3, 4, 5] //DEL
      // displayCounter: '',
      // meter: 7.23,
      // focused: false
    }
  },
  computed: {
    // evenNumbers() {
    //   // var qwe = this.numbers.filter(number => number % 2 === 0);
    //   var qwe2 = Array(this.rowCount)
    //     .fill()
    //     .map((e, i) => i + 1)
    //   // console.log("🍓",qwe);
    //   return qwe2
    // }
  }
}
</script>

<template>
  <tr class="line">
    <!-- {{ lineNumber }} -->
    <!-- <TableRow v-for="n in evenNumbers" :key="n"  :lineNumber="lineNumber" :rowNumber="n" /> -->
    <TableCell  v-for="n in rowCount" :key="n"   :lineNumber="lineNumber" :rowNumber="n" />
    <!-- <TableRow /> -->
  </tr>
</template>
<style scoped>
.line {
  content:"";
  /* border: solid red 1px; */
  /* padding: 3px; */
  /* margin: 3px; */
}
</style>
