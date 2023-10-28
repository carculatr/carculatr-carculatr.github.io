// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      {
        meter: '3',
        pc: '3'
      },
      {
        meter: '3.25',
        pc: '3'
      }
    ],
    tips:[8,7.2,3,25],
    activeTab: 1
  }),
  actions: {
    setActiveTab(id) {
      // this.aciveTab = id;
      // this.aciveTab = id;
      console.log('🦴', this.movies)
      this.movies[0].meter = id
    },
    toggleWathed(id) {
      // console.log("");
      // const idx = this.movies.findIndex(el => el.id === id)
      console.log('💔', id)
    }
  }
})


// export const useMovieStore = defineStore('movieStore', {
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
