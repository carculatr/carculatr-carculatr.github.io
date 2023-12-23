<script setup>
import TableBox from './components/table/TableBox.vue'
import DivanBox from './components/select/divan/DivanBox.vue'
import RollBox from './components/select/roll/RollBox.vue'
// import NumKeyboard from './components/NumKeyboard.vue'
import { useCarcStore } from './stores/dataForCalculation'
const carcStore = useCarcStore()
</script>

<template>
  <main>
    <RollBox />
    <DivanBox />
    <!-- <NumKeyboard /> -->
    <TableBox :store="carcStore.carc.items" />
    <!-- <TableBox :meter1="3" :meter2="4" :store="carcStore.carc.items" /> -->
  </main>
</template>

<style>
body {
  padding: none;
  margin: none;
}

@media (min-width: 1024px) {
  header .wrapper {
    content: '';
  }
}
</style>
