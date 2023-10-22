// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      {
        meter: '8',
        pc: '2'
      },
      {
        meter: '7.2',
        pc: '15'
      }
    ],
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
      console.log("💔",id);
    }
  }
})

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
