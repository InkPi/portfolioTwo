<template>
  <div id="headerTop">
    <div id="nav">
      <router-link :to="{ name: 'home' }" class="home">{{'home' | capitalize}}</router-link> 
      <router-link :to="{ name: 'portfolio' }" class="subpages"> Portfolio</router-link>
      <router-link :to="{ name: 'aboutme' }" class="subpages"> About Me </router-link>
      <router-link :to="{ name: 'contact' }" class="subpages">Contact</router-link>
    </div>
    <!-- Below will repeat if used somewhere else (imported) -->
    <div v-if="checkHome"><router-view></router-view></div>
  </div>
</template>

<script>
var subpages = document.getElementsByClassName("subpages");

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
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    checkHome() {
      if (subpages) {
        this.homeSite = true;
      } else {
        this.homeSite = false;
      }
    },
    //try#2
    // selectedSubSite() {
    //   this.selectedSubSite 
    // }
  }
};
</script>

<style scoped>
.styleNone {
  display: none;
}
</style>
