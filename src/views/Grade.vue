<template>
  <div>
    <AppTitle type="h2" v-bind:text="selectedGrade.name" />
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  computed: mapState({
    grades: (state) => state.grades,
  }),
  mounted() {
    this.populateGrade();
  },
  methods: {
    populateGrade() {
      const id = parseInt(this.$route.params.id);
      if (isNaN(id)) this.$router.push({ name: "NotFound" });
      const grade = this.grades.find((g) => g.id === id);
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
