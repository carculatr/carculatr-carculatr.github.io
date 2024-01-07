<script setup>
import { ref } from 'vue'
import ListItemPcBox from './ListItemPcBox.vue'
import ListItemRollBox from './ListItemRollBox.vue'
const props = defineProps(['valItem'])
const sum = props.valItem[0].toFixed(2) * 1
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
const checkShow = () => {
  const param1 = !carcStore.carc.rolls[0] //Если роликов нет то показывать все
  const param2 = carcStore.carc.set //в настройках выбрано только с роликами
  const param3 = props.valItem[2][0] //если есть подходящий ролик
  var qwe =(param1||param2)
  console.log('🥕', qwe, "🥕",param1,param2,param3)
  return qwe
  // return (!carcStore.carc.set.onlyWithRoll  || props.valItem[2][0]) //если есть подходящие ролики
}
</script>

<template>
  {{ carcStore.carc.set.onlyWithRoll }}
  <div class="stripe" v-if="checkShow()">
    <!-- <div class="stripe" >   -->
    <!-- {{ valItem[2][0] }} -->
    <!--  подходящие ролики  -->
    <ListItemRollBox :valItem="props.valItem" />
    <div class="carc-list-item">
      <div class="grid-warp">
        <ListItemPcBox :pcs="props.valItem[1]" />
        <div class="grid-sum sum">{{ sum }}</div>
        <div class="grid-poltora poltora">{{ (sum + 1.5).toFixed(2) }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carc-list-item {
  user-select: none;
  color: var(--m3-color);
}
.sum {
  font-size: 2.2em;
}
.poltora {
  font-size: 1.2em;
  color: var(--m3-color-muted-1);
}

.grid-warp {
  display: grid;
  justify-content: center;
  grid-template-columns: 180px 90px 30px;
  // grid-template-columns: 1.9fr 120px 1fr;
  /* grid-template-rows: repeat(1, 1fr); */
  /* grid-template-areas: ' poltora decrypt  sum '; */
  /* grid-template-areas: ' poltora decrypt  sum '; */
}

.sum,
.poltora {
  display: flex;
  justify-content: center;
  align-items: center;
}
.poltora {
  align-items: center;
  justify-content: flex-start;
}
</style>
