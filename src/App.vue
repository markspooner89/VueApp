<template>
  <div id="app" v-cloak>
    <AppTitle type="h1" text="Anfield Taekwondo" />
    <TheAppMenu />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
import TheAppMenu from "@/components/TheAppMenu.vue";
export default {
  name: "App",
  components: {
    AppTitle,
    TheAppMenu,
  },
};
</script>

<style scoped>
[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: "Loading...";
}

#app {
  font-family: "Titillium Web", sans-serif;
}

.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-to {
  transform: translateX(100%);
}
.slide-fade-enter {
  transform: translateY(100%);
}
</style>