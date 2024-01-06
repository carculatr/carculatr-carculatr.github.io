<script setup>
import { ref, watch, onMounted } from 'vue'
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()

// значение инпута
const inputVal = ref('')
// #TODO чтобы нельзя было вводить что то кроме чисел и точки
watch(inputVal, (newValue) => {
  // если метраж больше 80, то удалить последний символ
  //# TODO если удаляем, то сделать инпут на секунду красным
  if (newValue > 99) {
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

onMounted(() => {  
  setTimeout(() => {
    // при открытии выделять первый инпут
    inputRoll.value.focus()
    //и выделять в нём текст
    inputRoll.value.select()
  }, 0)
})
</script>

<template>
  <div class="wrap">
    <div class="inputContaner">
      <input
      autofocus
        ref="inputRoll"
        v-model="inputVal"
        placeholder="Введите метраж"
        v-on:keyup.enter="addRoll"
        type="search"
        inputmode="numeric"
        autocomplete="off"
      />
      <!-- добавить метраж -->
      <button class="add-roll" @click="addRoll" :disabled="!checkValInput()">
        <!-- + -->
      </button>
    </div>
    <div class="rolls-list">
      <template :key="val" v-for="(val, i) in carcStore.carc.rolls">
        <button class="roll-item" @click="removeRoll(i)">{{ val }}</button>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_input';
@import '@/assets/css/_psevdoPlus';

input::placeholder {
  // background: #000;
  font-size: 14px;
  display: block;
  // width:40px

}
.wrap {
  display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  // position: absolute;
  z-index: 2;
  // background: rgba(14, 14, 14, 0.786);
  // background: rgba(255, 0, 0, 0.132);
  min-height: 120px;

  // transition:3s;
  // width: 100%;
  // width: 600px;
  //  height: 300px;
}
.inputContaner {
  // width:300px;
  // background: red;
  display: flex;
  align-items: center;
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
}

//ширина инпута
input {
  width: 140px;
}
button.add-roll {
  --m3-color: rgb(93, 93, 93);
  @include mixin-psevdo-plus(var(--m3-color));
  will-change: transform, box-shadow;
  font-size: 2.7em;
  margin-left: 10px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  // border:6px solid rgb(179, 179, 179);
  border: none;
  box-shadow: 0 0 7px 0px rgba(0, 0, 0, 0.83);
  width: 1.5em;
  height: 1.5em;
  /* height:50px; */
  transition: 0.4s ease-out;
  // transition: 0.4s cubic-bezier(.64,1.58,.85,.95);
  transform: rotate(0deg);

  &:disabled {
    // --m3-color: rgb(202, 202, 202);
    opacity: 0.5;
    box-shadow: 0 0 0px 0px black;
    // background: #ffffff00;
    transform: rotate(225deg);
    // opacity:0.3
  }
}
</style>
