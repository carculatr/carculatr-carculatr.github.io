<script setup>
import m3metric from '@/components/js/m3metric'
m3metric('easter', 'pizza')
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
</script>
<template>
  <div  @click="carcStore.sessionCarc.popup[0] = 'settings'">
    <img src="@/assets/cat/pizza.gif" alt="" />
  </div>
</template>
<style scoped>
img {
  width: 240px;
  /* background: red; */
  /* outline: 3px solid red; */
}
</style>
