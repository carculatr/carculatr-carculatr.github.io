<script setup>
import { ref, watch, onMounted } from 'vue'
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()

// значение инпута
const inputVal = ref('44')
// #TODO чтобы нельзя было вводить что то кроме чисел и точки
watch(inputVal, (newValue) => {
  // если метраж больше 80, то удалить последний символ
  //# TODO если удаляем, то сделать инпут на секунду красным
  if (newValue > 80) {
    setTimeout(() => {
      inputVal.value = newValue.slice(0, -1)
    }, 100)
    // console.log(newValue.toFixed(2));
  }
})
const checkValInput = ref(() => {
  // если введено больше одного символа
  const param1 = inputVal.value.length > 1
  //  если метраж больше 7
  const param2 = inputVal.value > 7
  return param1 && param2
})
// инпут (для фитльтрации и фокуса)
const inputRoll = ref()
const addRoll = () => {
  // еси значение в инпуте прошло проверку
  if (checkValInput.value()) {
    // избавляемся от лишниих нулей после запяой и округляем до 2 знаков после запятой
    const numReduce = Number(Number(inputVal.value).toFixed(2))
    // отправить значение в стор
    carcStore.carc.rolls.push(numReduce)
    // очистить инпут
    inputVal.value = ''
  }
  //выделить инпут
  inputRoll.value.focus()
}
const removeRoll = (roll) => {
  console.log(roll)
  carcStore.carc.rolls.splice(roll, 1)
}
</script>

<template>
  <div class="wrap">
    <!-- <div clalss="inputContaner"> -->
    <input
      ref="inputRoll"
      v-model="inputVal"
      placeholder="Введите метраж"
      v-on:keyup.enter="addRoll"
      type="search"
      inputmode="numeric"
      autocomplete="off"
    />
    <!-- добавить метраж -->
    <button @click="addRoll" :disabled="!checkValInput()">+</button>

    <!-- </div> -->
    <br />
    <div class="rolls-list">
      <template :key="val" v-for="(val, i) in carcStore.carc.rolls">
        <button class="roll-item" @click="removeRoll(i)">{{ val }}</button>
      </template>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  z-index: 2;
  background: rgba(14, 14, 14, 0.786);
  backdrop-filter: blur(5px);
  width: 100%;
  /* height: 300px; */
}
.rolls-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.roll-item {
  background: white;
  color: black;
  font-size: 1.4em;
  margin: 3px;
  padding: 0.3em;
  border-radius: 2em;
  border: none;
  /* width:3em; */
  /* height: 2em; */
}
</style>
