<script setup>
import ListItemPcBox from './ListItemPcBox.vue'
import ListItemRollBox from './ListItemRollBox.vue'
const props = defineProps(['valItem'])
const sum = props.valItem[0].toFixed(2) * 1
</script>

<template>
    <!--  подходящие ролики  -->
  <ListItemRollBox :sum="sum" />
  <div class="carc-list-item">
    <div class="grid-warp">
      <ListItemPcBox :pcs="props.valItem[1]" />
      <div class="grid-sum sum">{{ sum }}</div>
      <div class="grid-poltora poltora">{{ (sum + 1.5).toFixed(2) }}</div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.carc-list-item {
  user-select: none;
  color: var(--m3-color);
}
.sum {
  font-size: 2.2em;
}
.poltora {
  font-size: 1.2em;
  color: var(--m3-color-muted-1);
}

.grid-warp {
  display: grid;
  justify-content: center;
  grid-template-columns: 180px 90px 30px;
  // grid-template-columns: 1.9fr 120px 1fr;
  /* grid-template-rows: repeat(1, 1fr); */
  /* grid-template-areas: ' poltora decrypt  sum '; */
  /* grid-template-areas: ' poltora decrypt  sum '; */
}

.sum,
.poltora {
  display: flex;
  justify-content: center;
  align-items: center;
}
.poltora {
  align-items: center;
  justify-content: flex-start;
}


</style>

<!-- 
  const m1 = carcStore.carc.items[0].meter
const m2 = carcStore.carc.items[1].meter -->

<!-- <div class="for-test" :key="pc" v-for="pc in props.valItem[1]">
            {{ pc[0] }}
            {{ pc[1] }}
            <div v-if="pc[0]" class="pc-box">
              <div class="m">{{ m1 }}</div>
              <div class="x">x</div>
              <div class="pc">{{ pc[0] }}<span>шт</span></div>
            </div>
            <div v-if="pc[1]" class="pc-box">
              <div class="m">{{ m2 }}</div>
              <div class="x">x</div>
              <div class="pc">{{ pc[1] }}<span>шт</span></div>
            </div>
          </div> -->
<!-- 🟡🟡🟡 -->
<!-- <div v-if="pc1" class="pc-box">
          <div class="m">{{ m1 }}</div>
          <div class="x">x</div>
          <div class="pc">{{ pc1 }}<span>шт</span></div>
        </div>
        <div v-if="pc2" class="pc-box">
          <div class="m">{{ m2 }}</div>
          <div class="x">x</div>
          <div class="pc">{{ pc2 }}<span>шт</span></div>
        </div> -->
