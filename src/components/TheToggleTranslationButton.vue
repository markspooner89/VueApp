<template>
  <button class="button is-primary" @click="toggleTranslation">
    {{ showTranslation ? "Show Korean" : "Show English" }}
  </button>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TheToggleTranslationButton",
  computed: mapState({
    showTranslation: (state) => state.showTranslation,
  }),
  methods: mapActions(["toggleTranslation"]),
};
</script>
