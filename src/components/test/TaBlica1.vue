<script setup>
// import { useCarculatorStore } from '../stores/counter';
// const moveieStore = useCarculatorStore();
</script>
<script>
export default {
  props: {
    propsTest: String
  },
  data: function () {
    return {
      msg: 'Я родился'
    }
  }
}
</script>

<template>
  <div>
    🍃
    {{ this.propsTest }}
    🍃
    <!-- 🍃🍃{{moveieStore.movies}}🍃🍃  -->
  </div>
  <!-- <div id="box"> -->
  <!-- <InputBox propsMeter="8"/> -->
  <!-- <InputBox propsMeter="7.2"/>  -->

  <!-- </div> -->
</template>

<style scoped>
div {
  /* font-size: 55px;; */
  z-index: 99999;
  background: tomato;
  position: fixed;
  bottom: 0px;
}
</style>
