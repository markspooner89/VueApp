<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        {{ title }}
      </p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          <router-link :to="{ name: 'Grade', params: { id: id } }"
            >View</router-link
          >
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "GradeCard",
  props: {
    id: {
      type: Number,
      required: true,
      validator: (val) => val > 0,
    },
    title: {
      type: String,
      required: true,
      validator: (val) => val.length > 0,
    },
  },
};
</script>
