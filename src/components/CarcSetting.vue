<script setup>
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
function chengeTheme(theme) {
  carcStore.setTheme(theme)
}
</script>
<template>
  <!--  -->
  <div>
    <button
      :class="['grid-switcher', { act: carcStore.carc.set.grid }]"
      @click="carcStore.setGrid()"
    >
      <span> список </span><span> таблица </span>
    </button>
    <br /><br />

    <button class="light" @click="chengeTheme('M3light')">Cветлая тема</button><br />
    <button class="dark" @click="chengeTheme('M3dark')">Тёмная тема</button><br />
    <button class="black" @click="chengeTheme('M3black')">Чёрная тема</button><br /><br />

    <button class="color-grid" @click="chengeTheme('M3colorGrid')">Цветная сетка</button><br />
    <button class="color" @click="chengeTheme('colorTT')">
      <span class="color1">Цв</span>етные циф<span class="color2">ры</span></button
    ><br />

    <!-- <br />
    <button>
      Дополнительно шт<br />
      <button class="smallBtn" @click="chengeTheme('OFF')">+</button>
      3
      <button class="smallBtn" @click="chengeTheme('OFF')">-</button><br />
      <div class="description">
        Рассчитывать дополнительно несколько штук приглушенным цветом к указанному кол-ву
      </div>
    </button> -->
  </div>
</template>

<style scoped lang="scss">
.colorTT .color1 {
  color: var(--m3-color-tt1);
}
.colorTT .color2 {
  color: var(--m3-color-tt2);
}
.colorTT .color4 {
  border-top-color: var(--m3-color-tt1);
  border-left-color: var(--m3-color-tt1);
  border-bottom-color: var(--m3-color-tt2);
  border-right-color: var(--m3-color-tt2);
}
// рамка кнопки цветной сетки
.color-grid {
  border-color: var(--m3-color-grid);
}
// кружки возле тем
.light:before,
.black:before,
.dark:before {
  content: '';
  background: red;
  width: 15px;
  display: block;
  position: absolute;
  height: 15px;
  left: 12px;
  border-radius: 50%;
  // outline: solid 1px rgba(118, 118, 118, 0.437);
}
.light:before {
  background: white;
  color: black;
  .M3light & {
    outline: 3px var(--m3-color-accent) solid;
    border: none;
  }
}
.black:before {
  background: black;
  color: white;
  .M3black & {
    outline: 3px var(--m3-color-accent) solid;
    border: none;
  }
}
.dark:before {
  background: #585858;
  color: white;
  .M3dark & {
    outline: 3px var(--m3-color-accent) solid;
  }
}

button {
  width: 100%;
  // height:26px;
  background: transparent;
  border: 1px solid var(--m3-color-muted-3);
  color: var(--m3-color);
  padding: 7px;
  border-radius: 6px;
  margin: 3px;
}
// переключатель grid/list
.grid-switcher {
  --m3-color-switcher: var(--m3-color-muted-3);
  padding: 0;
  position: relative;
  box-shadow: inset 0 0 0 1px var(--m3-color-muted-3);
  border: none;
  & > span {
    margin: 2px 0px;
    border-radius: 5px;
    padding: 7px 7px;
    display: inline-flex;
    width: 50%;
    justify-content: center;
  }
  &::before {
    content: '';
    transition: 0.3s cubic-bezier(0, 1.17, 0.83, 1.06);
    width: 50%;
    height: 100%;
    border-radius: 6px;
    border: 3px solid var(--m3-color-muted-2);
    display: block;
    position: absolute;
  }
  &.act::before {
    transform: translateX(100%);
  }
}
.smallBtn {
  // background: red;
  width: 40px;
  font-size: 23px;
  font-family: 'Courier New', Courier, monospace;
  height: 40px;
  border-radius: 50%;
}
.description {
  color: var(--m3-color-muted-2);
  font-size: 12px;
  max-width: 180px;
  
}
</style>
