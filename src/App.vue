<template>
  <div id="app">
    <router-view class="home"></router-view>

    <!-- <expandable-image
      class="image"
      src="https://images.unsplash.com/photo-1550948537-130a1ce83314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80"
      alt="dog"
      title="dog"
    /> -->
  </div>
</template>

<script>
//import Portfolio from "./views/PortfolioBody.vue";
//import ExpandableImage from "../ExpandableImage";

export default {
  name: "App",
  components: {
    //HelloWorld,
    //ExpandableImage,
    //"portfolio-body": Portfolio,
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>

<style>
* {
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* For Expandable Image */

  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  margin: 50px auto;
  position: relative; */
}

.home a {
  text-decoration: none;
}

/* For Expandable Image */
.image {
  width: 400px;
  max-width: 100%;
}
</style>
