<script setup>
import panzoom from 'panzoom'
import theEaster1 from '@/components/other/theEaster1.vue'
import { ref, onMounted } from 'vue'
const m3x = ref('🚽')
const m3scale = ref('🚽')
const out = ref('🚽')

let PZ
let PZdiv
//🟡

const debounce = (callback, wait) => {
  let timeoutId = null
  return (...args) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      callback(...args)
    }, wait)
  }
}
// .toFixed()*1
const PZM3transformDebounce = debounce((param) => {
  const parentRectangle = PZdiv.parentElement.getBoundingClientRect()
  const parentW = parentRectangle.width //ширина родительского элемента
  const parentH = parentRectangle.height //высота родительского элемента
  const factRectangle = PZdiv.getBoundingClientRect()
  const factW = factRectangle.width //фактическаяя ширина элемента
  const factH = factRectangle.height //фактическаяя высота элемента
  // const edgeOffsetW = 0 // желаемое смещение от края
  // const edgeOffsetH = 0 // желаемое смещение от края
  const edgeOffsetW = parentW / 3 // желаемое смещение от края
  const edgeOffsetH = parentH / 3 // желаемое смещение от края
  const x = PZ.getTransform().x
  const y = PZ.getTransform().y
  let newX = x
  let newY = y

  // если фактическая ширина меньше (минус X плюс смещение)(левая сторона)
  if (factW < -x + edgeOffsetW) newX = edgeOffsetW - factW
  // и если ширина родителя меньше чем (X плюс смещение)(правая сторона)
  if (x + edgeOffsetW > parentW) newX = parentW - edgeOffsetW
  if (factH < -y + edgeOffsetH) newY = edgeOffsetH - factH
  if (y + edgeOffsetH > parentH) newY = parentH - edgeOffsetH

  console.log(x, newX, edgeOffsetW, '-', factW, x !== newX, '🐓', y, newY, y !== newY)
  //если новые координаты не совпадают, то переместить элемент
  // if (x !== newX || y !== newY) {
  // if (x-9< newX ||x+9> newX|| y+9< newY ||y-9> newY) {
  if (x > newX + 30 || x < newX - 30 || y > newY + 30 || y < newY - 30) {
    console.log(x, newX, edgeOffsetW, '-', factW, x !== newX, '🔥', y, newY, y !== newY)
    // PZ.moveTo(newX, newY)
    PZ.smoothMoveTo(newX, newY)
  }
}, 100)
const m3test = () => {
  console.log('transform')
  // PZ.smoothZoom(220, 320, 3)

  // PZ.getTransform()
  // console.log(PZ.getTransform())
  // PZ.moveTo(0, 0)
  // console.log(PZ.getTransform())
  // PZ.zoomTo(0, 0, 0.9)
  // console.log(PZ.getTransform())
  // PZ.zoomTo(0, 0, 0.9)
  // console.log(PZ.getTransform())
  // PZ.zoomTo(0, 0, 1)
  // console.log(PZ.getTransform())
  // PZ.zoomAbs(0, 0, 1)
  // console.log(PZ.getTransform())
  // setTimeout(() => console.log(PZ), 100)

  // setTimeout(() => console.log(PZ.getTransform()), 100)
  // setTimeout(() => console.log(PZ.getTransform()), 2200)
}

onMounted(() => {
  PZdiv = document.querySelector('#panzoom-element')
  PZ = panzoom(PZdiv, {
    smoothScroll: false,
    zoomDoubleClickSpeed: 1,
    zoomSpeed: 1.065,
    // pinchSpeed: 2.6,

    maxZoom: 4,
    minZoom: 0.6,

    // bounds: true,
    // boundsPadding: 0,
    // boundsPadding: 0.3,

    autocenter: true,

    onTouch: function (e) {
      // записать позицию курсора
      clickPosition = {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      }
      //дождаться отпускания пальца и вызвать M3panzoomTouchEnd
      e.target.addEventListener('touchend', M3panzoomTouchEnd, { once: true })
      return true
    },

    beforeMouseDown: function (e) {
      // записать позицию курсора
      clickPosition = { x: e.x, y: e.y }
      return false
    }
  })

  //после трансформирования
  PZ.on('transform', function (e) {
    // console.log("🥕transform")
    //проверить, не вылетело ли за экран
    PZM3transformDebounce(e)
  })
  // после отпускания мыши
  PZ.on('panend', function (e) {
    console.log('🥕panend')
    //проверить, не вылетело ли за экран
    // PZM3transformDebounce(e)
  })
  setTimeout(() => {
    m3test()
  }, 0)
})

let clickPosition = {}
const M3panzoomCheckPosition = (newX, newY) => {
  const { x, y } = clickPosition
  const z = 4 //zona клика
  //если позиция не изменилась
  if (x == newX && y == newY) {
    return true
  }
  //если позиция изменилась менее чем на z пикселей(дрогнула мышь)
  else if (y + z > newY && y - z < newY && x + z > newX && x - z < newX) {
    return true
  }
  //если функция вызвана через M3panzoomTouchEnd, то координаты будут 0:0
  else if (newX == 0 && newY == 0) {
    return true
  }
  return false
}
const M3panzoomClick = (e, param) => {
  const check = M3panzoomCheckPosition(e.x, e.y)
  // выполнить если не было перемещения
  if (check) {
    count.value = param
  }
}
//эмулировать клик при нажатии пальцем для panzoom элемента
const M3panzoomTouchEnd = (e) => {
  var check = M3panzoomCheckPosition(e.changedTouches[0].pageX, e.changedTouches[0].pageY)
  // если курсор не сдвинулся
  if (check) {
    // кликнуть по элементу под курсором
    e.target.click()
    //или напрямую вызвать функцию если не важны параметры
  }
}
</script>

<template>
  <!-- {{ out }}
  x:{{ m3x }} scale:{{ m3scale }}
  <br />
  <button @click="PZ.moveTo(-100, -100)">m-100</button>
  <button @click="PZ.moveTo(0, 0)">m0</button>
  <button @click="PZ.moveTo(100, 100)">m100</button>
  <button @click="PZ.moveTo(200, 200)">m200</button>
  <button @click="PZ.moveTo(300, 300)">m300</button>
  <button @click="PZ.moveTo(400, 400)">m400</button>
  <button @click="PZ.moveTo(500, 500)">m500</button>
  <br />
  <button @click="PZ.zoomAbs(0, 0, 0.5)">z0:0 0.5</button>
  <button @click="PZ.zoomAbs(0, 0, 1)">z0:0 1</button>
  <button @click="PZ.zoomAbs(0, 0, 2)">z0:0 2</button>
  <br />
  <button @click="PZ.zoomAbs(100, 100, 0.5)">z100:100 0.5</button>
  <button @click="PZ.zoomAbs(100, 100, 1)">z100:100 1</button>
  <button @click="PZ.zoomAbs(100, 100, 2)">z100:100 2</button>
  <br />
  <button @click="PZ.zoomAbs(200, 200, 0.5)">z200:200 0.5</button>
  <button @click="PZ.zoomAbs(200, 200, 1)">z200:200 1</button>
  <button @click="PZ.zoomAbs(200, 200, 2)">z200:200 2</button> -->
<theEaster1/>
  <div class="wrapper">
    <div id="panzoom-element">
      <slot> </slot>
    </div>
  </div>
</template>

<style>
#panzoom-element {
  display: inline-flex;
  /* 🔴🔴🔴 */
  background: rgba(255, 0, 0, 0.1);
  /* overflow: hidden; */
  /* height: 2100px; */
  /* width: 150px; */
}

.wrapper {
  user-select: none;
  top: 0px;
  left: 0px;
  position: fixed;
  /* outline: solid 23px tomato; */
  width: 100%;
  height: 100%;

  /* top: 10%; */
  /* left: 10%; */
  /* width: 80%; */
  /* height: 80%; */
  /* display: inline-flex; */
  /* 🔴🔴🔴 */
  /* overflow: hidden; */
  height: 500px;
  width: 500px;
  top: 100px;
  left: 100px;
  background: rgba(255, 217, 0, 0.46);
}
</style>
