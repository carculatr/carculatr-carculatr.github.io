<script setup>
import InputBox from './InputBox.vue'
</script>

<template>
  <div id="box">
    <InputBox propsMeter="8" />
    <InputBox propsMeter="7.2" />
  </div>
</template>

<style scoped>
* {
  --accent-color: tomato;
  --border-color: rgb(213, 213, 213);
}

#box {
  min-width: 330px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100%;
  height: 50%;
  background: #787878;
  padding-bottom: 3px;
}
</style>
