<template>
  <div id="home">
    <div class="brickwall">
      <HeaderTop class="links"></HeaderTop>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop.vue";

export default {
  name: "home",
  components: {
    HeaderTop
  }
};
</script>

<style scoped>
.brickwall {
  background: no-repeat center/100% url("../assets/jakob-braun-NpeFMd8FseU-unsplash.jpg");
  height: 100vh;
  overflow: clip;
}

a {
  color: white;
}
.links:hover {
  color: pink;
}
</style>
