<template>
  <div>
    <AppTitle type="h1" text="App" />
    <button @click="toggleTranslation">{{ showTranslation }}</button>
    <router-view />
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    AppTitle,
  },
  computed: mapState({
    showTranslation: (state) => state.showTranslation,
  }),
  methods: mapActions(["toggleTranslation"]),
};
</script>
