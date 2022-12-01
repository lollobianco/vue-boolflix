<template>

    <div v-if="(movieObject.backdrop_path != null)" class="card-film me-3">


      <img
        :src="`http://image.tmdb.org/t/p/w342/${movieObject.backdrop_path}`"
        alt="MovieImage"
        class="image"
      />

      <div class="description">
       
        <div>
           <span class="text-danger">Titolo originale:</span> {{ movieObject.original_title }}
        </div>

        <div>
          <span class="text-danger">Titolo:</span> {{movieObject.title}}
        </div>
        
        <div>
          <span class="text-danger">Valutazione:</span> {{ movieObject.vote_average }}
        </div>

        <div>
          <img :src="`https://www.countryflagicons.com/FLAT/32/${(movieObject.original_language == 'en') ? 'GB' : ((movieObject.original_language == 'ja') ? 'JP' : movieObject.original_language.toUpperCase())}.png`">
        </div>


      </div>

    </div>

</template>

<script>
export default {
  name: "CardMovie",
  props: {
    movieObject: Object,
  },
};

</script>

<style lang="scss" scoped>
.card-film {
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

.card-film:hover .image{
   -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0); 
   box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
   border-bottom-left-radius: 0px;
   border-bottom-right-radius: 0px;
}

.card-film:hover{
   -webkit-box-shadow: -4px 5px 12px 5px rgba(0,0,0,0.93); 
   box-shadow: -4px 5px 12px 5px rgba(0,0,0,0.93);
   background-color: #424242;
   border-radius: 5px;
}

.description {
   opacity: 0;
}

.card-film:hover .description {
  opacity: 1;
  padding: 10px;
  color: white;
}


.card-film:hover{
   scale: 1.2;
   position: relative;
   z-index: 1;
}
</style>