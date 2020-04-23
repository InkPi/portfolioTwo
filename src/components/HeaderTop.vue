<template>
  <div id="headerTop">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'portfolio'}">Portfolio</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "headerTop"
};
</script>

<style></style>
