<template>
   

   <div v-if="(seriesObject.backdrop_path != null)" class="card-series me-3">
   
      <img :src="`http://image.tmdb.org/t/p/w342/${seriesObject.backdrop_path}`" alt="SeriesImage" class="rounded image">
      

      <div class="description">
         <div>
            {{seriesObject.name}}
         </div>

         <div>
            {{seriesObject.original_name}}
         </div>

         <div>
            {{seriesObject.original_language}}
         </div>

         <div>
            {{seriesObject.vote_average}}
         </div>
     
      </div>
      
   
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
.card-series{
   width: calc(95% / 5);
   margin: 15px 0px;
   padding: 10px;
   cursor: pointer;
   transition: all 100ms linear;
}

.description {
  opacity: 0;
}

.card-series:hover .description {
  opacity: 1;
  color: white;
}

.card-series:hover{
   scale: 1.2;
   position: relative;
   z-index: 1;
}

</style>