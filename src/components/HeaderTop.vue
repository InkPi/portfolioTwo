<template>
  <div id="headerTop">
    <div id="nav">
      <router-link :to="{ name: 'home' }" class="home" exact>{{
        "home" | capitalize
      }}</router-link>
      <router-link :to="{ name: 'portfolio' }" class="portfolio">
        Portfolio</router-link
      >
      <router-link :to="{ name: 'aboutme' }" class="about">
        About Me
      </router-link>
      <router-link :to="{ name: 'contact' }" class="contact"
        >Contact</router-link
      >
    </div>
    <!-- Below will repeat if used somewhere else (imported) -->
    <div v-if="checkHome"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "headerTop",
  data() {
    return {
      homeSite: false,
      //try#2
      subSite: ["portfolio", "aboutme", "contact"],
      selectedSubSite: null
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  mounted: function() {
    var l = document.links;
    // retrieve all links
    for (var i = 0; i < l.length; i++) {
      var linkHref = l[i].href;
      var endRoutes = linkHref.slice(linkHref.lastIndexOf("/"));
      if (this.$route.path === endRoutes[0]) {
        l[i].style.color = "white";
      } else {
        l[i].style.color = "black";
      }
    }
  }
};
</script>

<style scoped>
#headerTop {
  color: yellow;
}
</style>
