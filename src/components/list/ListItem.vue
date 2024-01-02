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
    <div class="grid-warp">
      <div class="grid-warp2 decrypt">
        <div v-if="pc1" class="pc-box">
          <div class="m">{{ m1 }}</div>
          <div class="x">x</div>
          <div class="pc">{{ pc1 }}<span>шт</span></div>
        </div>
        <div v-if="pc2" class="pc-box">
          <div class="m">{{ m2 }}</div>
          <div class="x">x</div>
          <div class="pc">{{ pc2 }}<span>шт</span></div>
        </div>
      </div>
      <div class="qwe grid-poltora poltora">{{ (sum + 1.5).toFixed(2) }}</div>
      <div class="qwe grid-sum sum ">{{ sum }}</div>
    </div>

    <!-- 🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕 -->
  </div>
  <div class="pc-box" v-if="pc1 != 0"></div>
  <!-- <br /> -->
</template>

<style lang="scss" scoped>
/* #TODO полосатый список */
.carc-list-item {
  user-select: none;
  color:var(--m3-color)
}
.sum {
  font-size: 2rem;
  
}
.poltora {
  font-size: 1.2rem;
  color: var(--m3-color-muted-1);
}
.m {
  color: var(--m3-color-tt1);
}
.pc {
  color: var(--m3-color-tt2);
}
.pc > span,
.x {
  color: var(--m3-color-muted-2);
}
.grid-warp {
  display: grid;
  justify-content: center;
  grid-template-columns: 350px 70px 80px;
  /* grid-template-rows: repeat(1, 1fr); */
  /* grid-template-areas: ' poltora decrypt  sum '; */
}
.decrypt {
  // grid-template-columns: 77px 14px 77px;
  display: grid;
  // grid-template-areas: ' m1 x  pc1 ';
}
.decrypt > div,
.grid-warp>div,
.center,
.left,
.right,
.top,
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  justify-content: left;
}
.right {
  justify-content: right;
}
.top {
  /* align-items: flex-start; */
}
.bottom {
  align-items: flex-end;
}


.carc-list-item {
  // color: var(--m3-color);
  /* background: gold; */
  // border-bottom: solid 1px var(--m3-color-muted-1);
}
</style>
