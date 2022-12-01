<template>

   <div>

      <div class="searched-title" v-if="( searchTextFromHeaderToFilmList != '' )">Dai un'occhiata ai film correlati a: {{searchTextFromHeaderToFilmList}}</div>

      <div class="d-flex justify-content-between" id="film-list">

         <CardMovie  v-for="(element, index) in filmResultsApp" :key="index" :movieObject="element"/>

      </div>

   </div>
</template>

<script>
import CardMovie from './CardMovie.vue'


   export default {
      name: 'FilmList',
      components: {
         CardMovie
      },
      props:{

         filmResultsApp: Array,
         searchTextFromHeaderToFilmList: String

      }
   }

</script>

<style lang="scss" scoped>
#film-list{
   background-color: #141414;
   padding: 20px 50px;
   overflow-x: auto;
   overflow-y: hidden;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: none;
    scrollbar-color: #ff0000 #141414;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #808080;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ff0000;
    border: 0px none #ffffff;
  }

.searched-title{
   color: #808080;
   background-color: #141414;
   padding: 85px 0 10px 50px;
   font-size: 1.3rem;
}
</style>