<script setup>
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
</script>

<template>
  <div class="wrap">
    <!-- 🐥 -->

    <div class="psevdoPlusOFF box">
      <div :key="val" v-for="val in carcStore.carc.rolls">
        <button class="meterBox">
          {{ val }}
        </button>
      </div>
    </div>

    <!-- 🐥 -->
  </div>
</template>
<style scoped lang="scss">
// @import url('@/assets/css/psevdoPlus');
@import '@/assets/css/psevdoPlus';
.wrap{
  position: relative;
  z-index: 2;
}
.box {
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  
  font-size: 1.1em;
  position: fixed;
  bottom: 5px;
  left: 5px;
  z-index: 1;
  /* Если обнулены все поля, то сделать весь экран кнопкой */
  &:empty {
    @include mixin-psevdo-plus(var(--m3-bg));
    //🥕
    opacity: 0.4;
    margin: 0px;
    color: var(--m3-color);
    color: white;
    width: 2.7em;
    height: 2.7em;
    background: rgb(0, 0, 0);
    transform: scale(0.8);
  }
}

.meterBox {
  display: flex; //🥕
  justify-content: center; //🥕
  align-items: center; //🥕
  text-shadow: #0000009f 0px 0px 3px; //🥕
  margin: 3px;//🥕
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
