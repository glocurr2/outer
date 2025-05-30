import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
});

/*export const thejson = {
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response.data))
  },
};*/

