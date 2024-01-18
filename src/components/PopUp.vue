<script setup>
import CarcSetting from './CarcSetting.vue'
import RollInputBox from '@/components/select/roll/RollInputBox.vue'
import theEasterPizza from '@/components/other/theEasterPizza.vue'
import theEasterDuck from '@/components/other/theEasterDuck.vue'
import { ref, watch } from 'vue'
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
// const showPopup = ref(true)
const popupContant = ref('')
// const popupContant = ref('inputRoll')
// setTimeout(() => (carcStore.sessionCarc.popup[0] = 'inputRoll'), 0)
setTimeout(() => (carcStore.sessionCarc.popup[0] = 'theEasterPizza'), 0)
// setTimeout(() => (carcStore.sessionCarc.popup[0] = 'settings'), 0)
const close = () => {
  carcStore.sessionCarc.popup[0] = ''
}
watch(carcStore.sessionCarc.popup, async (newVal, oldVal) => {
  popupContant.value = newVal[0]
  if (newVal[0] == false) {
    document.body.classList.remove('m3popup')
  } else {
    document.body.classList.add('m3popup')
  }

})
</script>
<template>
  <div class="backdrop" @click="close" v-show="popupContant">
    <!-- <div class="backdrop" @click="showPopup = false" v-if="showPopup"> -->
    <div class="animate-warp">
      <div class="popup" v-on:click.stop>
        <div class="close" @click="close"></div>
        <!-- {{ carcStore.sessionCarc.popup }} -->
        <CarcSetting v-if="popupContant == 'settings'" />
        <RollInputBox v-if="popupContant == 'inputRoll'" />
        <theEasterPizza v-if="popupContant == 'theEasterPizza'" />
        <theEasterDuck v-if="popupContant == 'theEasterDuck'" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.animate-warp {
  // background: rgba(255, 99, 71, 0.334);
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s 0.01s ease-out;
}

.popup {
  transition: 0.2s 0.01s ease-out;
  // transform: translateY(-50px);
}
@media (max-height: 400px) {
  .popup {
    transform: translateY(0px);
  }
}
.backdrop {
  // padding-bottom: 30%;//🌾
  overflow: hidden;
  z-index: 30;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100dvh;

  position: fixed;

  // background: rgba(21, 21, 21, 0.878);

  // .M3dark &{background: rgba(255, 255, 255, 0.726);}
  backdrop-filter: blur(0px);

  animation: blur 0.7s;
  // чтобы анимция останаливалась в конечной позиции
  animation-fill-mode: forwards;
}
//keyframes для плавного появления блюра
@keyframes blur {
  0% {
    backdrop-filter: blur(0px);
    // background: red;
  }
  50% {
    // backdrop-filter: blur(5px);
    // background: blue;
  }
  100% {
    backdrop-filter: blur(2px);
    background: var(--m3-backdrop);
    // background: blue;
  }
}

.popup {
  // transform:translateY(-100px);
  max-width: 90vw;
  position: relative;
  padding: 40px 30px 30px;
  border-radius: 10px;
  /* width: 50%; */
  /* height: 50%; */
  background: var(--m3-bg-popup);
  // background: rgba(255, 255, 255, 0.785);
  // backdrop-filter: blur(3px);
  color: var(--m3-color);
  box-shadow: 0 0 20px #0000003e;
  // background:rgb(49, 49, 49);
  /* width:; */

  display: flex;
  justify-content: center;
  align-items: center;
}
.close {
  cursor: pointer;
  width: 30px;
  height: 30px;
  top: 0px;
  right: 0px;
  position: absolute;
  opacity: 0.3;
}
.close:hover {
  opacity: 0.5;
}
.close::before,
.close::after {
  content: '';
  position: absolute;
  width: 1px;
  height: 50%;
  left: 50%;
  top: 25%;
  background: var(--m3-color);

  transform: rotate(45deg);
}
.close::before {
  transform: rotate(-45deg);
}
</style>
