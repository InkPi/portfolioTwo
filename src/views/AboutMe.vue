<template>
  <div id="AboutMe">
    <HeaderTop class="about" />
    <h1>About Me Page</h1>
  </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop";

export default {
  name: "AboutMe",
  components: {
    HeaderTop
  },
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>

<style scoped>
.router-link-active a:link {
  color: orange;
}
</style>
