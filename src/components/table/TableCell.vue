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
// вывести для теста у одного блока попап
if (props.rowNumber == 2 && props.lineNumber== 2) {
  showPopup.value = true;
}
const invalid1 = ref(false) //ненужные но отображаемые ячейки
// const invalid3 = ref(true) //ненужные но отображаемые ячейки
const invalid1Length = 3
const invalid2 = ref(false) //совсем ненужные ячейки
function ifInvalid() {
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
  <td @click="showPopup = !showPopup" v-if="!invalid2" :class="{ invalid1 }">
    <PopupCell
    v-if="showPopup" 
      :meter1="carcStore.carc.items[0].meter"
      :meter2="carcStore.carc.items[1].meter"
      :pc1="props.rowNumber"
      :pc2="props.lineNumber"
      :rollLength="rollLength"
    />
    <div class="firstCell" v-if="props.rowNumber == 1 && props.lineNumber == 1">Max3</div>
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
<style>
@import url("TableCell.scss"); 
td{
  font-size: 10px;
}

</style>
