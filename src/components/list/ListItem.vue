<script setup>
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
const props = defineProps(['valItem'])
const sum = props.valItem[0]
const pc1 = props.valItem[1]
const pc2 = props.valItem[2]
const m1 = carcStore.carc.items[0].meter
const m2 = carcStore.carc.items[1].meter
</script>

<template>
  <div class="carc-list-item">
    <div class="wrap">

      <div class="qwe grid-sum">
        <div class="carc-sum">
          {{ sum }}
        </div>
      </div>


      <div class="qwe grid-poltora">
        <div class="poltora">
          {{ (sum + 1.5).toFixed(2) }}
        </div>
      </div>

      <div class="qwe grid-pc1">
        <span class="pc">
          {{ pc1 }}
        </span>
        <span class="pc-descripion">шт</span>
      </div>

      <div class="qwe grid-m1">
        <span class="meter">
          {{ m1 }}
        </span>
      </div>
      <div class="qwe grid-pc2">
        <span class="pc">
          {{ pc2 }}
        </span>
        <span class="pc-descripion">шт</span>
      </div>
      <div class="qwe grid-m2">
        <span class="meter">
          {{ m2 }}
        </span>
      </div>
      <div class="qwe grid-x1"><span class="x"> x </span></div>
      <div class="qwe grid-x1"><span class="x"> x </span></div>
    </div>

    <div class="pc-box" v-if="pc1 != 0"></div>
    <br>

    <!-- 🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕 -->
  </div>
</template>
<style scoped>
/* @import url('../table/TableCell.scss'); */
/* #TODO полосатый список */
.wrap {
  display: grid;
  justify-content: center;
  grid-template-columns: 50px 50px 20px 550px 140px;
  /* grid-template-rows: repeat(1, 1fr); */
  grid-template-areas:
    ' poltora m1 x1 pc1 sum '
    ' .       m2 x1 pc2 sum ';
}
.grid-sum,
.grid-poltora,
.grid-pc1,
.grid-pc2,
.grid-m1,
.grid-m2,
.grid-pc10,
.grid-x1,
.grid-x2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-sum {
  grid-area: sum;
}
.grid-poltora {
  grid-area: poltora;
}
.grid-pc1 {
  grid-area: pc1;
}
.grid-pc2 {
  grid-area: pc2;
}
.grid-m1 {
  grid-area: m1;
}
.grid-m2 {
  grid-area: m2;
}
.grid-pc10 {
  grid-area: 🥕;
}
.grid-x1 {
  grid-area: x1;
}
.grid-x2 {
  grid-area: x2;
}

.qwe {
  background: rgba(255, 217, 0, 0.412);
  margin: 3px;
}

.carc-list-item {
  color: var(--m3-color);
  /* background: gold; */
  border-bottom: solid 1px var(--m3-color-muted-1);
}

.m {
  color: var(--m3-color-tt1);
}
</style>
