<template>
   

   <div class="card">
   
      <img :src="`http://image.tmdb.org/t/p/w342/${seriesObject.backdrop_path}`" alt="SeriesImage" class="rounded">
      
      <span>
         {{seriesObject.name}}
      </span>

      <span>
         {{seriesObject.original_name}}
      </span>

      <span>
         {{seriesObject.original_language}}
      </span>

      <span>
         {{seriesObject.vote_average}}
      </span>
   
   
   </div>


</template>

<script>
export default {
   name: 'CardSeries',
   props:{
     seriesObject: Object
   } 
}
</script>

<style lang="scss" scoped>
.card{
width: calc(95%/5);
margin: 15px 0;
}
</style>