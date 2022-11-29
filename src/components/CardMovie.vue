<template>
   

      <div class="card">
      
         <img :src="`http://image.tmdb.org/t/p/w342/${movieObject.backdrop_path}`" alt="MovieImage" class="rounded">
         
         <span>
            {{movieObject.title}}
         </span>

         <span>
            {{movieObject.original_title}}
         </span>

         <span>
            {{movieObject.original_language}}
         </span>

         <span>
            {{movieObject.vote_average}}
         </span>
      
      
      </div>

  
</template>

<script>
   export default {
      name: 'CardMovie',
      props:{
        movieObject: Object
      } 
   }
</script>

<style lang="scss" scoped>
.card{
   width: calc(95%/5);
   margin-top: 30px;
}
</style>