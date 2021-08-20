<template>
  <div>
    <AppTitle type="h1" text="App" />
    <TheToggleTranslationButton />
      <font-awesome-icon icon="jedi" />
    <router-view />
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
import TheToggleTranslationButton from "@/components/TheToggleTranslationButton.vue";
export default {
  name: "App",
  components: {
    AppTitle,
    TheToggleTranslationButton,
  },
};
</script>
