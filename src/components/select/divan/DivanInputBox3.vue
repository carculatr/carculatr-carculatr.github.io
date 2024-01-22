<script setup>
import { ref, watch, onMounted } from 'vue'
import InputMeterTips from './InputMeterTips.vue'
import { useCarcStore } from '@/stores/dataForCalculation'
const carcStore = useCarcStore()
const props = defineProps(['onHide-input', /*'movOFFie',*/ 'index' /*, 'inputOrPreview'*/])
const emit = defineEmits(['inputHide'])

const counter = ref('') //счётчик
const meter = ref('') //метраж
const idx = props.index //номер инпута

var minus = function () {
  counter.value--
  if (counter.value <= 0) {
    counter.value = ''
    // carcStore.carc.items[props.index].pc = 0
    // carcStore.carc.items[props.index].meter = 0
  }
}

var plus = function () {
  counter.value++
  // carcStore.carc.items[props.index].meter = this.counter
  // carcStore.carc.items[props.index].pc = this.counter
}

//При клике в поле выделять текст
var selectTxt = function (el) {
  console.log('при клике в поле')
  // el.target.select()
  // inputMeter.value.select()
}
var pressEnter = function () {
  console.log('🔰pressEnter')
  const listInputs = document.querySelectorAll('input.meter')
  // const idx = props.index
  const length = listInputs.length - 1
  if (props.index < length) {
    //переместиться на следующий инпут
    // listInputs[props.index + 1].focus()
    // listInputs[props.index + 1].select()
  } else {
    //закрыть окно если последний инпут
    emit('inputHide')
  }
}
const startDataFromPinia = function () {
  console.log('🔰startDataFromPinia')
  // прекратить выполнение если это
  if (props.index === 'addNew') return false
  const pc = carcStore.carc.items[props.index].pc
  if (pc > 0) {
    counter.value = carcStore.carc.items[props.index].pc
  }
  meter.value = carcStore.carc.items[props.index].meter
}
if (props.index !== 'addNew') {
  startDataFromPinia()
}
watch(counter, async (newQuestion) => {
  console.log('🔰watch counter', newQuestion)
  // return false // временно отключить для теста
  // if (props.index === 'addNew') return false
  const valFilter = inputFilter(newQuestion).replace(/[.]/g, '') //убрать точки запятые и точки для счётчика
  counter.value = valFilter

  carcStore.setPc(props.index, valFilter)
  // carcStore.carc.items[props.index].pc = newQuestion  // console.log(carcStore.setActiveTab);
})
watch(meter, async (newQuestion) => {
  console.log('🔰watch meter', newQuestion)
  if (props.index === 'addNew') {
    // divanAdd()
    return false
  }
  // return false // временно отключить для теста
  // inputFilter(newQuestion)
  let valFilter = inputFilter(newQuestion)

  // meter.value = valFilter

  // carcStore.carc.items[props.index].meter = newQuestion
  //привести к числу, иначе может проскочить "3." ошибки не вызовет, но не красиво
  valFilter = valFilter * 1

  // отправлять в хранилище, только если больше нуля или меньше N
  if (valFilter > 0.2 && valFilter < 44) {
    carcStore.setMeter(props.index, valFilter)
  }
})
const inputFilter = function (data) {
  //пропустить только числа
  data += '' //привести к строке т.к. регэксп ругаица на number
  data = data.replace(/[,]/g, '.') //comma
  data = data.replace(/[^.\d]/g, '')
  data = data.replace(/^([^.]*\.)|\./g, '$1') //double dot
  return data
}
const inputMeter = ref()

const divanDelete = () => {
  if (props.index == 'addNew') {
    // если это строка добавления дивана, то добавить диван
    // divanAddButton()
    divanAddv2();
    //  и прекратить выполнение данной "divanDelete"
    return false
  }
  const store = carcStore.carc.items
  //если последний элемент, то не удалять, а очистить
  if (store.length == 1) {
    meter.value = ''
    counter.value = ''
    inputMeter.value.focus()
    return false
  }
  // удалить метраж
  store.splice(props.index, 1)
  console.log('🔰divanDelete', props.index, carcStore.carc.items)
}
const divanAdd = () => {
  console.log('🔰divanAdd')
  // если не нулевое значение
  if (meter.value > 0) {
    //убрать фокус с инпута чтобы сразу спрятался(без этого будет белая вспышка)
    inputMeter.value.blur()
    //создать новый метраж с текущими показателями
    const newDivan = { pc: counter.value, meter: meter.value }
    // отправить новый метраж в стор
    carcStore.carc.items.push(newDivan)
    counter.value = ''
    meter.value = ''
    setTimeout(() => {
      const listInputs = document.querySelectorAll('input.meter')
      listInputs[listInputs.length - 2].focus()
    }, 0)
    // вделить инпкут с предыдущей стрчоке(последней)
  }
  // очистить текущие данные

  // console.log(carcStore.carc.items)
}
const divanAddv2 = () => {
  console.log("🔰divanAddv2");
  carcStore.carc.items.push({ pc: '', meter: '' })
  setTimeout(() => {
    const listInputs = document.querySelectorAll('input.meter')
    listInputs[listInputs.length - 2].focus()
  }, 0);
}
const divanAddButton = () => {
  console.log('🔰divanAddButton')
  inputMeter.value.focus()
}
const divanAddButton2 = () => {
  // console.log('🔰divanAddButton2')
  // const listInputs = document.querySelectorAll('input.meter')
  setTimeout(() => {
    // listInputs[listInputs.length - 2].focus()
  }, 100)
}

onMounted(() => {
  console.log("🔰onmounted",props.index);
  // console.log('🍓', inputMeter.value, props.index)
  // при открытии выделять первый инпут
  if (props.index == 0) {
    // inputMeter.value.focus()
    // inputMeter.value.select()
  }
})
</script>

<template>
  <li class="wrap-divans" :class="[props.index === 'addNew' ? 'addNew' : '']">
    <div class="box-divan">
      <!-- {{ props.index }}🔞{{ idx }} -->
      <!-- Метраж -->
      <div class="meterPc">
        <input
          ref="inputMeter"
          v-model="meter"
          @click="selectTxt"
          v-on:keyup.enter="pressEnter"
          type="search"
          inputmode="numeric"
          autocomplete="off"
          class="meter"
        />
        <!-- <button
          ref="eraser"
          @click="eraserClick"
          v-on:mousedown="eraserMousedown"
          class="eraser"
        ></button> -->
      </div>
      <!-- штук -->
      <div class="boxPc">
        <button v-on:mousedown="minus" class="increment minus" v-on:keyup.enter="pressEnter">
          -
        </button>
        <input
          v-on:keyup.enter="pressEnter"
          @click="selectTxt"
          v-model="counter"
          type="search"
          inputmode="numeric"
          autocomplete="off"
          class="pc"
          placeholder="ШТ"
        />
        <button v-on:mousedown="plus" class="increment plus" v-on:keyup.enter="pressEnter">
          +
        </button>
      </div>
      <div class="delete-box">
        <button class="delete btn1" @click="divanDelete"></button>
        <button
          v-if="props.index == 'addNew'"
          class="delete btn2"
          @mousedown="divanAddButton2"
        ></button>
      </div>
    </div>
    <!-- <InputMeterTips v-model="meter" :parentValue="meter" /> -->
  </li>
</template>

<style scoped lang="scss">
@import '@/assets/css/_input.scss';
@import '@/assets/css/_psevdoPlus';
.addNew {
  // background: red;
  // margin-bottom: -35px;
}
//строка добавления без фокуса в инпуте
.addNew:not(:has(input:focus)) {
  & > div {
    background: transparent;
    & input,
    & .increment {
      // visibility: hidden;
      opacity: 0;
    }
  }
  & > ul {
    background: transparent;
    // opacity: 0.1;
  }
  .delete {
    transform: rotate(0deg);
  }
  // показывать вторую кнопку
  .delete.btn2 {
    // display: none;
    // #FIXME c 2 кнопками бага,→ если выделить инпут новый, и открыть другое окно, потом нажать кнопку плюс, то произойдет ошибка
    visibility: hidden;
  }
}
//строка добавления с фокусом в инпуте
.addNew:has(input:focus) {
  // показывать первую кнопку
  .delete.btn1 {
    // display: none;
    visibility: hidden;
  }
}
.delete-box {
  position: relative;
}
.addNew {
  button.delete.btn2 {
    left: 0;
    position: absolute;
  }
}
/*контейнер для метража */
.box-divan {
  z-index: 6;
  height: 50%;
  margin: 3px;
  margin-bottom: 0;
  border-radius: 6px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  justify-content: space-evenly;
  align-items: center;
}
// если единственный метраж( не считая строки добавления диванов)
.wrap-divans:nth-of-type(1):nth-last-child(2) {
  .delete {
    // opacity: 0;
  }
  .delete:before,
  .delete:after {
    // transform:scale(0.1);
    // opacity: 0.1;
  }
}

.meterPc,
.boxPc {
  display: flex;
  align-items: center;
  // outline: dashed red 1px;
}

//ширина инпута "шт"
.pc {
  width: 100px;
}
//ширина инпута "метраж"
.meter {
  width: 150px;
}

/*кнопки */
button {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-family: 'Courier New', Courier, monospace;
  color: rgb(110, 110, 110);
  /* padding:10px; */
  background: transparent;
  background: rgb(212, 212, 212);
  border-radius: 50%;
  border: none;
  position: relative;
  background: var(--border-color);
}
.increment {
  height: 25px;
  width: 25px;
}
.minus {
  z-index: 1;
  margin-right: -16px;
}
.plus {
  margin-left: -16px;
}
.plus:active,
.minus:active {
  background: var(--accent-color);
}
.plus:after,
.minus:after {
  content: '';
  /* border-radius:50%; */
  margin-left: -13px;
  margin-top: -23px;

  height: 70px;
  width: 50px;
  opacity: 0.5;
  /* background: red; */
  position: absolute;
  top: 0px;
  left: 0px;
}

.eraser:active {
  background-color: rgba(161, 161, 161, 0.5);
  opacity: 0.8;
}

.eraser.animate {
  animation: brush-animate 5s;
}

button.delete {
  @include mixin-psevdo-plus(var(--m3-color-muted-1));
  // border: 3px solid ;
  height: 45px;
  min-width: 45px;
  .wrap-divans & {
    transform: rotate(45deg);
  }
}

.eraser {
  z-index: 9;

  font-family: 'Courier New', Courier, monospace;
  width: 50px;
  height: 50px;
  margin-left: 4px;
  opacity: 0.3;
  background-color: rgb(255, 255, 255);
  background-position: 4px 5px;
  background-size: 40px;
  background-repeat: no-repeat;
}
</style>
