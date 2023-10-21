<script setup>
import { ref, onMounted } from 'vue'
import TableRow from './TableRow.vue'
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()

const props = defineProps({
  rowNumber: Number,
  lineNumber: Number
})
const pc1 = props.rowNumber - 1;
const pc2 = props.lineNumber - 1;

// const pc2
console.log("😶",props.rowNumber);
const rollLength2 = ref(40)
function calculate() {
  // count.value++
  var meter1 = moveieStore.movies[0].meter //метраж1
  var meter2 = moveieStore.movies[1].meter //метраж2
  // var numRow = props.rowNumber-1
  // var numLine = props.lineNumber-1

  // var summ = meter1 * numRow + meter2 * numLine
  var summ = meter1 * pc1 + meter2 * pc2

  console.log('💩', summ)

  rollLength2.value = summ

  // moveieStore.movies[0].meter }} x {{ rowNumber }}шт</div> -->
  // <!-- <div> {{ moveieStore.movies[1].meter }} x {{ lineNumber }}шт </div> -->
}
calculate()
// reactive state

// const emit = defineEmits(['change', 'delete'])
</script>
<script>
// import { useMovieStore } from '../../stores/dataForCalculation'
// import { createPinia } from 'pinia';
// const moveieStore = useMovieStore()
export default {
  // props: {
  // rowNumber: Number,
  // lineNumber: Number
  // },
  data: function () {
    return {
      rollLength: '333',
      // msg: 'Я родился',
      rowCount: 5,
      lineCount: 5,
      numbers: [1, 2, 3, 4, 5] //DEL
      // displayCounter: '',
      // meter: 7.23,
      // focused: false
    }
  },
  methods: {
    evenNumbers() {
      // var qwe = this.numbers.filter(number => number % 2 === 0);
      var qwe2 = Array(this.rowCount)
        .fill()
        .map((e, i) => i + 1)
      var qwe3 = this.rowNumber
      console.log('🍓')
      return qwe3
    }
  }
}
</script>

<template>
  <td>
    <div class="cell" v-if="pc1!=0 || pc2!=0">
      <div class="rollLength">{{ rollLength2 }}</div>
      <div class="poltora">{{ rollLength2+1.5 }}</div>
      
      <div class="pc" v-if="pc1!=0">
        <div>{{ moveieStore.movies[0].meter }} <span class="x">x</span> {{ pc1 }}<span class="pc-descripion">шт</span></div>
      </div>
      <div class="pc" v-if="pc2!=0">
        <div>{{ moveieStore.movies[1].meter }} <span class="x">x</span> {{ pc2 }}<span class="pc-descripion">шт</span></div>
      </div>
    </div>
  </td>
</template>
<style scoped>
.rollLength {
  /* padding:5px; */
  color: black;
  font-size: 20px;
}
.pc{
  font-size: 11px;
  /* background: red; */
  border-radius:3px;
  /* padding:3px; */
  color: gray;
}
.poltora{
font-size:12px;
color:rgb(200, 200, 200);
}
.cell {
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: solid blue 1px; */
}
td{

  /* background: tomato; */
  /* margin:0px; */
  border:1px solid;
  padding:5px;
}

.x,.pc-descripion{
  /* background: red; */
  /* padding:0 1px ; */
  color:rgb(220, 220, 220);
}

</style>
