import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faClock,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMapMarkerAlt, faClock, faCalendar);

Vue.component("font-awesome-icon", FontAwesomeIcon);

require("./main.scss");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
