<script setup>
import RollButton from './RollButton.vue'
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
</script>

<template>
  <!-- <RollInputBox/> -->
  <RollButton @click="carcStore.sessionCarc.popup[0] = 'inputRoll'"/>
</template>
