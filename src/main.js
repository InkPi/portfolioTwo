import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueExpandableImage from "vue-expandable-image";

Vue.use(VueExpandableImage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
