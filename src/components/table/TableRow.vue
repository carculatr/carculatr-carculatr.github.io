<script setup>
import { ref,watch, onMounted } from 'vue'
// import TableRow from './TableRow.vue'
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()

const props = defineProps({
  rowNumber: Number,
  lineNumber: Number
})
const pc1 = props.rowNumber - 1
const pc2 = props.lineNumber - 1
// const rollLength = ref(0)
// function calculate() {
//   var meter1 = moveieStore.movies[0].meter * 1000 //метраж1 (умноженный на 1000 дабы избавиться от бага с плавающей запятой)
//   var meter2 = moveieStore.movies[1].meter * 1000 //метраж2
//   var summ = meter1 * pc1 + meter2 * pc2
//   summ = summ / 1000 //обход бага с плавающей запятой
//   rollLength.value = summ
// }
// calculate()

// watch works directly on a ref
watch(moveieStore.movies[0], async (newQuestion, oldQuestion) => {
  // console.log("🍃🤷‍♂️🤷‍♂️🤷‍♂️"/*,newQuestion*/)
})
</script>

<template>
  <td>
    <div class="cell" v-if="pc1 != 0 || pc2 != 0">
      <!-- #TODO разобраться с реактивостью -->
      <!-- <div class="rollLength">{{ rollLength }}</div> -->
      <!-- <div class="poltora">{{ rollLength + 1.5 }}</div> -->
      <div class="rollLength">{{ ((moveieStore.movies[0].meter * 1000) * pc1 + (moveieStore.movies[1].meter * 1000) * pc2)/1000 }}</div>
      <div class="poltora">{{ ((moveieStore.movies[0].meter * 1000) * pc1 + (moveieStore.movies[1].meter * 1000) * pc2)/1000 + 1.5 }}</div>

      <div class="pc-box" v-if="pc1 != 0">
        <div>
          <span class="meter">
            {{ moveieStore.movies[0].meter }}
          </span>
          <span class="x"> x </span>
          <span class="pc">
            {{ pc1 }}
          </span>
          <span class="pc-descripion">шт</span>
        </div>
      </div>
      <div class="pc-box" v-if="pc2 != 0">
        <div>
          <span class="meter">
            {{ moveieStore.movies[1].meter }}
          </span>
          <span class="x"> x </span>
          <span class="pc">
            {{ pc2 }}
          </span>
          <span class="pc-descripion">шт</span>
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
.pc-box {
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
  min-width: 60px;
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
/* .pc{color:rgba(200, 0, 0, 0.719);} */
.meter{color:rgba(0, 165, 0, 0.83)}
</style>
