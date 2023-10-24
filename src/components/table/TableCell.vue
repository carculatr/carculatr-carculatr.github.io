<script setup>
import { ref, watch, onMounted } from 'vue'
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()
const props = defineProps({
  rowNumber: Number,
  lineNumber: Number
})
const pc1 = props.rowNumber - 1
const pc2 = props.lineNumber - 1
const invalid1 = ref(false) //ненужные но отображаемые ячейки
// const invalid3 = ref(true) //ненужные но отображаемые ячейки
const invalid1Length = 3;
const invalid2 = ref(false) //совсем ненужные ячейки
function ifInvalid() {
  var ExtraPc1 = +moveieStore.movies[0].pc /*- 1*/
  // var ExtraPc1 = +moveieStore.movies[0].pc +2
  var ExtraPc2 = +moveieStore.movies[1].pc /*- 1*/
  if (ExtraPc1 < 1) ExtraPc1 = 999
  if (ExtraPc2 < 1) ExtraPc2 = 999

  if (ExtraPc1 < pc1 || ExtraPc2 < pc2) {
    invalid1.value = true
  } else {
    invalid1.value = false
  }
  if (ExtraPc1+invalid1Length < pc1 || ExtraPc2+invalid1Length < pc2) {
    invalid2.value = true
  } else {
    invalid2.value = false
  }
}
ifInvalid()
// const rollLength = ref(0)
// function calculate() {
//   var meter1 = moveieStore.movies[0].meter * 100 //метраж1 (умноженный на 1000 дабы избавиться от бага с плавающей запятой)
//   var meter2 = moveieStore.movies[1].meter * 100 //метраж2
//   var summ = meter1 * pc1 + meter2 * pc2
//   summ = summ / 100 //обход бага с плавающей запятой
//   rollLength.value = summ
// }
// calculate()
// console.log( `
// ${moveieStore.movies[0].meter} * 1000) * ${pc1} +${moveieStore.movies[1].meter} 1000 * ${pc2} ${1000}
// ⚡${((moveieStore.movies[0].meter * 1000) * pc1 + (moveieStore.movies[1].meter * 1000) * pc2)/1000}

// `)
// watch works directly on a ref
watch(moveieStore.movies, async () => {
  // console.log('🍃🤷‍♂️🤷‍♂️🤷‍♂️')
  // calculate()
  ifInvalid()
})
</script>

<!-- v-if="!(+moveieStore.movies[0].pc + 3 < pc1 || +moveieStore.movies[1].pc + 3 < pc2)" -->
<template>
  <!-- <td    :class="{false: invalid1 }"> -->
    <!-- <td
      :class="{ invalid1 }"
      v-if="!(+moveieStore.movies[0].pc + 3 < pc1 || +moveieStore.movies[1].pc + 3 < pc2)"
      > -->
      <td v-if="!invalid2" :class="{ invalid1 }">
        <div class="firstCell" v-if="props.rowNumber==1&&props.lineNumber==1">Max3</div>
    <!-- <td v-if="!invalid2" :class="{ invalid1, invalid2 }"> -->
    <!-- ⚡{{ moveieStore.movies[0].pc }}x{{ moveieStore.movies[1].pc }}x{{ pc1 }}x{{ pc2 }} -->
    <!-- <div class="cell" v-if="pc1 != 0 || pc2 != 0"> -->
    <div class="cell" v-if="+(moveieStore.movies[0].meter * pc1 + moveieStore.movies[1].meter * pc2).toFixed(2)">
      <!-- #TODO разобраться с реактивостью -->
      <!-- <div class="rollLength">{{ rollLength }}</div> -->
      <!-- <div class="poltora">{{ rollLength + 1.5 }}</div> -->
      <!-- <div class="rollLength">{{ ((moveieStore.movies[0].meter * 1000) * pc1 + (moveieStore.movies[1].meter * 1000) * pc2)/1000 }}</div> -->
      <!-- <div class="poltora">{{ ((moveieStore.movies[0].meter * 1000) * pc1 + (moveieStore.movies[1].meter * 1000) * pc2)/1000 + 1.5 }}</div> -->
      <div class="rollLength">
        {{ +(moveieStore.movies[0].meter * pc1 + moveieStore.movies[1].meter * pc2).toFixed(2) }}
      </div>
      <div class="poltora">
        {{
          (+(moveieStore.movies[0].meter * pc1 + moveieStore.movies[1].meter * pc2) + 1.5).toFixed(
            2
          )
        }}
      </div>


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
.firstCell{
  /* background: red; */
  min-height: 40px;
  opacity:0.2;
  display:flex;
  align-items: center;
justify-content: center





}
.invalid1 {
  /* background: red; */
  /* border: 3px solid tomato; */
  opacity: 0.07;
  /* display: ; */
  border: dashed 1px rgba(0, 0, 0, 0.13);
}
.invalid2 {
  /* background: red; */
  /* border: 3px solid tomato; */
  background: red;
  /* display: ; */
  border: dashed 1px rgba(0, 0, 0, 0.13);
}

.rollLength {
  /* padding:5px; */
  margin: -8px 0;
  color: black;
  font-size: 20px;
}
.pc-box {
  /* background: red; */
  margin: -3px 0;
  font-size: 10px;
  /* background: red; */
  /* border-radius: 3px; */
  /* padding:3px; */
  /* color: gray; */
}
.poltora {
  font-size: 12px;
  margin: -2px 0;
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

  /* display: inline-block; */
  /* overflow: hidden; */
  min-height: 40px;
  min-width: 45px; 
  /* background: tomato; */
  /* margin:0px; */
  border: 1px solid rgb(204, 204, 204);
  /* border-left:3px red dashed; */
  /* padding: 5px; */
  padding-top: none;
  vertical-align: top;
}
td:empty,
:not(:first-child)>td:empty:not(:first-child){
  /* background:red; */
  /* display: none; */
  /* visibility: hidden; */
  /* opacity: 0; */
  /* border:rgba(255, 0, 0, 0) solid; */
  border-left:transparent solid 2px;
  border-top: transparent solid 2px ;
}
.x,
.pc-descripion {
  /* background: red; */
  /* padding:0 1px ; */
  color: rgb(220, 220, 220);
}
.pc {
  color: rgba(200, 0, 0, 0.719);
}
.meter {
  color: rgba(0, 165, 0, 0.83);
}
</style>
