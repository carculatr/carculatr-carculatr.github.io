<script setup>
import TableBox from '@/components/table/TableBox.vue'
import ListBox from '@/components/list/ListBox.vue'
import DivanBox from '@/components/select/divan/DivanBox.vue'
import RollBox from '@/components/select/roll/RollBox.vue'
import PopUp from '@/components/PopUp.vue'
// import NumKeyboard from '@/components/NumKeyboard.vue'
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()

if (!carcStore.carc?.set?.themes?.theme) {
  console.log('🥕', carcStore.carc)
  carcStore.carc.set = {
    themes: {
      theme: 'light',
      colorTT: true,
      colorGrid: false
    },
    grid: true
  }
}

</script>
<template>
  <main
    :class="[
      carcStore.carc.set.themes.theme,
      {
        M3colorGrid: carcStore.carc.set.themes.colorGrid,
        colorTT: carcStore.carc.set.themes.colorTT
      }
    ]"
  >
    <!-- <div class="blur"> -->
      <RollBox />
      <DivanBox />
      <!-- {{  }} -->
      <!-- <NumKeyboard /> -->
      <!-- <ListBox  /> -->
      <!-- <ListBox v-if="!carcStore.carc.set.grid" />
      <TableBox v-if="carcStore.carc.set.grid" :store="carcStore.carc.items" /> -->
      <!-- <TableBox :meter1="3" :meter2="4" :store="carcStore.carc.items" /> -->
    <!-- </div> -->
    <PopUp />
  </main>
</template>

<style lang="scss">
body {
  background: var(--m3-bg);
  padding: none;
  margin: none;
}
main {
  user-select: none;
  top: 0;
  left: 0;
  background: var(--m3-bg);
  /* background: red !important; */
  min-height: 100vh;
  /* height: 30%; */
  height:310%;
  /* position: relative; */
// padding: 333px;
padding-top:10vh;
  // отступ после
  padding-bottom:30vh

}

@media (min-width: 1024px) {
  header .wrapper {
    content: '';
  }
}
</style>