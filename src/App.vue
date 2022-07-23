<template>
  <div id="app">
    <div class="search-box">
      <Translator></Translator>
    </div>

    <header>
      <router-link to="/">
        <h1 translate="no" class="title"><span>Tiger</span>Flix</h1>
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
$color: #3694d7;
$timing: .3s;

.title {
  padding: 10px;
}

.goog-te-gadget .goog-te-combo {
  font-family: "fira sans", sans-serif !important;
  font-size: 20px;
  max-width: 300px;
  width: 100%;
  background-color: #428883;
  color: white !important;
  border-radius: 8px;
  cursor: pointer;
  border: .06em solid transparent;
  padding: 16px;
  padding-left: 100px !important;

}

#\:0\.targetLanguage {
  display: flex;
  justify-content: center;
}

body {
  top: 0 !important;
}

#goog-gt-tt {
  display: none !important;
}

/* get rids of the banner at the bottom of the web page */
.goog-te-banner-frame {
  display: none;
}

#app>div.skiptranslate.goog-te-gadget>span {
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
