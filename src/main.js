import Vue from "vue";
import App from "./App.vue";

import { MdCard } from "vue-material/dist/components";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);
Vue.use(MdCard);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
