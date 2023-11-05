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
    tips: [8, 3.25, 7.2, 3, 11.11, 9.25, 10, 15.35, 7.35, 5.5, 5.5, 5.5],
    set: {
      darkTheme: false,
      grid: true
    }
  })

  const setMeter = (idx, meter) => {
    // #FIXME 2 раза событие вызывается
    carc.value.items[idx].meter = meter
  }
  const setPc = (idx, pc) => {
    carc.value.items[idx].pc = pc
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

