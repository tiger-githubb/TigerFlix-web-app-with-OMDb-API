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
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
.home {
  feature-card {
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
      background-color: rgba(0,0, 0,0.6);
      padding: 16px;
      z-index: 1;

      h3{
        color: #ffff;
        margin-bottom: 16px;
      }
      p{
        color: #ffff;
      }
    }
  }
}
</style>
