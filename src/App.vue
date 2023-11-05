<script setup>
import TableBox from './components/table/TableBox.vue'
import InputsList from './components/input/InputsList.vue'
// import NumKeyboard from './components/NumKeyboard.vue'
import { useCarcStore } from './stores/dataForCalculation'
const carcStore = useCarcStore()
</script>

<template>
  <main>

    <InputsList />
    <TableBox :meter1="3" :meter2="4" :store="carcStore.carc.items" />
  </main>
</template>

<style>
body {
  padding: none;
  margin: none;
}

@media (min-width: 1024px) {
  header .wrapper {
  }
}
</style>
