<template>
   

      <div class="card">
      
         
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
   height: 200px;
   width: calc(95%/5);
   border: 1px solid red;
}
</style>