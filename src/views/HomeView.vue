<template>
  <div class="home">

    <div class="feature-card">
      <rooter-link to="/movie/tt0409591">
        <img src="https://fr.web.img4.acsta.net/r_654_368/newsv7/21/01/11/16/11/2598562.jpg" alt="Spiderman"
          class="featured-img">
        <div class="detail">
          <h3>Spider-man</h3>
          <p>Entre rumeurs et informations fiables, le casting de "Spider-Man 3" a agité la Toile ces dernières
            semaines. Pour vous
            permettre d'y voir plus clair et démêler le vrai du faux, voici le nom des personnages qui ont déjà été
            confirmés.</p>
        </div>
      </rooter-link>
    </div>

    <form @submit.prevent="" class="search-box">
      <input type="text" name="" placeholder="quel film voulez-vous voir ..." id="">
      <input type="submit" value="recherche">
    </form>
  </div>

  <div class="movies list">
    films
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
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
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
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
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;
      }

      &::placeholder {
        color: #f3f3f3;
      }

      &:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #428883;
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
</style>
