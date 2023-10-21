<script setup>
import { ref, onMounted } from 'vue'
// import TableRow from './TableRow.vue'
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()

const props = defineProps({
  rowNumber: Number,
  lineNumber: Number
})
const pc1 = props.rowNumber - 1
const pc2 = props.lineNumber - 1
const rollLength = ref(0)
function calculate() {
  var meter1 = moveieStore.movies[0].meter * 1000 //метраж1 (умноженный на 1000 дабы избавиться от бага с плавающей запятой)
  var meter2 = moveieStore.movies[1].meter * 1000 //метраж2
  var summ = meter1 * pc1 + meter2 * pc2
  summ = summ / 1000 //обход бага с плавающей запятой
  rollLength.value = summ
  //   console.log(`
  // ${meter1} * ${pc1} + ${meter2} * ${pc2}
  //   ${summ/1000}`);
}
calculate()
</script>

<template>
  <td>
    <div class="cell" v-if="pc1 != 0 || pc2 != 0">
      <div class="rollLength">{{ rollLength }}</div>
      <div class="poltora">{{ rollLength + 1.5 }}</div>

      <div class="pc" v-if="pc1 != 0">
        <div>
          {{ moveieStore.movies[0].meter }} <span class="x">x</span> {{ pc1
          }}<span class="pc-descripion">шт</span>
        </div>
      </div>
      <div class="pc" v-if="pc2 != 0">
        <div>
          {{ moveieStore.movies[1].meter }} <span class="x">x</span> {{ pc2
          }}<span class="pc-descripion">шт</span>
        </div>
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
.pc {
  font-size: 11px;
  /* background: red; */
  border-radius: 3px;
  /* padding:3px; */
  color: gray;
}
.poltora {
  font-size: 12px;
  color: rgb(200, 200, 200);
}
.cell {
  /* background: gold; */
  top: 0px;
  position: relative;
  /* position: absolute; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: solid blue 1px; */
}
td {
  /* background: tomato; */
  /* margin:0px; */
  border: 1px solid;
  /* padding: 5px; */
  padding-top: none;
  vertical-align: top;
}

.x,
.pc-descripion {
  /* background: red; */
  /* padding:0 1px ; */
  color: rgb(220, 220, 220);
}
</style>
