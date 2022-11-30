<template>

   <div>

      <div class="searched-title" v-if="( searchTextFromHeaderToSeriesList != '' )">Dai un'occhiata alle serie correlate a: {{searchTextFromHeaderToSeriesList}}</div>

      <div class="d-flex justify-content-between" id="series-list">
         <CardSeries v-for="(element, index) in seriesResultsApp" :key="index" :seriesObject="element"/>
      </div>

   </div>
</template>

<script>
import CardSeries from './CardSeries.vue'

   export default {
      name: 'SeriesList',
      components:{
         CardSeries
      },
      props:{
         seriesResultsApp: Array,
         searchTextFromHeaderToSeriesList: String
      }
   }
</script>

<style lang="scss" scoped>
#series-list{
   background-color: #141414;
   padding: 20px 50px;
   overflow-x: auto;
   overflow-y: hidden;
}

.searched-title{
   color: #808080;
   background-color: #141414;
   padding: 50px 0 10px 50px;
   font-size: 1.3rem;
}
</style>