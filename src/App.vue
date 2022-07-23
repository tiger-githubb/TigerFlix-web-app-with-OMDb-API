<template>
  <div id="app">
    <Translator></Translator>
    <header>
      <router-link to="/">
        <h1 translate="no"><span>Tiger</span>Movies</h1>
      </router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>

</template>
<script>

import { Translator } from "../node_modules/vue-google-translate/src/lib-components/Translator.vue";
export default {
  name: "App",
  components: {
    Translator,
  },
};
</script>
<style lang="scss">
body {
  top: 0 !important;
}

/* get rids of the banner at the bottom of the web page */
.goog-te-banner-frame{
  display: none;
}
#app > div.skiptranslate.goog-te-gadget > span {
  display: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'fira sans', sans-serif !important;

  &::selection {
    background: transparentize($color: #428883, $amount: 0.5);
  }
}

body {
  background-color: #354952;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10 px 16 px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);

  h1 {
    color: #ffff;
    font-size: 30px;

    span {
      color: #428883;
    }
  }

}
</style>
