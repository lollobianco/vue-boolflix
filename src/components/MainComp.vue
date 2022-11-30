<template>
   <div id="maincomp">

      <FilmList :filmResultsApp="filmResultsApp" :searchTextFromHeaderToFilmList="searchTextFromHeaderToMain"/>
      <SeriesList :seriesResultsApp="seriesResultsApp" :searchTextFromHeaderToSeriesList="searchTextFromHeaderToMain"/>
      
   </div>
</template>

<script>
import FilmList from './FilmList.vue'
import SeriesList from './SeriesList.vue'

   export default {
      name: 'MainComp',
      components: {
         FilmList,
         SeriesList
      },
      props: {

         filmResultsApp: Array,
         seriesResultsApp: Array,
         searchTextFromHeaderToMain: String

      },
   }
</script>

<style lang="scss" scoped>


</style>