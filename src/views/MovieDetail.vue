<template>

  <div class="movie-detail">
    <h2>movie title</h2>
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
        console.log(data);
      });
    });

    return {
    movie
    }
  }
}

 
</script>

<style>
</style>