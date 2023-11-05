<script setup>
import { useCarcStore } from '../../stores/dataForCalculation'
const carcStore = useCarcStore()
const props = defineProps(['meter1', 'meter2', 'pc1', 'pc2', 'rollLength'])
</script>
<template>
  <div class="wrap">
    <div class="backdrop">
      <div class="pupup">
        <!-- 🍪🍪🍪🍪🍪🍪🍪🍪 -->


        <div class="cell">
          <!-- <div
      class="cell"
      v-if="+(carcStore.carc.items[0].meter * pc1 + carcStore.carc.items[1].meter * pc2).toFixed(2)"
    > -->

          <div class="rollLength">
            {{ rollLength }}
            <!-- {{ +(carcStore.carc.items[0].meter * pc1 + carcStore.carc.items[1].meter * pc2).toFixed(2) }} -->
          </div>
          <div class="poltora">
            {{ (rollLength + 1.5).toFixed(2) }}
          </div>

          <div class="pc-box" v-if="pc1 != 0">
            <div>
              <span class="meter">
                {{ meter1 }}
              </span>
              <span class="x"> x </span>
              <span class="pc">
                {{ pc1 }}
              </span>
              <span class="pc-descripion">шт</span>
            </div>
          </div>
          <div class="pc-box" v-if="pc2 != 0">
            <div>
              <span class="meter">
                {{ carcStore.carc.items[1].meter }}
              </span>
              <span class="x"> x </span>
              <span class="pc">
                {{ pc2 }}
              </span>
              <span class="pc-descripion">шт</span>
            </div>
          </div>
        </div>

        <!-- 🍪🍪🍪🍪🍪🍪🍪🍪 -->
        <!-- <div class="length">
          {{ props.rollLength }}
          <div class="poltora">
            {{ props.rollLength - 1.5 }}
          </div>
        </div>
        <div>
          <button>+</button>
          {{ props.meter1 }}x {{ props.pc2 }}шт
          <button>-</button>
        </div>
        <div>
          <button>+</button>
          {{ props.meter2 }} x {{ props.pc1 }}шт
          <button>-</button>
        </div> -->
        <!-- 🍪🍪🍪🍪🍪🍪🍪🍪 -->
      </div>
    </div>
  </div>
</template>
<style scoped>


.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 8;
  background: rgba(0, 0, 0, 0.373);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pupup {

  /* z-index: 9; */
  background: rgb(244, 244, 244);
  border-radius: 12px;
  padding: 30px;
  max-width: 400px;
  max-height: 500px;

  width: 70%;
  height: 55%;
  box-shadow:
    rgba(8, 8, 8, 0.201) 60px 0px 25px -50px,
    rgba(8, 8, 8, 0.201) -60px 0px 25px -50px;
  /* box-shadow: rgba(12, 12, 12, 0.163) 0 0 100px 1px; */
  /* position: fixed; */
  /* position: absolute; */
  /* position: relative; */
}
.cell{
  /* background: red; */
  font-size: 144px;
  transform:scale(3)
  translateY(50px)
}
</style>
