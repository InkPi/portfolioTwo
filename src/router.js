import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomePage.vue";
import Portfolio from "./views/PortfolioBody.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    }
  ]
});
