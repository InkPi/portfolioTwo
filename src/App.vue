<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderTop></HeaderTop>
    <portfolio-body></portfolio-body>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import HeaderTop from './components/HeaderTop.vue';
import FooterBottom from './components/Footer.vue';
//import Home from './components/HomePage.vue';
import Portfolio from './components/PortfolioBody.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    HeaderTop,
    "portfolio-body": Portfolio,
    "footer-bottom": FooterBottom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a:link {color: black;
		text-decoration: none;}
a:visited {color: black;}
a:hover {color: white;}
</style>
