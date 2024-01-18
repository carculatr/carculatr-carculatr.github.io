<script setup>
import { ref, onUnmounted } from 'vue'
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
import m3metric from '@/components/js/m3metric'
m3metric('openSetting')

// onUnmounted(() => {
//   console.log('🔰onUnmounted setting')
// })

function chengeTheme(theme) {
  carcStore.setTheme(theme)
}
const hideSettings = ref(false)
</script>
<template>
  <!-- <div @dblclick="hideSettings = !hideSettings"> -->
  <div @dblclick="carcStore.sessionCarc.popup[0] = 'theEasterDuck'">
    <!-- <button @click="YaMetric('PC vivaldi')">PC vivaldi</button><br />
    <button @click="YaMetric('PC Yandex')">PC Yandex</button><br />
    <button @click="YaMetric('PC Chrome')">PC Chrome</button><br />
    <button @click="YaMetric('mobile Vivaldi')">mobile Vivaldi</button><br />
    <button @click="YaMetric('mobile yandex')">mobile yandex</button><br />
    <button @click="YaMetric('mobile chrome')">mobile chrome</button><br /> -->

    <button
      :class="['grid-switcher', { act: carcStore.carc.set.grid }]"
      @click="carcStore.setBolean('grid')"
    >
      <span> список </span><span> таблица </span>
    </button>
    <br /><br />

    <button class="light" @click="chengeTheme('M3light')">Cветлая тема</button><br />
    <button class="dark" @click="chengeTheme('M3dark')">Тёмная тема</button><br />
    <button class="black" @click="chengeTheme('M3black')">Чёрная тема</button><br /><br />

    <button class="color-grid" @click="chengeTheme('M3colorGrid')">Цветная сетка</button><br />
    <button class="color" @click="chengeTheme('colorTT')">
      <span class="color1">Цв</span>етные циф<span class="color2">ры</span>
    </button>
    <br />

    <div class="checkbox-container">
      <div class="cbd">
        <input
          @change="m3metric('onlyWithRoll', carcStore.carc.set.onlyWithRoll)"
          class="cbd-input"
          type="checkbox"
          id="cbd"
          v-model="carcStore.carc.set.onlyWithRoll"
        />
        <label class="cbd-label" for="cbd">
          <label class="cbd-label-aux" for="cbd"> </label>
        </label>
        <label for="cbd">
          <!-- <label class="cbd-label-aux" for="cbd">🥕fkdjkdkdfjfjfjdkl</label> -->
        </label>
      </div>
      <div>
        Показывать только <br />
        метражи c роликами
      </div>
    </div>
    <div class="checkbox-container">
      <div class="cbd">
        <input
          @change="m3metric('grouped', carcStore.carc.set.grouped)"
          class="cbd-input"
          type="checkbox"
          id="cbd2"
          v-model="carcStore.carc.set.grouped"
        />
        <label class="cbd-label" for="cbd2">
          <label class="cbd-label-aux" for="cbd2"> </label>
        </label>
        <label for="cbd2">
          <!-- <label class="cbd-label-aux" for="cbd">🥕fkdjkdkdfjfjfjdkl</label> -->
        </label>
      </div>
      <div>
        Группировать <br />
        одинаковые метражи
      </div>
    </div>

    <button>
      Дополнительно шт<br />
      <button
        class="smallBtn"
        :class="[carcStore.carc.set.additive === '0' ? 'select' : '']"
        @click="carcStore.setAdditive('0')"
      >
        0
      </button>
      <button
        class="smallBtn"
        :class="[carcStore.carc.set.additive === '1' ? 'select' : '']"
        @click="carcStore.setAdditive('1')"
      >
        1
      </button>
      <button
        class="smallBtn"
        :class="[carcStore.carc.set.additive === '2' ? 'select' : '']"
        @click="carcStore.setAdditive('2')"
      >
        2
      </button>
      <button
        class="smallBtn"
        :class="[carcStore.carc.set.additive === '3' ? 'select' : '']"
        @click="carcStore.setAdditive('3')"
      >
        3
      </button>
      <div class="description">
        Рассчитывать дополнительно несколько штук приглушенным цветом к указанному кол-ву
      </div>
    </button>

    <div v-if="hideSettings"></div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_inputCheckbox';
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
  display: inline-flex;
  align-items: center;
  justify-content: center;

  // background: red;
  width: 27.5px;
  height: 27.5px !important;
  font-size: 1.4em;
  font-family: 'Courier New', Courier, monospace;
  height: 40px;
  border-radius: 50%;
  &.select {
    // background: red;
    border: tomato solid;
  }
}
.description {
  color: var(--m3-color-muted-2);
  font-size: 12px;
  max-width: 180px;
}
</style>
