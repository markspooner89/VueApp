<template>
  <span>
    <font-awesome-icon id="spinner" icon="circle-notch" />
    &nbsp;<span>Loading...</span>
  </span>
</template>

<script>
export default {
  name: "AppSpinner",
};
</script>

<style scoped>
#spinner {
  animation: spin-animation 0.8s linear infinite;
}
@keyframes spin-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>