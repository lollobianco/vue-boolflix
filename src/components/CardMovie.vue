<template>

    <div v-if="(movieObject.backdrop_path != null)" class="card-film me-3">


      <img
        :src="`http://image.tmdb.org/t/p/w342/${movieObject.backdrop_path}`"
        alt="MovieImage"
        class="rounded image"
      />

      <div class="description">
        <div>
          {{ movieObject.title }}
        </div>

        <div>
          {{ movieObject.original_title }}
        </div>

        <div>
          {{ movieObject.original_language }}
        </div>

        <div>
          {{ movieObject.vote_average }}
        </div>
      </div>

    </div>

</template>

<script>
export default {
  name: "CardMovie",
  props: {
    movieObject: Object,
  },
};
</script>

<style lang="scss" scoped>
.card-film {
   width: calc(95% / 5);
   margin: 15px 0px;
   padding: 10px;
   cursor: pointer;
   transition: all 100ms linear;
}

.description {
   opacity: 0;
}

.card-film:hover .description {
  opacity: 1;
  color: white;
}

.card-film:hover{
   scale: 1.2;
   position: relative;
   z-index: 1;
}
</style>