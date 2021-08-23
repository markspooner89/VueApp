<template>
  <div>
    <AppTitle type="h1" text="App" />
    <div class="container">
      <div class="columns is-mobile is-multiline is-centered">
        <div
          class="column"
          :key="index"
          v-for="(location, index) in locations"
        >
          <LocationCard v-bind:location="location" />
        </div>
        <!-- <div class="column">
        </div>
        <div class="column"></div> -->
      </div>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
// import TheToggleTranslationButton from "@/components/TheToggleTranslationButton.vue";
import LocationCard from "@/components/LocationCard.vue";
export default {
  name: "App",
  components: {
    AppTitle,
    LocationCard,
    // TheToggleTranslationButton,
  },
  data() {
    return {
      locations: [
        {
          title: "Everton",
          address: "St John Chrysostom",
          days: "Monday & Friday",
          time: "5:00pm",
        },
        {
          title: "Birkenhead",
          address: "Wirral Change",
          days: "Wednesday",
          time: "5:30pm",
        },
                {
          title: "Birkenhead",
          address: "Wirral Change",
          days: "Wednesday",
          time: "5:30pm",
        },
                        {
          title: "Birkenhead",
          address: "Wirral Change",
          days: "Wednesday",
          time: "5:30pm",
        },
      ],
    };
  },
};
</script>
