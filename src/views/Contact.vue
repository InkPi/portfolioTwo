<template>
  <div id="contact">
    <HeaderTop :class="linkcolor" />
    <h1>Contact Page</h1>
  </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop";

export default {
  name: "contact",
  data(){
    return {
      linkcolor: "black-link"
    };
  },
  components: {
    HeaderTop
  }
};
</script>

<style scoped>
.black-link a:link {
  color: yellow;
  text-decoration: line-through;
  font-size: 26px;
}
</style>
