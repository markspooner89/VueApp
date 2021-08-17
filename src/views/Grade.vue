<template>
  <div>
    <AppSpinner v-if="gradeLoading" text="Loading..." />
    <div v-if="gradeLoaded && !gradeLoading">
      <AppTitle type="h2">
        <AppTranslation
          v-bind:english="selectedGrade.name.english"
          v-bind:korean="selectedGrade.name.korean"
        />
      </AppTitle>
      <div v-if="showPatterns">
        <AppTitle type="h3">
          <AppTranslation english="Patterns" korean="Poomsae" />
        </AppTitle>
        <div :key="index" v-for="(pattern, index) in selectedGrade.patterns">
          <AppTranslation
            v-bind:english="pattern.name.english"
            v-bind:korean="pattern.name.korean"
          />
        </div>
      </div>
      <router-link :to="{ name: 'Home' }">Back</router-link>
    </div>
  </div>
</template>

<script>
import gradeService from "@/services/gradeService";
import AppTitle from "@/components/AppTitle.vue";
import AppSpinner from "@/components/AppSpinner.vue";
import AppTranslation from "@/components/AppTranslation.vue";
import { mapState } from "vuex";
export default {
  name: "Grade",
  components: {
    AppTitle,
    AppSpinner,
    AppTranslation,
  },
  data() {
    return {
      grade: null,
      gradeLoading: false,
      gradeLoaded: false,
    };
  },
  computed: {
    ...mapState({
      showTranslation: (state) => state.showTranslation,
    }),
    showPatterns() {
      return (
        this.selectedGrade.patterns != null &&
        this.selectedGrade.patterns.length > 0
      );
    },
  },
  async mounted() {
    await this.populateGrade();
  },
  methods: {
    async populateGrade() {
      this.gradeLoading = true;
      const id = parseInt(this.$route.params.id);
      if (isNaN(id)) this.$router.push({ name: "NotFound" });
      const grade = await gradeService.getGradeAsync(id);
      if (!grade) this.$router.push({ name: "NotFound" });
      this.selectedGrade = grade;
      this.gradeLoading = false;
      this.gradeLoaded = true;
    },
  },
  watch: {
    async $route() {
      await this.populateGrade();
    },
  },
};
</script>
