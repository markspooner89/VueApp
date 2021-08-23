<template>
  <div>
    <AppTitle type="h2" text="Welcome" />
    <AppSpinner v-if="gradesLoading" text="Loading..." />
    <div v-if="gradesLoaded && !gradesLoading">
      <div :key="grade.id" v-for="grade in grades">
        <GradeCard v-bind:id="grade.id" v-bind:title="grade.name.english" />
      </div>
    </div>
  </div>
</template>

<script>
import gradeService from "@/services/gradeService";
import AppTitle from "@/components/AppTitle.vue";
import AppSpinner from "@/components/AppSpinner.vue";
import GradeCard from "@/components/GradeCard.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    AppTitle,
    AppSpinner,
    GradeCard,
  },
  data() {
    return {
      grades: null,
      gradesLoading: false,
      gradesLoaded: false,
    };
  },
  computed: mapState({
    showTranslation: (state) => state.showTranslation,
  }),
  async mounted() {
    this.gradesLoading = true;
    this.grades = await gradeService.getGradesAsync();
    this.gradesLoading = false;
    this.gradesLoaded = true;
  },
};
</script>
