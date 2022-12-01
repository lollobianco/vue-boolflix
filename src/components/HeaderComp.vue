<template>
  <div>
    <div id="headercomp" class="d-flex align-items-center justify-content-between p-3">

      <!-- <div class="logo text-white"> -->
        <img src="../assets/netflix-logo-png-2582.png" alt="logo" id="img-logo">
      <!-- </div> -->

      <div class="form-control-container">
        <input class="form-control" type="text" placeholder="Search Movie..." aria-label="default input example" v-model="searchText" @keyup="$emit('emitSearchTextHeader', searchText)">
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
  background-color: rgba(20, 20, 20, 1);
  height: 80px;
  position: fixed;
  z-index: 2;
  width: 100%;
}

.logo{
  height: 30px;
}

#img-logo{
  height: 60px;
}

.form-control-container{
  width: 13%;

  .form-control{
    width: 100%;
  }

}

</style>
