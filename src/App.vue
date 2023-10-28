<script setup>
// import Movie from './components/TaBlica2.vue'
import { useMovieStore } from './stores/dataForCalculation'
const moveieStore = useMovieStore()
const qwe = (id) => {
  moveieStore.setActiveTab(id)
}
// import TheWelcome from './components/TheWelcome.vue'
// import NumKeyboard from './components/NumKeyboard.vue'

import TableBox from './components/table/TableBox.vue'
// import TaBlica2 from './components/TaBlica2.vue'
// import TaBlica1 from './components/Tablica1.vue'
import InputsList from './components/input/InputsList.vue'
</script>

<template>
  <main>
    <!-- <button @click="qwe(198889)">🦴</button> -->
    <!-- <TheWelcome /> -->
    <!-- <NumKeyboard /> -->
    
    <InputsList/>
    <TableBox :meter1="3" :meter2="4" :store="moveieStore.movies"/>

    <!-- <TaBlica2/> -->
    <!-- <TaBlica2 /> -->
    <!-- <TaBlica1 :propsTest="moveieStore.movies" /> -->
<!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br>   -->
    <!-- <Movie v-for="movie of moveieStore.movies" :key="movie.id" :movie="movie" /> -->
    
    <!-- <TaBlica1/> -->
    <!-- 💔{{ moveieStore.movies }}💔 -->
  </main>
</template>

<style>
body{
  padding: none;
  margin: none;;
}

@media (min-width: 1024px) {

  header .wrapper {
  }
}
</style>
