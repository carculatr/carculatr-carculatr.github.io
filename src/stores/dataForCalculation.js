// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useCarcStore = defineStore('CarculatorStore', () => {
 const sessionCarc = ref({
   popup:[''] 
 })
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
    tips: [
      // [8, 1, 1],
      // [3, 1, 2]
    ],
    // tips: [8, 3.25, 7.2, 3, 11.11, 9.25, 10, 15.35, 7.35, 5.5, 5.5, 5.5],
    set: {
      // themes: {
      //   theme:"light",
      //   colorTT: true,
      //   cologGrid:false,
      // },
      grid: false
    }
  })
 

  //кол-во элементов для которых делать увеличенный индекс = кол-ву инпутов
  const quantityItems = carc.value.items.length
  var tipsPush = function (newVal) {
    // привести к числу
    newVal = newVal * 1
    //остановить если не положительное число или больше N
    if (!newVal || newVal > 25) return

    let newArr = [...carc.value.tips]
    const indexVal = newArr.findIndex((el) => el[0] === newVal)
    // если элемента нет - добавить
    if (indexVal < 0) {
      newArr.push([newVal, 1, 1]) //значение/использован-раз/индекс для сортировки
    }
    //если элемент уже есть
    if (indexVal >= 0) {
      //вырезать элемент из массива
      const item = newArr.splice(indexVal, 1)[0]
      //увеличить счётчик
      item[1]++
      // переместить в конец
      newArr.push(item)
    }
    // добавить индексы для сортировки
    newArr = newArr.map((item, index) => {
      //для последних элементов увеличить индекс многократно, дабы они гарантированно были показаны
      const lastItems = newArr.length - quantityItems
      if (index >= lastItems) index += 1000
      item[2] = index
      return item
    })

    //обрезать до N элементов
    newArr = newArr.slice(-12)

    // положить подсказки в стор
    carc.value.tips = newArr

    // var qwe = [...carc.value.tips]
    // var qwe = carc.value.tips

    // qwe.push([meter,1])
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
  const sortTips = function () {
    const ratioIndex = 10
    const ratioCounter = 4
    var qwe = [...carc.value.tips]

    // qwe = qwe.reverse()
    qwe = qwe.sort(function (a, b) {
      // console.log(`${a[1]}*${ratioCounter}+${a[2]}*${ratioIndex}=${a[1] * ratioCounter + a[2] * ratioIndex} `)
      a = a[1] * ratioCounter + a[2] * ratioIndex
      b = b[1] * ratioCounter + b[2] * ratioIndex
      return b - a
    })

    return qwe
  }

  const setMeter = (idx, meter) => {
    // #FIXME 2 раза событие вызывается
    carc.value.items[idx].meter = meter
    // tipsPush(meter)
  }
  const setPc = (idx, pc) => {
    carc.value.items[idx].pc = pc
    // console.log(carc.value.tips)
    // carc.value.tips
  }
  const setTheme = (theme) => {
    if (theme == 'colorTT') {
      carc.value.set.themes.colorTT = !carc.value.set.themes.colorTT
    } else if (theme == 'M3colorGrid') {
      carc.value.set.themes.colorGrid = !carc.value.set.themes.colorGrid
    } else {
      carc.value.set.themes.theme = theme
    }
  }
  const setGrid = () => {
    carc.value.set.grid = !carc.value.set.grid
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
      // console.log(state);
    },
    //глубокое слежение
    { deep: true }
  )

  return {
    sortTips,
    tipsPush,
    carc,
    sessionCarc,
    setMeter,
    setPc,
    setTheme,
    setGrid
  }
})
