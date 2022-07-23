<template>

  <div class="home">

    <div class="feature-card">
      <rooter-link to="/movie/tt0409591">
        <img src="https://fr.web.img4.acsta.net/r_654_368/newsv7/21/01/11/16/11/2598562.jpg" alt="Spiderman"
          class="featured-img">
        <div class="detail">
          <h3 translate="no">Spider-man</h3>
          <p translate="no">Entre rumeurs et informations fiables, le casting de "Spider-Man 3" a agité la Toile ces
            dernières
            semaines. Pour vous
            permettre d'y voir plus clair et démêler le vrai du faux, voici le nom des personnages qui ont déjà été
            confirmés.</p>
        </div>
      </rooter-link>
    </div>

    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="quel film voulez-vous voir ..." v-model="search" />
      <input type="submit" value="recherche" translate="no">
    </form>
  </div>

  <div class="movies-list">
    <div class="movie" v-for="movie in movies" :key="movie.imdbID">
      <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
        <div class="product-image">
          <img :src="movie.Poster" alt="" />
          <div class="type">{{ movie.Type }}</div>
        </div>
        <div class="detail">
          <p class="year">{{ movie.Year }}</p>
          <h3>{{ movie.Title }}</h3>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
import env from '../env.js'
import { ref } from 'vue';

export default {

  setup() {
    //declarations des variables 
    const search = ref("");
    const movies = ref("");

    const SearchMovies = () => {
      if (search.value != "") {
        console.log(search.value);
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {
            movies.value = data.Search;
            search.value = "";
            console.log(movies.value);
          })
      }
    }




    return {
      search,
      movies,
      SearchMovies,
      env
    }
  }
}

</script>

<style lang="scss" >
.home {
  .feature-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 16px;
      padding-top: 100%;
      z-index: 1;

      h3 {
        color: #ffff;
        margin-bottom: 16px;
      }

      p {
        color: #ffff;
      }
    }
  }

  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: #ffff;
        background-color: #3b41493b;
        border: 2px solid #B90020;
        border-radius: 15px;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;
      }

      &::placeholder {
        color: #f3f3f3;
        text-transform: capitalize;
      }

      &:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #B90020;
        padding: 16px;
        border-radius: 8px;
        color: #ffff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #3BB070;
        }
      }
    }
  }


}

img {
  max-width: 100%;
  height: auto;
}

.type {
  position: absolute;
  padding: 8px 16px;
  background-color: #42BB83;
  color: white;
  bottom: 16px;
  left: 0px;
  text-transform: capitalize;
}

.product-image {
  position: relative;
  display: block;
}

.movie-link {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.movie {
  max-width: 50%;
  flex: 1 1 50%;
  padding: 16px 8px;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
}

@media (min-width: 760px) {
  .detail {
    background: linear-gradient(1deg, #000102 3.07%, rgba(0, 17, 33, 0) 25.29%) !important;
  }
}



.detail {

  padding: 16px 8px;
  flex: 1 1 100%;
  background: linear-gradient(4deg, #000102 12.07%, rgba(0, 3, 5, 0) 53.29%);
}


.year {
  color: #AAA;
  font-size: 14px;
}

h3 {
  color: white;
  font-weight: 600;
  font-size: 18px;
}
</style>
