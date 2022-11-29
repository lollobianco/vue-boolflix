<template>
   <div class="d-flex flex-wrap justify-content-between" id="series-list">
      <CardSeries v-for="(element, index) in seriesResultsApp" :key="index" :seriesObject="element"/>
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
         seriesResultsApp: Array
      }
   }
</script>

<style lang="scss" scoped>
#series-list{
   background-color: #212529;
   padding: 50px;
}
</style>