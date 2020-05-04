<template>
  <div id="portfolioBody">
    <img src="../assets/portribbon.png" />
    <br />
    <br />
    <div class="image-popup-no-margins">
      <!-- <a :href="link"><div class="port1"></div></a> -->

      <!-- <div v-for="link in links" :key="link.linkId" :style="link.styleCss" :class="'port' + link.linkId">
            <expandable-image
              class="image"
              :href="link.linkHref"
            />
          </div> -->

      <a v-for="link in links" :key="link.linkId" :href="link.linkHref">
        <!-- <div :style="link.styleCss"></div> -->
        <div :style="link.styleCss" :class="'port' + link.linkId"></div>
      </a>

      <img v-bind:src="linko" />
    </div>
  </div>
</template>

<script>
//import ExpandableImage from '../../ExpandableImage'

export default {
  name: "portfolioBody",
  components: {
    //ExpandableImage
  },
  data() {
    return {
      linko: "../assets/portribbon.png",
      links: [
        {
          linkId: 1,
          linkHref: "../assets/960_grid_16_col3d.jpg",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          }
        },
        {
          linkId: 2,
          linkHref: "../assets/seniorinformationc_icon.jpg",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          }
        },
        {
          linkId: 3,
          linkHref: "../assets/typo2webfinal2.pdf",
          styleCss: {
            width: "320px",
            height: "600px",
            float: "right"
          }
        },
        {
          linkId: 4,
          linkHref: "../assets/bud.pdf",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          }
        },
        {
          linkId: 5,
          linkHref: "../assets/WalkingSkyscrapers.jpg",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          }
        },
        {
          linkId: 6,
          linkHref: "../assets/CBI2.jpg",
          styleCss: {
            width: "640px",
            height: "300px",
            float: "left"
          }
        },
        {
          linkId: 7,
          linkHref: "../assets/dragon.jpg",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          }
        },
        {
          linkId: 8,
          linkHref: "../assets/SakuraMatsuri.jpg",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          }
        },
        {
          linkId: 9,
          linkHref: "../assets/lionhungryB.pdf",
          styleCss: {
            width: "640px",
            height: "300px",
            float: "left"
          }
        },
        {
          linkId: 10,
          linkHref: "../assets/typo2maggridsb.pdf",
          styleCss: {
            width: "640px",
            height: "300px",
            float: "left"
          }
        },
        {
          linkId: 11,
          linkHref: "../assets/acs.pdf",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
#portfolioBody {
  width: 960px;
  margin: 0px auto;
}

.port1 {
  background: url("../assets/960_grid_16_col3d.jpg");
}
.port2 {
  background: url("../assets/seniorinformationc_icon.jpg");
}
.port3 {
  background: url("../assets/wowhuhsite.jpg");
}
.port4 {
  background: url("../assets/SeniorPort1_icon.jpg");
}
.port5 {
  background: url("../assets/typo9_icon.jpg");
}
.port6 {
  background: url("../assets/CBI_justpic.jpg");
}
.port7 {
  background: url("../assets/SeniorPortDragon_icon.jpg");
}
.port8 {
  background: url("../assets/SeniorPortsakura_icon.jpg");
}
.port9 {
  background: url("../assets/27.jpg");
}
.port10 {
  background: url("../assets/typo2maggrids_icon.jpg");
}
.port11 {
  background: url("../assets/acspreporiginal2icon.jpg");
}
</style>