<template>
  <div>
    <AppTitle type="h2" text="Welcome" />

    <AppSpinner v-if="gradesLoading" text="Loading..." />
    <div v-if="gradesLoaded && !gradesLoading">
      <div :key="grade.id" v-for="grade in grades">
        <p>
          <router-link :to="{ name: 'Grade', params: { id: grade.id } }"
            >View</router-link
          >
          - {{ showTranslation ? grade.name.english : grade.name.korean }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import gradeService from "@/services/gradeService";
import AppTitle from "@/components/AppTitle.vue";
import AppSpinner from "@/components/AppSpinner.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    AppTitle,
    AppSpinner,
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
