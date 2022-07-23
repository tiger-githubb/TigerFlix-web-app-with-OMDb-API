<template>
<div class="container ">
   <div class="movie-detail">
    <div class="image">
      <div class="type2">{{ movie.Type }}</div>
      <h2>{{ movie.Title }}</h2>
      <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
    </div>

    <h3><b>Date de sortie : </b> {{ movie.Year }}</h3>
    <h3><b>Genre :</b> {{ movie.Genre }}</h3>
    <h3><b>Résumé du Film </b> :</h3>

    <p>{{ movie.Plot }}</p>
  </div>
</div>

  
 

</template>

<script>
//onBeforeMount est une methode vue
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env';

export default {
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
        .then(response => response.json())
        .then(data => {
          movie.value = data;
          console.log(movie.value);
        });
    });

    return {
      movie
    }
  }
}


</script>

<style lang="scss">
.type2 {
  padding: 8px 16px;
  margin-bottom: 10px;
  background-color: #42BB83;
  color: white;
  left: 0px;
  text-transform: capitalize;
  
}

h3{
  line-height: 50px;
}
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.movie-detail {
  padding: 16px;

  h2 {
    color: white;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;

  }

  .featured-img {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }

  p {
    color: white;
    font-size: 18px;
    line-height: 1.5;
  }
}
</style>