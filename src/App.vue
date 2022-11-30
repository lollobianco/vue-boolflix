<template>
  <div id="app">
    <HeaderComp @emitSearchTextHeader="searchMovie" />
    <MainComp :filmResultsApp="filmResults" :seriesResultsApp="seriesResults" :searchTextFromHeaderToMain="searchTextFromHeaderToApp"/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'

import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
  },

  data(){

    return{
      searchTextFromHeaderToApp: '',

      searchQueryUrlFilms: '', 
      filmResults: [],

      searchQueryUrlSeries: '',
      seriesResults: [],
    }

  },

  mounted(){

    

  },

  methods:{

    searchMovie(searchTextHeader){

      this.searchTextFromHeaderToApp = searchTextHeader
      console.log(this.searchTextFromHeaderToApp)

      this.searchQueryUrlFilms = 'https://api.themoviedb.org/3/search/movie?api_key=a4cfc34d9593168a15afe399f5ed5ee0&language=en-US&page=1&include_adult=false&query=' + 
      this.searchTextFromHeaderToApp;

      axios.get(this.searchQueryUrlFilms)
      .then((response)=>{

      console.log(response)

      this.filmResults = response.data.results

      console.log(this.filmResults.title)

      })

      this.searchQueryUrlSeries = 'https://api.themoviedb.org/3/search/tv?api_key=a4cfc34d9593168a15afe399f5ed5ee0&language=en-US&page=1&include_adult=false&query=' + 
      this.searchTextFromHeaderToApp;

      axios.get(this.searchQueryUrlSeries)
      .then((response)=>{

      console.log(response)

      this.seriesResults = response.data.results

      })

    },

  }

}

</script>

<style lang="scss">
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}

html{
  background-color: #141414;
}
</style>
