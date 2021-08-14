<template>
  <div>
    <AppSpinner v-if="gradeLoading" text="Loading..." />
    <div v-if="gradeLoaded && !gradeLoading">
      <AppTitle
        type="h2"
        v-bind:text="
          showTranslation
            ? selectedGrade.name.english
            : selectedGrade.name.korean
        "
      />
      <router-link :to="{ name: 'Home' }">Back</router-link>
    </div>
  </div>
</template>

<script>
import gradeService from "@/services/gradeService";
import AppTitle from "@/components/AppTitle.vue";
import AppSpinner from "@/components/AppSpinner.vue";
import { mapState } from "vuex";
export default {
  name: "Grade",
  components: {
    AppTitle,
    AppSpinner,
  },
  data() {
    return {
      grade: null,
      gradeLoading: false,
      gradeLoaded: false,
    };
  },
  computed: mapState({
    showTranslation: (state) => state.showTranslation,
  }),
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
