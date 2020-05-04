<template>
  <div id="home">
    <!-- <div :class="{ brickwall: isHome }" :id="brickwall | noBricks"> -->
    <div :class="{ brickwall: isHome }" :id="brickwall | noBricks">
      <HeaderTop class="links" @click="deleteBrickWall" />
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
  },
  methods: {
    // isBrickWall() {
    //   if()
    // }
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
  background: no-repeat center/100% url("../assets/jakob-braun-NpeFMd8FseU-unsplash.jpg");
  height: 100vh;
  overflow: clip;
}

a {
  color: black;
}
.links:hover {
  color: pink;
}
</style>
