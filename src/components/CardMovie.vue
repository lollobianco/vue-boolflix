<template>

    <div v-if="(movieObject.backdrop_path != null)" class="card-film me-3">

      <img
        :src="`http://image.tmdb.org/t/p/w342/${movieObject.backdrop_path}`"
        alt="MovieImage"
        class="image"
      />

      <div class="description">
       
        <div>
           <span class="text-danger">Titolo originale:</span> {{movieObject.original_title}}
        </div>

        <div>
          <span class="text-danger">Titolo:</span> {{movieObject.title}}
        </div>
        
        <div class="stars-container">

          {{ starsPrint() }}

          <span class="text-danger">Valutazione: </span>

          <span v-for="n in fullStars" :key="'fullstar' + n">
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>

          <span v-if="(halfStar == true)">
            <font-awesome-icon icon="fa-regular fa-star-half-stroke"/>
          </span>

          <span v-for="n in emptyStars" :key="'emptystar' + n">
            <font-awesome-icon icon="fa-regular fa-star" />
          </span>

          <span> ({{movieObject.vote_average}})</span>

        </div>

        <div>
          <span class="text-danger">Lingua: </span> <img :src="`https://www.countryflagicons.com/FLAT/16/${(movieObject.original_language == 'en') ? 'GB' : ((movieObject.original_language == 'ja') ? 'JP' : movieObject.original_language.toUpperCase())}.png`">
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

      this.vote = this.movieObject.vote_average / 2;

      if(this.vote != Math.floor(this.vote)){

        this.halfStar = true;

        this.fullStars = Math.floor(this.vote);

        this.emptyStars = 5 - this.fullStars - 1;

      } else {

        this.halfStar =  false

        this.fullStars = this.vote;

        this.emptyStars = 5 - this.fullStars;

      }

    }


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
   font-size: 0.8rem;
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