<template>
   <div id="maincomp">
      <div v-for="(element, index) in filmResultsApp" :key="index">
         {{element.title}}
      </div>
   </div>
</template>

<script>
   export default {
      name: 'MainComp',
      props: {

         filmResultsApp: Array

      }
   }
</script>

<style lang="scss" scoped>

</style>