<script setup>
// import InputBox from './InputBox.vue'
import InputBox from './InputBox.vue'
import InputPreview from './InputPreview.vue'
import { ref, watch /*, onMounted*/ } from 'vue'

import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()
//повится ли инпут по умолчанию
// const inputOrPreview = ref(false)
const inputOrPreview = ref(true)
const inputShow = function () {
  document.querySelector('meta[name="viewport"]').setAttribute('content', "width=device-width, initial-scale=1.0, user-scalable=no")
  
  // var scale = 'scale(1)'
  // document.body.style.msTransform = scale // IE 9
  // document.body.style.transform = scale // General
  // alert('l')

  console.log('🍓')
  inputOrPreview.value = true
}
const inputHide = function () {
  document.querySelector('meta[name="viewport"]').setAttribute('content', "width=device-width, initial-scale=1.0, user-scalable=yes")
  // var scale = 'scale(1)'
  // document.body.style.msTransform = scale // IE 9
  // document.body.style.transform = scale // General

  inputOrPreview.value = false
}






</script>

<template>
  <div id="box" v-if="inputOrPreview">
    <div class="close" @click="inputHide()"></div>
    <div class="closeBox" @click="inputHide()"></div>

    <!-- <button @click="qwe(198889)">🦴</button> -->
    <!-- <InputBox propsMeter="123" /> -->
    <!-- 💩{{ moveieStore.movies }} -->
    <!-- <br> -->
    <!-- <Movie v-for="movie of moveieStore.movies" :key="movie.id" :movie="movie" /> -->
    <InputBox
      v-for="(movie, index) of moveieStore.movies"
      :key="index"
      :index="index"
      :movie="movie"
    />
  </div>
  <InputPreview @click="inputShow" v-if="!inputOrPreview" />
</template>

<style scoped>
* {
  --accent-color: tomato;
  --border-color: rgb(213, 213, 213);
}

#boxOff {
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
#box {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  /* touch-action: none; */
  /* touch-action: pan-x pan-y; */
  background: red;
  height: 99%;
  width: 99%;
  /* height: 100vh; */
  /* width: 100vw; */
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
}

.close {
  cursor: pointer;
  z-index: 8;
  background: rgba(0, 0, 0, 0.685);
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
.closeBoxOFF {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.455);
}
</style>
