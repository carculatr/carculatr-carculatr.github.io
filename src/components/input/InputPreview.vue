<script setup>
import { useMovieStore } from '../../stores/dataForCalculation'
const moveieStore = useMovieStore()
</script>
<template>
  <div class="box">
    <div class="meterBox" v-if="moveieStore.movies[0].meter">
      {{ moveieStore.movies[0].meter }}

      <div class="pc" v-if="moveieStore.movies[0].pc">
        {{ moveieStore.movies[0].pc }}<span class="pc-description">шт</span>
      </div>
    </div>
    <!-- <div v-else>0</div> -->
    <div class="meterBox" v-if="moveieStore.movies[1].meter">
      {{ moveieStore.movies[1].meter }}
      <div class="pc" v-if="moveieStore.movies[1].pc">
        {{ moveieStore.movies[1].pc }} <span class="pc-description">шт</span>
      </div>
    </div>
  </div>
</template>
<style>
/* Если обнулены все поля, то сделать весь экран кнопкой */
.box:empty{
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.123);

}
.box {
  cursor: pointer;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  /* display: flex; */
  display: inline-flex;
  /* background: gold; */
  padding: 10px;
  padding-top: 5px;
  padding-left: 5px;
}
.meterBox {
  background: #000000a8;
  border: 1px solid rgba(0, 0, 0, 0.082);
  color: white;
  text-shadow: rgba(0, 0, 0, 0.668) 0px 0px 3px;
  border-radius: 67px;
  padding: 0px 8px;
  line-height: 25px;
  font-size: 17px;
  margin: 1px;

  display: flex;
  align-items: center;
  flex-direction: column;
}
.pc {
  margin-top: -10px;
  margin-bottom: -5px;

  font-size: 10px;
  /* color:gray; */
}
.pc-description {
  opacity: 0.6;
}
</style>
