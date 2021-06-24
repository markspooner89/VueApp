<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: "AppSpinner",
  props: {
    text: {
      type: String,
      required: true,
      validator: (val) => val.trim().length > 0,
    },
  },
};
</script>
