<script setup>
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
defineProps(['pcs'])
const m1 = carcStore.carc.items[0].meter
const m2 = carcStore.carc.items[1].meter
</script>

<template>
  <div class="decrypt">
    <div class="pc-boxes" :key="pc" v-for="pc in pcs">
      <div class="pc-box" v-if="pc[0]">
        <div class="m">{{ m1 }}</div>
        <div class="x">x</div>
        <div class="pc">{{ pc[0] }}<span>шт</span></div>
      </div>
      <div class="pc-box" v-if="pc[1]">
        <div class="m">{{ m2 }}</div>
        <div class="x">x</div>
        <div class="pc">{{ pc[1] }}<span>шт</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.decrypt {
  // font-size: 1em;
  // align-items: flex-end ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // height: 100px;
  align-items: flex-end;
  // outline: 1px solid red;
}

.pc-boxes {
  // outline: 1px solid red;
  position: relative;
  display: flex;

  justify-content: center;
  justify-content: flex-end;
  // display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  // если один элемент то шрифт побольше
  font-size: 1.1em;
  &:only-child {
    font-size: 1.3em;
  }

  // светлая тема если несколько элементов - выделить нечётные
  .M3light & {
    &:nth-child(even) {
      background: linear-gradient(95deg, #00000000 10%, #ff840016 66%, #00000000 90%);
    }
    //светлая тема чётные элементы кроме первого
    &:not(:only-child):nth-child(odd) {
      background: linear-gradient(95deg, #00000000 0%, #fffdfb1f 66%, #00000000 90%);
    }
  }

  // тёмная тема
  .M3dark & {
    //  если несколько элементов - выделить нечётные
    &:nth-child(even) {
      background: linear-gradient(95deg, #ff000000 10%, #0000002b 66%, #00000000 90%);
    }
    //тёмная тема чётные элементы кроме первого
    &:not(:only-child):nth-child(odd) {
      background: linear-gradient(95deg, #00000000 0%, #ffffff07 66%, #00000000 90%);
    }
  }
  .pc-boxes {
    background: blue !important;
    outline: solid 3 blue;
  }
  // чёрная тема

  .M3black & {
    &:nth-child(even) {
      background: linear-gradient(95deg, #00000000 10%, #00000000 66%, #00000000 90%);
      // background: linear-gradient(95deg, #00000000 10%, #ff0000 66%, #00000000 90%);
    }
    //тёмная тема чётные элементы кроме первого
    &:not(:only-child):nth-child(odd) {
      background: linear-gradient(95deg, #00000000 0%, #ffffff0e 66%, #00000000 90%);
      // background: linear-gradient(95deg, #00000000 0%, #2bff00 66%, #00000000 90%);
    }
  }

  // кроме первого элемента
  &:not(:first-child) {
    box-shadow: 0px -10px 7px -11px rgba(0, 0, 0, 0.112);
  }
  // полоса кроме первого элемента
  &:not(:first-child):before {
    content: '';
    background: rgba(255, 255, 255, 0.048);
    height: 0.4px;
    width: 100%;
    left: 0px;
    // position: absolute;

    // left: 25%;
    position: absolute;
  }
}
//ЛИНИЯ НЕЧЁТНОГО ПОДСЧИТАНОГО МЕТРАЖА (.stripe)
.stripe:nth-child(even) {
  .M3black & {
    .pc-boxes:first-child {
      box-shadow: inset 0px -3px 6px -3px rgb(0, 0, 0);
    }
    .pc-boxes:last-child {
      box-shadow: inset 0px -3px 6px -3px rgb(0, 0, 0);
    }
    .pc-boxes:nth-child(odd) {
      background: none;
    }

    .pc-boxes:nth-child(even) {
      background: linear-gradient(95deg, #00000000 0%, #4a4a4a4b 66%, #00000000 90%);
    }
  }
}
.pc-box {
  display: grid;
  width: 4.9em;
  grid-template-columns: 1fr 1.2ex 1fr;
  margin-left: 5px;
  // outline: 1px solid rgb(255, 0, 0);
}

.pc-box > * {
  display: flex;
  align-items: center;
}

.m {
  justify-content: right;
  color: var(--m3-color-tt1);
}
.pc {
  color: var(--m3-color-tt2);
}
.pc > span,
.x {
  color: var(--m3-color-muted-2);
}
.x {
  justify-content: center;
}
</style>
