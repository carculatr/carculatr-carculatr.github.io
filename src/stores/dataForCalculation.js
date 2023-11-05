// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

// export const useCarculatorStore = defineStore('movieStore', {
//   state: () => ({
//     movies: [
//       {
//         meter: '3',
//         pc: '3'
//       },
//       {
//         meter: '3.25',
//         pc: '3'
//       }
//     ],
//     tips: [8, 3.25, 7.2, 3, 11.11, 9.25, 10, 15.35, 7.35, 5.5, 5.5, 5.5],
//     activeTab: 1
//   }),
//   actions: {
//     setActiveTab(id) {
//       // this.aciveTab = id;
//       // this.aciveTab = id;
//       console.log('🦴', this.movies)
//       this.movies[0].meter = id
//     },
//     toggleWathed(id) {
//       // console.log("");
//       // const idx = this.movies.findIndex(el => el.id === id)
//       console.log('💔', id)
//     }
//   }
// })

// export const useCarculatorStore = defineStore('movieStore', {
//   state: () => ({
//     movies: [
//       {
//         meter: '3',
//         pc: '3'
//       },
//       {
//         meter: '3.25',
//         pc: '3'
//       }
//     ],
//     activeTab: 1
//   }),
//   actions: {
//     setActiveTab(id) {
//       // this.aciveTab = id;
//       // this.aciveTab = id;
//       console.log('🦴', this.movies)
//       this.movies[0].meter = id
//     },
//     toggleWathed(id) {
//       // console.log("");
//       // const idx = this.movies.findIndex(el => el.id === id)
//       console.log("💔",id);
//     }
//   }
// })

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCarculatorStore = defineStore('MovieStore', () => {
  const movies = ref([
    {
      meter: '3',
      pc: '3'
    },
    {
      meter: '3.25',
      pc: '3'
    }
  ])
  const tips = ref([8, 3.25, 7.2, 3, 11.11, 9.25, 10, 15.35, 7.35, 5.5, 5.5, 5.5])

  const setMeter = (idx, meter) => {
    // #FIXME 2 раза событие вызывается
    // console.log('setMeter', idx, meter)
    // console.log(movies.value[idx].meter)
    movies.value[idx].meter = meter
  }
  const setPc = (idx, pc) => {
    movies.value[idx].pc = pc
  }

  const moviesInLocalStorage = localStorage.getItem('movies')
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)._value
  }

  //зпись в localStorage
  watch(
    () => movies,
    (state) => {
      localStorage.setItem('movies', JSON.stringify(state))
    },
    { deep: true }
  )

  return {
    movies,
    tips,
    setMeter,
    setPc
  }
})



/*

export const useCarculatorStore = defineStore('MovieStore', () => {
  const movies = ref([
    {
      meter: '3',
      pc: '3'
    },
    {
      meter: '3.25',
      pc: '3'
    }
  ])
  const tips = ref([8, 3.25, 7.2, 3, 11.11, 9.25, 10, 15.35, 7.35, 5.5, 5.5, 5.5])

  const setMeter = (idx, meter) => {
    // #FIXME 2 раза событие вызывается
    // console.log('setMeter', idx, meter)
    // console.log(movies.value[idx].meter)
    movies.value[idx].meter = meter
  }
  const setPc = (idx, pc) => {
    movies.value[idx].pc = pc
  }

  const moviesInLocalStorage = localStorage.getItem('movies')
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)._value
  }

  //зпись в localStorage
  watch(
    () => movies,
    (state) => {
      localStorage.setItem('movies', JSON.stringify(state))
    },
    { deep: true }
  )

  return {
    movies,
    tips,
    setMeter,
    setPc
  }
})
*/