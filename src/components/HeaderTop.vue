<template>
  <div id="headerTop">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home </router-link> 
      <router-link :to="{ name: 'portfolio' }"> Portfolio</router-link>
      <router-link :to="{ name: 'aboutme' }"> About Me </router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </div>
    <!-- Below will repeat if used somewhere else (imported) -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "headerTop"
};
</script>

<style>
#nav > a {color:white}
</style>
