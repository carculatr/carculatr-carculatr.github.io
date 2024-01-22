<script setup>
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
</script>

<template>
  <div class="wrap">
    <div class="box">
        <button class="meterBox" :key="val" v-for="val in carcStore.carc.items">
            {{ val.meter }}
            <div class="pc" v-if="val.pc">
              {{ val.pc }}<span class="pc-description">шт</span>
            </div>
        </button>


    </div>
  </div>
</template>
<style scoped lang="scss">
.wrap {
  position: relative;
  z-index: 2;
}
.box {
  display: flex;
  flex-direction: column;

  font-size: 1.4em;
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 1;
  /* Если обнулены все поля, то сделать весь экран кнопкой */
  &:empty {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.123);
  }
}

.meterBox {
  // text-shadow: #ff0000 3px 3px 1px;
  margin: 6px;
  color: var(--m3-color);
  color: white;
  border: none;
  width: 2.7em;
  height: 2.7em;
  background: rgba(0, 0, 0, 0.833);
  border-radius: 50%;
  line-height: 2.3em;
  bottom: 0;
  //если есть шт, то шрифт поменьше
  font-size: 1em;
  &:has(.pc) {
    // font-size: 1em;
    // background: red !important;
  }
  .pc {
    margin-left: 0.2em;
    line-height: 1.6em;
    position: relative;
    top: -20px;
    font-size: 0.7em;
    opacity: 0.8;
    .pc-description {
      margin-left: 0.2em;
      font-size: 0.8em;
      opacity: 0.4;
    }
  }
}
</style>
