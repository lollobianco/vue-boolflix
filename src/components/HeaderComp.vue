<template>
  <div>
    <div id="headercomp" class="bg-dark d-flex align-items-center justify-content-between p-3">

      <div class="logo text-white">
        logo
        <img src="" alt="">
      </div>

      <div class="">
        <input class="form-control" type="text" placeholder="Search Movie" aria-label="default input example" v-model="searchText" @keyup="$emit('emitSearchTextHeader', searchText)">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
    
  },
  data(){
    return{
      searchText: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#headercomp{
  border: 1px solid red;
}

</style>
