<script setup>
import Panzoom from '@panzoom/panzoom'
import { ref, onMounted } from 'vue'
const M3data = ref()

let panzoom
onMounted(() => {
  // Panzoom(elem, { contain: 'inside' })
  // panzoom = Panzoom(document.getElementById('panzoom-element'), { contain: 'inside' })
  const elem = document.getElementById('panzoom-element')
  panzoom = Panzoom(elem, {
    pinchAndPan: true,
    // overflow: 'visible',
    // cursor: 'grab',
    // roundPixels: true,
    minScale: 0.9,
    maxScale: 4
    
    // panOnlyWhenZoomed: true
  })

  elem.addEventListener('panzoomend', (e) => {
    const scale = e.detail.scale //Масшаб
    let x = e.detail.x //текущие координаты(центра)
    let y = e.detail.y //текущие координаты(центра)
    const factRectangle = e.target.getBoundingClientRect()
    const factW = factRectangle.width //фактическаяя ширина элемента
    const factH = factRectangle.height //фактическая высота элемента
    const w = e.target.clientWidth //ширина элемента в пикселях
    const h = e.target.clientHeight //высота элемента в пикселях
    const parentRectangle = e.target.parentElement.getBoundingClientRect() //родительский элемент
    const parentW = parentRectangle.width //ширина родительского элемента
    const parentH = parentRectangle.height //высота родительского элемента
    const diffW = parentW - w //разница между контейнером,и масштабируемым элементом
    const diffH = parentH - h //разница между контейнером,и масштабируемым элементом
    const edgeOffsetW = parentW / 2 // желаемое смещение от края
    const edgeOffsetH = parentH / 2
    const calcL = ((w + factW) / 2 - edgeOffsetW) / scale //высчитаное значение больше/меньше которого не должен быть x
    const calcR = ((w + factW) / 2 - edgeOffsetW + diffW) / scale //высчитаное значение больше/меньше которого не должен быть x
    const calcT = ((h + factH) / 2 - edgeOffsetH) / scale //высчитаное значение больше/меньше которого не должен быть y
    const calcB = ((h + factH) / 2 - edgeOffsetH + diffH) / scale //высчитаное значение больше/меньше которого не должен быть y

    if (x > calcR) x = calcR
    else if (x < -calcL) x = -calcL
    if (y > calcB) y = calcB
    else if (y < -calcT) y = -calcT
    // panzoom.pan(x, y, { duration: 200, animate: true })

    // const calc = w / 2 / scale//центр по границе
    // M3data.value = `x:${x}  scale:${scale}  |factW:${factW}|parentW:${parentW}  `
  })
  //🐓
})
</script>
<template>
  <div class="wrapper">
    <div id="panzoom-element">
      <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
      <div class="testwrap">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper{
  top: 0px;
  left: 0px;
  position: absolute;
  outline: solid 23px tomato;
  width: 100%;
  height: 100%;

    top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  /* background: gray; */
}


.testwrap {
  /* outline: solid 15px blue; */
  /* display: none; */
  /* background: red; */
  /* min-height: 300px; */
  /* overflow: hidden !important; */
  /* height: 100px; */
}
#panzoom-element {
    /* display: inline-flex; */
    display: inline-block;
  outline:dashed rgba(255, 0, 0, 0.501) 1px;
  background: rgba(255, 217, 0, 0.249);
}


.testwrap:before {
  /* content: ''; */
  position: absolute;
  /* background: rgba(0, 0, 0, 0.227); */
  top: -150%;
  left: -150%;
  width: 400%;
  height: 400%;
  z-index: -199889;
}
</style>
