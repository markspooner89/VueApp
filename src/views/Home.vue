<template>
  <div>
    <AppTitle type="h2" text="Welcome" />
    <div :key="grade.id" v-for="grade in grades">
      <p>
        <router-link :to="{ name: 'Grade', params: { id: grade.id } }"
          >View</router-link
        >
        - {{ grade.name }}
      </p>
    </div>
  </div>
</template>

<script>
import gradeService from "../services/gradeService";
import AppTitle from "@/components/AppTitle.vue";
export default {
  name: "Home",
  components: {
    AppTitle,
  },
  data() { 
    return { 
      grades: null
    }
  },
  mounted() {
    this.grades = gradeService.getGrades();
  }
};
</script>
