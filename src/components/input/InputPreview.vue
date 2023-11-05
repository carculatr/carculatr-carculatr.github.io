<script setup>
import { useCarcStore } from '../../stores/dataForCalculation'
import {  onMounted } from 'vue'
const carcStore = useCarcStore()

// const el = ref()

onMounted(() => {
  const elemRightBottom = document.querySelector('#fixedRightBottom')

  var viewport = window.visualViewport
  function viewportHandler() {
    elemRightBottom.classList.remove('animation')
    setTimeout(() => {
      elemRightBottom.classList.add('animation')
    }, 0)
    //элемент на странице по размеру которого определять смещение при масштабировании на телефоне
    var layoutViewport = document.getElementById('layoutViewport')
    //Смещения
    var offsetRight =
      viewport.width - layoutViewport.getBoundingClientRect().width + viewport.offsetLeft
    var offsetBottom =
      viewport.height - layoutViewport.getBoundingClientRect().height + viewport.offsetTop
    elemRightBottom.style.transform = `
      translate(${offsetRight}px, ${offsetBottom}px) scale(${1 / viewport.scale})`
  }
  window.visualViewport.addEventListener('scroll', viewportHandler)
  window.visualViewport.addEventListener('resize', viewportHandler)
  viewportHandler() //вызвать сразу
})
</script>

<script></script>
<template>
  <div id="wrap">
    <!-- поле чтобы рассчитать высоту экрана -->
    <div id="layoutViewport"></div>
    <div id="fixedRightBottom">
      <div class="box">
        <div class="meterBox" v-if="carcStore.carc.items[0].meter">
          {{ carcStore.carc.items[0].meter }}

          <div class="pc" v-if="carcStore.carc.items[0].pc">
            {{ carcStore.carc.items[0].pc }}<span class="pc-description">шт</span>
          </div>
        </div>
        <!-- <div v-else>0</div> -->
        <div class="meterBox" v-if="carcStore.carc.items[1].meter">
          {{ carcStore.carc.items[1].meter }}
          <div class="pc" v-if="carcStore.carc.items[1].pc">
            {{ carcStore.carc.items[1].pc }} <span class="pc-description">шт</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/*🦯 fixed position on scale android */
/*поле чтобы рассчитать высоту экрана*/
#layoutViewport {
  position: fixed;
  width: 100%;
  height: 100%;
  visibility: hidden;
}
#fixedRightBottom {
  /* transition: 0.3s cubic-bezier(0,1.54,1,1.66); */
  /* 
  transition: 0.3s cubic-bezier(0,1.65,.75,.47);
  transition: 0.3s cubic-bezier(0,1.29,.15,.92);
  transition: 0.3s cubic-bezier(0,1.02,1,.05);
  transition: 0.3s cubic-bezier(0,.95,.64,1.14);
  transition: 0.3s cubic-bezier(0,1.38,0,1.02);
  transition: 0.3s cubic-bezier(0,1.38,.16,1.23);
  transition: 0.3s cubic-bezier(0,.64,.33,1); */
  position: fixed;
  transform: translate(0px, 0px) scale(1);
  right: 0;
  bottom: 0;
  z-index: 10;
}
.animation .box {
  opacity: 1;
  /* transition: 0.8s 0.05s cubic-bezier(.57,0,.49,1);
  transition: 0.8s 0.05s cubic-bezier(.21,-0.09,.32,1.02);
  transition:0.7s 0.05s cubic-bezier(.5,-0.01,.52,.99); */
  transition: 0.7s 0.05s cubic-bezier(0.5, 0, 0.39, 0.99);

  /* animation: show-button 2s both; */
}
/* @keyframes show-button {
  0%    {opacity: 0;  }
  20%   { opacity: 0; }
  50%   {  opacity: 0;}
  100%  { opacity: 1;}
} */

/*🦯 fixed position on scale android  END*/
.box {
  opacity: 0;
  user-select: none;
  cursor: pointer;
  /* position: fixed; */
  /* z-index: 10; */
  /* top: 0; */
  /* left: 0; */
  /* display: flex; */
  display: inline-flex;
  /* background: gold; */
  padding: 10px;
  padding-top: 5px;
  padding-left: 5px;

  /*NEW */
  right: 0;
  bottom: 0;
  /* background: red; */
  width: 100px;
  height: 50px;
  position: absolute;
}
/* Если обнулены все поля, то сделать весь экран кнопкой */
.box:empty {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.123);
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
