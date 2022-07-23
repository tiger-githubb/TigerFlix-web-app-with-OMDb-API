<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar de la rue</b-navbar-brand>
      <div class="media-body d-lg-block">
        <Translator :countries="countries" />
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { Translator } from "vue-google-translate";

export default {
  name: "TopNav",
  components: {
    Translator,
  },

  data() {
    return {
      countries: [
        {
          code: "en|en",
          title: "English",
        },
        {
          code: "en|fr",
          title: "French",
        },
      ],
    };
  },
};
</script>
