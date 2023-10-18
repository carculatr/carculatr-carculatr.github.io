<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div id="keyboard">
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <!-- ряд -->
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <!-- ряд -->
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <!-- ряд -->
    <button>.</button>
    <button>0</button>
    <button class="enter">Ok</button>
    <button class="eraster">стереть</button>
  </div>
</template>

<style scoped>
#keyboard {
  display: flex;
  margin: 0;
  top: 0px;
  left: 0px;
  position: fixed;
  /* background: tomato; */
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

button {
  font-size: 40px;
  padding: 3px;
  margin: 3px;
  border-radius: 6px;
  width: calc(33.3333% - 6px);
  background: rgb(179, 179, 179);
  border: 2px solid black;
}
.enter {
  background: orange;
}
</style>
