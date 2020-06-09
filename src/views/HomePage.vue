<template>
  <div id="home">
    <div :class="{ brickwall: isHome }">
      <HeaderTop />
    </div>
  </div>
</template>

<script>
var brickwall = document.getElementsByClassName("brickwall");

import HeaderTop from "../components/HeaderTop.vue";

export default {
  name: "home",
  data() {
    return {
      isHome: brickwall
    };
  },
  components: {
    HeaderTop
  }
};
</script>

<style scoped>
h1 {
  color: black;
}

p {
  color: black;
}

.brickwall {
  background: no-repeat center/100%
    url("../assets/jakob-braun-NpeFMd8FseU-unsplash.jpg");
  background-size: cover;
  height: 100vh;
  overflow: clip;
}
</style>
