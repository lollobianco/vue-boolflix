<template>
  <div>
    <div id="headercomp" class="d-flex align-items-center justify-content-between p-3">

      <div class="d-flex align-items-center">
        <div>
          <img src="../assets/netflix-logo-png-2582.png" alt="logo" id="img-logo">
        </div>
        
        <div>
          <ul class="m-0 align-items-center">
            <li>Home</li>
            <li>Serie TV</li>
            <li>Film</li>
            <li>Nuovi e Popolari</li>
            <li>La mia lista</li>
            <li>Sfoglia per Lingua</li>
          </ul>
        </div>
        
      </div>

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

#img-logo{
  height: 60px;
}

.form-control-container{
  width: 13%;

  .form-control{
    width: 100%;
  }

}


ul{

  display: flex;
  align-content: center;

  li{

    list-style-type: none;
    margin: 0 10px;
    color: rgb(209, 209, 209);
    font-size: 0.9rem;
    justify-self: start;
    cursor: pointer;

  }
  li:hover{
    text-decoration: underline;
  }
}


</style>
