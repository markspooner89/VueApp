<template>
  <div id="app" v-cloak>
    <AppTitle type="h1" text="Anfield Taekwondo" />
    <div v-if="isLoading">
      <AppSpinner />
    </div>
    <transition name="fade">
      <div v-if="!isLoading">
        <TheAppMenu />
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
import AppSpinner from "@/components/AppSpinner.vue";
import TheAppMenu from "@/components/TheAppMenu.vue";
export default {
  name: "App",
  components: {
    AppTitle,
    AppSpinner,
    TheAppMenu,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease;
}

.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter {
  transform: translateY(100%);
}
</style>