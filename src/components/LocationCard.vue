<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title is-size-4">{{location.title}}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns is-mobile">
          <div class="column is-1">
            <font-awesome-icon icon="map-marker-alt" />
          </div>
          <div class="column is-11">{{location.address}}</div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-1">
            <font-awesome-icon icon="calendar" />
          </div>
          <div class="column is-11">{{location.days}}</div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-1">
            <font-awesome-icon icon="clock" />
          </div>
          <div class="column is-11">{{location.time}}</div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">View</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LocationCard",
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
};
</script>