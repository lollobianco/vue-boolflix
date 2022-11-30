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

.searched-title{
   color: #808080;
   background-color: #141414;
   padding: 50px 0 10px 50px;
   font-size: 1.3rem;
}
</style>