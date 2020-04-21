<template>
    <div id="portfolioBody">
        <p>Portfolio</p>
         <img src="../assets/portribbon.png">
    <br>
    <br>
      <div class="image-popup-no-margins">
        <!-- <a :href="link"><div class="port1"></div></a> -->
        
        <a v-for="link in links" :key="link.linkId" :href="link.linkHref">
            <!-- <div :style="link.styleCss"></div> -->
          <div :class="'port' + link.linkId"></div>
        </a>

      </div>
      
    </div>
</template>

<script>
export default {
    name: "portfolioBody",
    data() {
      return {
        link: "../assets/WebsitePortprescopy.pdf",
        links: [
          {
            linkId: 1,
            linkHref: "../assets/WebsitePortprescopy.pdf",
            styleCss: {
              width: '320px',
              height: '300px', 
              float: 'left', 
              background: "url('~@/../assets/960_grid_16_col3d.jpg)"
            }
          },
          {
            linkId: 2,
            linkHref: "../assets/increasedtemp.jpg",
            styleCss: {
              width: '320px', 
              height: '300px', 
              float: 'left', 
              background: "url('../assets/seniorinformationc_icon.jpg')"
            }
          },
          {
            linkId: 3,
            linkHref: "../assets/typo2webfinal2.pdf",
            styleCss: {
              width: '320px', 
              height: '600px', 
              float: 'left', 
              background: "url('../assets/wowhuhsite.jpg')"
            }
          },
          {
            linkId: 4,
            linkHref: "../assets/bud.pdf",
            styleCss: {
              width: '320px',
              height: '300px',
              float: 'left',
              background: "url('../assets/SeniorPort1_icon.jpg')"
            }
          },
          {
            linkId: 5,
            linkHref: "../assets/WalkingSkyscrapers.jpg",
            styleCss: {
              width: '320px', 
              height: '300px', 
              float: 'left', 
              backgroundImage: "url('../assets/typo9_icon.jpg')"
            } 
          },
          {
            linkId: 6,
            linkHref: "../assets/CBI2.jpg",
            styleCss: {
              width: '640px', 
              height: '300px', 
              float: 'left', 
              background: "url('../assets/CBI_justpic.jpg')"
            }  
          },
          {
            linkId: 7,
            linkHref: "../assets/dragon.jpg",
            styleCss: {
              width: '320px', 
              height: '300px', 
              float: 'left', 
              background: "url('../assets/SeniorPortDragon_icon.jpg')"
            } 
          },
          {
            linkId: 8,
            linkHref: "../assets/SakuraMatsuri.jpg",
            styleCss: {
              width: '320px',
              height: '300px',
              float: 'left',
              background: "url('../assets/SeniorPortsakura_icon.jpg')"
            } 
          },
          {
            linkId: 9,
            linkHref: "../assets/lionhungryB.pdf",
            styleCss: {
              width: '640px', 
              height: '300px', 
              float: 'left',
              background: "url('../assets/27.jpg')"
            } 
          },
          {
            linkId: 10,
            linkHref: "../assets/typo2maggridsb.pdf",
            styleCss: {
              width: '640px', 
              height: '300px', 
              float: 'left',
              background: "url('../assets/typo2maggrids_icon.jpg')"
            } 
          },
          {
            linkId: 11,
            linkHref: "../assets/acs.pdf",
            styleCss: {
              width: '320px', 
              height: '300px', 
              float: 'left', 
              background: "url('../assets/acspreporiginal2icon.jpg')"
            } 
          }
        ]
      }
    }
}
</script>

<style scoped>
  #portfolioBody {
    width: 960px;
    margin: 0px auto;
  }

  .port1 {width: 320px; height: 300px; float:left; background: url('../assets/960_grid_16_col3d.jpg');}
  .port2 {width: 320px; height: 300px; float:left; background: url('../assets/seniorinformationc_icon.jpg');}
  .port3 {width: 320px; height: 600px; float:right; background: url('../assets/wowhuhsite.jpg');}
  .port4 {width: 320px; height: 300px; float:left; background: url('../assets/SeniorPort1_icon.jpg');}
  .port5 {width: 320px; height: 300px; float:left; background: url('../assets/typo9_icon.jpg');}
  .port6 {width: 640px; height: 300px; float:left; background: url('../assets/CBI_justpic.jpg');}
  .port7 {width: 320px; height: 300px; float:left; background: url('../assets/SeniorPortDragon_icon.jpg');}
  .port8 {width: 320px; height: 300px; float:left; background: url('../assets/SeniorPortsakura_icon.jpg');}
  .port9 {width: 640px; height: 300px; float:left; background: url('../assets/27.jpg');}
  .port10 {width: 640px; height: 300px; float:left; background: url('../assets/typo2maggrids_icon.jpg');}
  .port11 {width: 320px; height: 300px; float:left; background: url('../assets/acspreporiginal2icon.jpg');}

</style>