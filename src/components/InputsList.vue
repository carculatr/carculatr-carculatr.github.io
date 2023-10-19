<script setup>
import InputBox from './InputBox.vue'
import InputBox2 from './InputBox2.vue'
const qwe = (id) => {
  moveieStore.setActiveTab(id)
}

import Movie from './TaBlica2.vue'
import { useMovieStore } from '../stores/dataForCalculation'
const moveieStore = useMovieStore()

</script>

<template>
  <div id="box">
        <button @click="qwe(198889)">🦴</button>
    <!-- <InputBox propsMeter="123" /> -->
    💩
    <!-- <Movie v-for="movie of moveieStore.movies" :key="movie.id" :movie="movie" /> -->
    <InputBox2 v-for="movie of moveieStore.movies" :key="movie.id" :movie="movie" />
    

    <!-- <InputBox propsMeter="798" /> -->
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
