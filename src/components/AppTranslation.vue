<template>
  <span>{{ showTranslation ? english : korean }}</span>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppTranslation",
  props: {
    english: {
      type: String,
      required: true,
      validator: (val) => val.trim().length > 0,
    },
    korean: {
      type: String,
      required: true,
      validator: (val) => val.trim().length > 0,
    },
  },
  computed: mapState({
    showTranslation: (state) => state.showTranslation,
  }),
};
</script>
