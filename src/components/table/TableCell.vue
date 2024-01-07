<script setup>
import { ref, watch } from 'vue'
import PopupCell from './PopupCell.vue'
import { useCarcStore } from '../../stores/dataForCalculation'
const carcStore = useCarcStore()
const props = defineProps({
  rowNumber: Number,
  lineNumber: Number
})
const pc1 = props.rowNumber - 1
const pc2 = props.lineNumber - 1
const showPopup = ref(false) //показать попап
//#TODO убрать вывести для теста у одного блока попап test
if (props.rowNumber == 2 && props.lineNumber == 2) {
  // showPopup.value = true
}
const invalid1 = ref(false) //ненужные но отображаемые ячейки
// const invalid3 = ref(true) //ненужные но отображаемые ячейки
// let qwe =
// const invalid1Length = carcStore.carc.set.additive
const invalid2 = ref(false) //совсем ненужные ячейки
function ifInvalid() {
  let invalid1Length = carcStore.carc.set.additive*1
  var ExtraPc1 = +carcStore.carc.items[0].pc /*- 1*/
  // var ExtraPc1 = +carcStore.carc.items[0].pc +2
  var ExtraPc2 = +carcStore.carc.items[1].pc /*- 1*/
  if (ExtraPc1 < 1) ExtraPc1 = 999
  if (ExtraPc2 < 1) ExtraPc2 = 999

  if (ExtraPc1 < pc1 || ExtraPc2 < pc2) {
    invalid1.value = true
  } else {
    invalid1.value = false
  }
  if (ExtraPc1 + invalid1Length < pc1 || ExtraPc2 + invalid1Length < pc2) {
    invalid2.value = true
  } else {
    invalid2.value = false
  }
}
ifInvalid()

var rollLength = ref(0)
var rollLengthCalculate = function () {
  rollLength.value = +(
    carcStore.carc.items[0].meter * pc1 +
    carcStore.carc.items[1].meter * pc2
  ).toFixed(2)
}
rollLengthCalculate()

watch(carcStore.carc.items, async () => {
  ifInvalid()
  rollLengthCalculate()
})
</script>

<template>
  <td
    @click="showPopup = !showPopup /*Открыть попап при клике на ячейку*/"
    v-if="!invalid2 /*Не показывать ненужные ячейки на которые нет бирок*/"
    :class="{
      showPopup /*задать класс что с этого поля открыта ячейка*/,
      invalid1 /*всёже показать несколько ячеек на которые нет бирок*/
    }"
  >
    <!-- <PopupCell
      v-model="showPopup"
      v-if="showPopup"
      :meter1="carcStore.carc.items[0].meter"
      :meter2="carcStore.carc.items[1].meter"
      :pc1="pc1"
      :pc2="pc2"
      :rollLength="rollLength"
    /> -->
    <!-- <td @click="showPopup = !showPopup" v-if="!invalid2"  :class="[showPopup ? 'show' : 'hide']"> -->
    <div
      class="firstCell"
      v-if="props.rowNumber == 1 && props.lineNumber == 1"
      @click="carcStore.sessionCarc.popup[0] = 'settings'"
    >
      Max3
    </div>
    <div class="carc-cell" v-if="rollLength">
      <!-- <div
      class="cell"
      v-if="+(carcStore.carc.items[0].meter * pc1 + carcStore.carc.items[1].meter * pc2).toFixed(2)"
    > -->

      <div class="carc-sum">
        {{ rollLength }}
        <!-- {{ +(carcStore.carc.items[0].meter * pc1 + carcStore.carc.items[1].meter * pc2).toFixed(2) }} -->
      </div>
      <div class="poltora">
        {{ (rollLength + 1.5).toFixed(2) }}
      </div>

      <div class="pc-box" v-if="pc1 != 0">
        <div>
          <span class="meter">
            {{ carcStore.carc.items[0].meter }}
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
  </td>
</template>
<style scoped lang="scss">
@import '_TableCell';
td {
  font-size: 10px;
}

.firstCell {
  /* background: red; */
  min-height: 40px;
  opacity: 0.2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--m3-color);
}

.showPopup {
  border-color: (transparent);
  outline: solid 3px var(--m3-color-accent);
  z-index: 1;
  position: relative;
}
/* затемнять ячейки на которые не хватает бирок */
/* не затемнять когда из ячейки вызван showPopup */
.invalid1:not(.showPopup) {
  opacity: 0.15;
  border: dashed 1px var(--m3-color-grid-muted);
}

td {
  /* display: inline-block; */
  /* overflow: hidden; */
  min-height: 40px;
  min-width: 55px;
  /* background: tomato; */
  /* margin:0px; */
  border: 1px solid var(--m3-color-grid);
  /* border-left:3px red dashed; */
  /* padding: 5px; */
  padding-top: none;
  vertical-align: top;
}
td:empty,
:not(:first-child) > td:empty:not(:first-child) {
  /* background:red; */
  /* display: none; */
  /* visibility: hidden; */
  /* opacity: 0; */
  /* border:rgba(255, 0, 0, 0) solid; */
  border-left: transparent solid 2px;
  border-top: transparent solid 2px;
}
</style>
