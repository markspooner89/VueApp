<template>
  <div>
    <AppTitle type="h1" text="App" />
    <router-view />
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
export default {
  name: "App",
  components: {
    AppTitle,
  },
};
</script>
