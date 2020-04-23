<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderTop></HeaderTop>
    <portfolio-body></portfolio-body>

    <expandable-image
      class="image"
      src="https://images.unsplash.com/photo-1550948537-130a1ce83314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80"
      alt="dog"
      title="dog"
    />

    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import HeaderTop from "./components/HeaderTop.vue";
import FooterBottom from "./components/Footer.vue";
//import Home from './components/HomePage.vue';
import Portfolio from "./views/PortfolioBody.vue";
import ExpandableImage from "../ExpandableImage";

export default {
  name: "App",
  components: {
    //HelloWorld,
    HeaderTop,
    ExpandableImage,
    "portfolio-body": Portfolio,
    "footer-bottom": FooterBottom
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

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
