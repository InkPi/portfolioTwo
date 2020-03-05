<template>
    <div id="portfolioBody">
        <p>Portfolio</p>
         <img src="../../imgfolder/portribbon.png">
    <br>
    <br>
      <div class="image-popup-no-margins">
        <a v-bind:href="link1" rel="shadowbox" title="My Portfolio Site Design"><div id="port1"></div></a>
        <a href="../../imgfolder/increasedtemp.jpg" rel="shadowbox" title="Temperature Effect Poster [large]"><div id="port2"></div></a>
        <a href="../../imgfolder/typo2webfinal2.pdf" rel="shadowbox" title="Wowhuh site"><div id="port3"></div></a>
        <a href="../../imgfolder/bud.pdf" rel="shadowbox" title="Bud Product"><div id="port4" ></div></a>
        <a href="../../imgfolder/WalkingSkyscrapers.jpg" rel="shadowbox" title="Walking Skyscrapers Tour Poster"><div id="port5"></div></a>
        <a href="../../imgfolder/CBI2.jpg" rel="shadowbox" title="Alliance Computing Solutions website"><div id="port6"></div></a>
        <a href="../../imgfolder/dragon.jpg" rel="shadowbox" title="Dragon Summoned by Candle Flames Poster"><div id="port7"></div></a>
        <a href="../../imgfolder/SakuraMatsuri.jpg" rel="shadowbox" title="Sakura Matsuri Poster"><div id="port8"></div></a>
        <a href="../../imgfolder/lionhungryB.pdf" rel="shadowbox" title="Lion's Hungry Appetite"><div id="port9"></div></a>
        <a href="../../imgfolder/typo2maggridsb.pdf" rel="shadowbox" title="Escape Velocity Magazine Article"><div id="port10"></div></a>
        <a href="../../imgfolder/acs.pdf" rel="shadowbox" title="Alliance Computing Solutions website"><div id="port11"></div></a>
      </div>
      
    </div>
</template>

<script>
export default {
    name: "portfolioBody",
    data() {
      return {
        link1: "../../imgfolder/WebsitePortpres copy.pdf"
      }
    }
}
</script>

<style scoped>
  #port1 {width: 320px; height: 300px; float:left; background: url('../../imgfolder/960_grid_16_col3d.jpg');}
  #port2 {width: 320px; height: 300px; float:left; background: url('../../imgfolder/seniorinformationc_icon.jpg');}
  #port3 {width: 320px; height: 600px; float:right; background: url('../../imgfolder/wowhuhsite.jpg');}
  #port4 {width: 320px; height: 300px; float:left; background: url('../../imgfolder/SeniorPort1_icon.jpg');}
  #port5 {width: 320px; height: 300px; float:left; background: url('../../imgfolder/typo9_icon.jpg');}
  #port6 {width: 640px; height: 300px; float:left; background: url('../../imgfolder/CBI_justpic.jpg');}
  #port7 {width: 320px; height: 300px; float:left; background: url('../../imgfolder/SeniorPortDragon_icon.jpg');}
  #port8 {width: 320px; height: 300px; float:left; background: url('../../imgfolder/SeniorPortsakura_icon.jpg');}
  #port9 {width: 640px; height: 300px; float:left; background: url('../../imgfolder/27.jpg');}
  #port10 {width: 640px; height: 300px; float:left; background: url('../../imgfolder/typo2maggrids_icon.jpg');}
  #port11 {width: 320px; height: 300px; float:left; background: url('../../imgfolder/acspreporiginal2icon.jpg');}
</style>