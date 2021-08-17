<template>
  <div>
    <AppTitle type="h2" text="404 Not Found!" />
    <p>Return to <router-link :to="{ name: 'Home' }">home</router-link>.</p>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
export default {
  name: "NotFound",
  components: {
    AppTitle,
  },
};
</script>
