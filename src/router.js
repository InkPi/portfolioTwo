import Vue from "vue";
import Router from "vue-router";

import Home from "./views/HomePage.vue";
// import Home from "./views/HomePage.vue";
import Portfolio from "./views/PortfolioBody.vue";
import AboutMe from "./views/AboutMe.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
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
    },
    {
      path: "/aboutme",
      name: "aboutme",
      component: AboutMe
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
    /* redirect router when change path after production */
  ]
});
