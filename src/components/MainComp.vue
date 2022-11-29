<template>
   <div id="maincomp">

      <FilmList :filmResultsApp="filmResultsApp" />
      
   </div>
</template>

<script>
import FilmList from '../components/FilmList.vue'

   export default {
      name: 'MainComp',
      components: {
         FilmList
      },
      props: {

         filmResultsApp: Array

      },
   }
</script>

<style lang="scss" scoped>

</style>