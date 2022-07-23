<template>
  <b-modal id="translate-modal" size="xl" title="Translate site" hide-backdrop scrollable>
    <Translator :countries="countries" @on-country-click="hideModal" />
  </b-modal>
</template>

<script>
import { Translator } from "vue-google-translate";
export default {
  name: "TranslateModal",
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
  methods: {
    hideModal() {
      this.$bvModal.hide("translate-modal");
    },
  },
};
</script>