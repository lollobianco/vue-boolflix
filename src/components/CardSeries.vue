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

         <div class="stars-container">

            <span class="text-danger">Valutazione: </span>

            <span v-for="n in fullStars" :key="'fullstarseries' + n">
               <font-awesome-icon icon="fa-solid fa-star" />
            </span>

            <span v-if="(halfStar == true)">
               <font-awesome-icon icon="fa-regular fa-star-half-stroke"/>
            </span>

            <span v-for="n in emptyStars" :key="'emptystarseries' + n">
               <font-awesome-icon icon="fa-regular fa-star" />
            </span>

         </div>

         <div>
            <span class="text-danger">Lingua: </span> <img :src="`https://www.countryflagicons.com/FLAT/16/${(seriesObject.original_language == 'en') ? 'GB' : ((seriesObject.original_language == 'ja') ? 'JP' : seriesObject.original_language.toUpperCase())}.png`">
         </div>
     
      </div>
      
   
   </div>


</template>

<script>
export default {
   name: 'CardSeries',
   props:{
     seriesObject: Object
   },
   data(){

return{
  vote: 0,
  fullStars: 0,
  emptyStars: 0,
  halfStar: false,
}

},
methods:{


   starsPrint(){

   this.vote = this.seriesObject.vote_average / 2;

   if(this.vote != Math.floor(this.vote)){

      this.halfStar = true;

      this.fullStars = Math.floor(this.vote);

      this.emptyStars = 5 - this.fullStars - 1;

   } else {

      this.fullStars = this.vote;

      this.emptyStars = 5 - this.fullStars;

   }

   }


},
mounted() {
this.starsPrint();
},
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
   font-size: 0.8rem;
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