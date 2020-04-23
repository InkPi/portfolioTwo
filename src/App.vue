<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <Homepage></Homepage>
    
    <!-- 
    <portfolio-body></portfolio-body> -->

    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
    </div>
    <router-view></router-view> -->

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
import Homepage from "./views/HomePage.vue";
//import ExpandableImage from "../ExpandableImage";

export default {
  name: "App",
  components: {
    //HelloWorld,
    Homepage
    //ExpandableImage,
    //"portfolio-body": Portfolio,
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

a:link {
  color: black;
  text-decoration: none;
}
a:visited {
  color: black;
}
a:hover {
  color: white;
}

/* For Expandable Image */
.image {
  width: 400px;
  max-width: 100%;
}

</style>
