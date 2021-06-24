<template>
  <div>
    <AppTitle type="h2" v-bind:text="selectedGrade.name" />
    <router-link :to="{ name: 'Home' }">Back</router-link>
  </div>
</template>

<script>
import gradeService from "../services/gradeService";
import AppTitle from "@/components/AppTitle.vue";
export default {
  name: "Grade",
  components: {
    AppTitle,
  },
  data() {
    return {
      selectedGrade: null,
    };
  },
  mounted() {
    this.populateGrade();
  },
  methods: {
    populateGrade() {
      const id = parseInt(this.$route.params.id);
      if (isNaN(id)) this.$router.push({ name: "NotFound" });
      const grade = gradeService.getGrade(id);
      if (!grade) this.$router.push({ name: "NotFound" });
      this.selectedGrade = grade;
    },
  },
  watch: {
    $route() {
      this.populateGrade();
    },
  },
};
</script>
