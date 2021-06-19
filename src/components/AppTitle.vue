<template>
  <h1 v-if="type === 'h1'">{{ text }}</h1>
  <h2 v-else-if="type === 'h2'">{{ text }}</h2>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    type: {
      type: String,
      required: true,
      validator: (val) => ["h1", "h2"].indexOf(val) > -1,
    },
    text: {
      type: String,
      required: true,
      validator: (val) => val.trim().length > 0,
    },
  },
};
</script>
