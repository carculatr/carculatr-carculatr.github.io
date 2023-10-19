<script setup>
import Movie from './components/TaBlica2.vue'
import { useMovieStore } from './stores/dataForCalculation'
const moveieStore = useMovieStore()
const qwe = (id) => {
  moveieStore.setActiveTab(id)
}
// import TheWelcome from './components/TheWelcome.vue'
// import NumKeyboard from './components/NumKeyboard.vue'

import TableBox from './components/table/TableBox.vue'
import TaBlica2 from './components/TaBlica2.vue'
import TaBlica1 from './components/Tablica1.vue'
import InputsList from './components/InputsList.vue'
</script>

<template>
  <main>
    <!-- <button @click="qwe(198889)">🦴</button> -->
    <!-- <TheWelcome /> -->
    <!-- <NumKeyboard /> -->
    
    <TableBox/>
    <!-- <InputsList/> -->

    <!-- <TaBlica2/> -->
    <!-- <TaBlica2 /> -->
    <!-- <TaBlica1 :propsTest="moveieStore.movies" /> -->
<!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br>   -->
    <!-- <Movie v-for="movie of moveieStore.movies" :key="movie.id" :movie="movie" /> -->
    
    <!-- <TaBlica1/> -->
    <!-- 💔{{ moveieStore.movies }}💔 -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
