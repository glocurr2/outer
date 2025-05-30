import { defineStore } from 'pinia'
import axios from 'axios'

 export const useBookStore = defineStore('bookStore', {
    state: () => ({
       bookdata: null,
       loading: false,
       error: null,
       book: [],
       users: [],
    }),
    actions: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get("./get-books2.php");
        const allbooks = response.data.results;
        this.bookdata = allbooks; 
        return this.bookdata;            
      } catch (error) {
        this.error = error;
        alert("error" + error)
      } finally {
        this.loading = false;
        //console.log(this.data);
      }      
    },
     async fetchSingle(num) {
      this.loading = true;
      this.book = [];
      this.error = null;
      try {
        const response = await axios.get('http://localhost:5173/get-books2.php?id=' + num);
        const allbooks = response.data.results;
        this.book = allbooks.filter(item => (item.id == num));//works!
        return this.book;        
      } catch (error) {
        this.error = error;
        alert("error" + error)
      } finally {
        this.loading = false;
      }
    },
  },
   getters: {
      hasData: (state) => state.bookdata !== null,
      hasSingleData: (state) => state.singlebook !== null,
      isLoading: (state) => state.loading,
      getErrorMessage: (state) => state.error?.message || '',
     },
   });


