<script setup>
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()
</script>


<template>
  <div>
    TIPS{{ moveieStore.tips }}

  </div>
</template>
<style scoped>
div{
  background: gold;
  position: fixed;
  bottom:0;
  left:0;
  z-index: 9;
  width: 100%;
  padding:30px;
}
</style>
