<template>
  <h1 v-if="type === 'h1'">
    <slot>{{ text }}</slot>
  </h1>
  <h2 v-else-if="type === 'h2'">
    <slot>{{ text }}</slot>
  </h2>
  <h3 v-else-if="type === 'h3'">
    <slot>{{ text }}</slot>
  </h3>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    type: {
      type: String,
      required: true,
      validator: (val) => ["h1", "h2", "h3"].indexOf(val) > -1,
    },
    text: {
      type: String,
      required: false,
      validator: (val) => val.trim().length > 0,
    },
  },
};
</script>
