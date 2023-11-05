// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useCarcStore = defineStore('CarculatorStore', () => {
  const carc = ref({
    items: [
      {
        meter: '3',
        pc: '3'
      },
      {
        meter: '3.25',
        pc: '3'
      }
    ],
    tips: [8, 3.25],
    // tips: [8, 3.25, 7.2, 3, 11.11, 9.25, 10, 15.35, 7.35, 5.5, 5.5, 5.5],
    set: {
      darkTheme: false,
      grid: true
    }
  })
  const qwe = function (meter) {
    //🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐

    const ratioIndex = 10
    const ratioCounter = 4
    let arr = carc.value.tips
    const quantityItems = 2 //кол-во элементов для которых делать увеличенный индекс = кол-ву инпутов
    // const quantityItems = carc.value.items.length
    var tipsPush = function (newVal) {
      // привести к числу
      newVal = newVal * 1
      //остановить если не положительное число
      if (!newVal) {
        console.log("❌уёвое число -", newVal)
        return
      }
      // var qwe = [...carc.value.tips]
      // qwe.push(meter)
      // qwe = qwe.slice(-6)
      // console.table(qwe)
      // carc.value.tips = qwe
      //обрезать до N элементов
      // arr = newArr.slice(-10)
      // carc.value.tips = arr
      // carc.value.tips.push(meter)
      // carc.value.tips.push(meter)
      // console.log("🛠", arr);
      // carc.value.tips = carc.value.tips.slice(-3)
    }
    tipsPush(meter)

    // console.log('❌❌❌', carc.value.tips)
  }
  //🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐🍓🔵🍪🦷🍐

  // console.log("🍐",carc.value.items.length)
  const setMeter = (idx, meter) => {
    // #FIXME 2 раза событие вызывается
    carc.value.items[idx].meter = meter
    qwe(meter)
  }
  const setPc = (idx, pc) => {
    carc.value.items[idx].pc = pc
    // console.log(carc.value.tips)
    // carc.value.tips
  }

  //чтение из localStorage
  const carcInLocalStorage = localStorage.getItem('carc')
  if (carcInLocalStorage) {
    carc.value = JSON.parse(carcInLocalStorage)._value
  }

  //зпись в localStorage
  watch(
    () => carc,
    (state) => {
      localStorage.setItem('carc', JSON.stringify(state))
    },
    //глубокое слежение
    { deep: true }
  )

  return {
    carc,
    setMeter,
    setPc
  }
})
