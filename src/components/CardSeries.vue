<template>
   

   <div v-if="(seriesObject.backdrop_path != null)" class="card-series me-3">
   
      <img :src="`http://image.tmdb.org/t/p/w342/${seriesObject.backdrop_path}`" alt="SeriesImage" class="image">
      

      <div class="description">

         <div>
            <span class="text-danger">Titolo originale: </span>{{seriesObject.original_name}}
         </div>

         <div>
            <span class="text-danger">Titolo: </span>{{seriesObject.name}}
         </div>

         <div>
            <span class="text-danger">Valutazione: </span>{{seriesObject.vote_average}}
         </div>

         <div>
            <img :src="`https://www.countryflagicons.com/FLAT/32/${(seriesObject.original_language == 'en') ? 'GB' : ((seriesObject.original_language == 'ja') ? 'JP' : seriesObject.original_language.toUpperCase())}.png`">
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
.card-series {
   width: 342px;
   margin: 15px 0px;
   padding: 0px;
   cursor: pointer;
   transition: all 100ms linear;
}

.image{
   -webkit-box-shadow: -4px 5px 12px 5px rgba(0,0,0,0.93); 
   box-shadow: -4px 5px 12px 5px rgba(0,0,0,0.93);
   border-radius: 5px;
}

.card-series:hover .image{
   -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0); 
   box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
   border-bottom-left-radius: 0px;
   border-bottom-right-radius: 0px;
}

.card-series:hover{
   -webkit-box-shadow: -4px 5px 12px 5px rgba(0,0,0,0.93); 
   box-shadow: -4px 5px 12px 5px rgba(0,0,0,0.93);
   background-color: #424242;
   border-radius: 5px;
}

.description {
   opacity: 0;
}

.card-series:hover .description {
  opacity: 1;
  padding: 10px;
  color: white;
}


.card-series:hover{
   scale: 1.2;
   position: relative;
   z-index: 1;
}

</style>