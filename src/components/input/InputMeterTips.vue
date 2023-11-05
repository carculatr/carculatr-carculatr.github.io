<script setup>
import { useCarculatorStore } from '../../stores/dataForCalculation'
const moveieStore = useCarculatorStore()
const props = defineProps(['parentValue'])
const emit = defineEmits(['update:modelValue'])



const pick = function (data) {
  emit('update:modelValue',data)
  // console.log('❌', data, props.parentValue) 
}
</script>

<template>
  <ul>
    <li v-on:mousedown="pick(val)" class="item" :key="val" v-for="val in moveieStore.tips">
      <span v-bind:class="[props.parentValue == val ? 'picked' : '']">{{}}{{ val }}</span>
    </li>
  </ul>
</template>

<style scoped>
ul::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
@media (hover: none) and (pointer: coarse) {
  ul::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
}
ul::-webkit-scrollbar-track {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.042);
}
ul::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}
ul::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
ul::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0.9);
}
ul {
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: blue orange; /* scroll thumb and track */
  scrollbar-color: red orange;
  /* overflow: overlay;  */
  overflow: auto;
  /* Скрываем вертикальный scrollbar */
  overflow-y: hidden;
  /* overflow: hidden; */
  background: rgb(255, 255, 255);
  /* position: fixed; */
  /* position: absolute; */
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 55px;
  font-size: 20px;
  padding: 0px;
  display: flex;
  margin: 13px 0;
}

.item {
  display: flex;
  align-items: center;
  user-select: none;
  /* height: 100%; */
  /* margin: 3px; */

  list-style-type: none;
}
.item:nth-last-child(1) {
  margin-right: 70px;
}
.item > span {
  text-align: center;
  color: white;
  background: rgb(64, 64, 64);
  margin: 0px 2px;
  padding: 2px 10px;
  border-radius: 30px;
  cursor: pointer;
  min-width: 37px;
  display: block;
  align-content: center;
}

.item .picked {
  background: tomato;
}
</style>
