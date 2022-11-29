<template>
   <div id="maincomp">

      <FilmList :filmResultsApp="filmResultsApp" />
      <SeriesList :seriesResultsApp="seriesResultsApp" />
      
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
         seriesResultsApp: Array

      },
   }
</script>

<style lang="scss" scoped>

</style>