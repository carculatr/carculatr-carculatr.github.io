<script setup>
import DivanInputBox from './DivanInputBox.vue'
import DivanButton from './DivanButton.vue'
import { ref } from 'vue'

import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()

const inputOrPreview = ref(false) //показывать ли попап с вводом

const inputShow = function () {
  document
    .querySelector('meta[name="viewport"]')
    .setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no')

  inputOrPreview.value = true
}

const inputHide = function (p) {
  // console.log('🔰inputHide', p)
  //изменить масштаб
  document.querySelector('meta[name="viewport"]')
  // .setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=yes')

  // При закрытии поля ввода записать в подсказки
  carcStore.carc.items.forEach((item) => {
    carcStore.tipsPush(item.meter)
  })

  inputOrPreview.value = false
}
</script>

<template>
  <div class="wrap">
    <!-- либо инпуты ввода -->
    <div id="box" v-if="inputOrPreview">
      <div class="back-drop" @click="inputHide"></div>
      <div class="close" @click="inputHide"></div>
      <DivanInputBox
        @inputHide="inputHide"
        v-model="inputHide"
        v-for="(movie, index) of carcStore.carc.items"
        :key="index"
        :index="index"
      />
    </div>
    <!-- либо кнопки -->
    <DivanButton @click="inputShow" v-if="!inputOrPreview" />
  </div>
</template>

<style scoped>


#box {
  z-index: 6;
  min-width: 330px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  /* top: 0px; */
  left: 0px;
  position: absolute;
  width: 100%;
  height: 50%;
  background: #787878;
  padding-bottom: 3px;

  /* background: red; */
  position: relative;
  /* top:0px; */
  left: 0px;
  height: 100%;
}


.close {
  cursor: pointer;
  z-index: 8;
  background: rgba(0, 0, 0, 0.605);
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  opacity: 0.5;
}
.close:before,
.close:after {
  content: '';
  transform: rotate(-45deg);
  width: 60%;
  height: 2px;
  top: 50%;
  left: 20%;
  position: absolute;
  background: rgb(255, 255, 255);
  display: block;
}
.close:before {
  transform: rotate(45deg);
}
.back-drop {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.455);
}
</style>
