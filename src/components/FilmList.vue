<template>
   <div class="d-flex flex-wrap justify-content-between" id="film-list">

      <CardMovie  v-for="(element, index) in filmResultsApp" :key="index" :movieObject="element"/>

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

         filmResultsApp: Array

      }
   }

</script>

<style lang="scss" scoped>
#film-list{
   background-color: #212529;
}
</style>