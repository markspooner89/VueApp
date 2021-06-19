<template>
  <div>
    <AppTitle type="h2" text="Welcome" />
    <div :key="grade.id" v-for="grade in grades">
      <p>{{ grade.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppTitle from "@/components/AppTitle.vue";
export default {
  name: "Home",
  components: {
    AppTitle,
  },
  computed: mapGetters({
    grades: "orderedGrades",
  }),
};
</script>
