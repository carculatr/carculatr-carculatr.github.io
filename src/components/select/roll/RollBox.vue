<script setup>
import RollInputBox from './RollInputBox.vue'
import RollButton from './RollButton.vue'
import { ref } from 'vue'

const inputShow = function () {
  console.log("roll");
  // document
  //   .querySelector('meta[name="viewport"]')
  //   .setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no')

  // inputOrPreview.value = true
}
</script>

<template>
  <RollInputBox/>
  <RollButton @click="inputShow"/>
</template>
