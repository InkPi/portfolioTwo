<template>
  <div id="portfolioBody">
    <HeaderTop />
    <img src="../assets/portribbon.png" />
    <br />
    <br />
    <div class="image-popup-no-margins">
      <div class="experiment"></div>

      <a v-for="link in links.slice().reverse()" :key="link.linkId">
        <!-- ^^ :href="link.linkHref" -->
        <!-- <div :style="link.styleCss"></div> -->

        <!-- hover over @mouseover and @mouseleave
            those @event create glitch effects when hovered + links were unclickable
        -->
        <div :style="link.styleCss" :class="'port' + link.linkId"></div>

        <div
          v-if="link.github"
          :style="link.styleCss"
          :class="'top' + link.linkId"
        >
          <a :href="link.dataContent1"><p class="linkSpace">Online View</p></a>
          <a :href="link.dataContent2"><p class="linkSpace">Github Repo</p></a>

          <p v-if="link.collabComment">* collaboration project</p>
          <p v-if="link.oldComment" style="color: rgba(255,255,255,.7)">* Old portfolio site</p>
        </div>

        <div v-if="link.staticImg" :style="link.styleCss" id="modalBttn">
          <!-- <a href="@/assets/static/acs.pdf"><div :style="link.styleCss"></div></a> -->
        </div>

        <div id="myModal" class="modal">

          <div class="modal-content">
            <div class="modal-header">
             <span class="close">&times;</span>
              <h2>Modal Header</h2>
            </div>
            <div class="modal-body">
              <p>Some text in the Modal Body</p>
              <p>Some other text...</p>
            </div>
            <div class="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>

        </div>
      </a>
      <!-- <div>
        <div
          :style="link.styleCss"
          :class="'port' + link.linkId"
          @mouseover="link.hover = true"
          @mouseleave="link.hover = false"
        ></div>
        <div
          v-if="link.hover && link.github"
          :style="link.styleCss"
          :class="'top' + link.linkId"
        >
       -->
    </div>
  </div>
</template>

<script>
/* WebAPI: need .onload ()
 * otherwise: Uncaught TypeError: Cannot set property 'onclick' of null [duplicate]
 */
window.onload = function() {
  //Modal
  var modal = document.getElementById("myModal");

  var btnDiv = document.getElementById("modalBttn");

  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal
  btnDiv.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

//import ExpandableImage from '../../ExpandableImage'
import HeaderTop from "../components/HeaderTop";

export default {
  name: "portfolioBody",
  components: {
    HeaderTop
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
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 2,
          linkHref: "../assets/typo2webfinal2.pdf",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 3,
          linkHref: "../assets/seniorinformationc_icon.jpg",
          styleCss: {
            width: "320px",
            height: "600px",
            float: "right"
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 4,
          linkHref: "../assets/bud.pdf",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 5,
          linkHref: "../assets/WalkingSkyscrapers.jpg",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 6,
          linkHref: "../assets/CBI2.jpg",
          styleCss: {
            width: "640px",
            height: "300px",
            float: "left"
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 7,
          linkHref: "../assets/dragon.jpg",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 8,
          linkHref: "../assets/SakuraMatsuri.jpg",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left"
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 9,
          linkHref: "../assets/lionhungryB.pdf",
          styleCss: {
            width: "320px",
            height: "600px",
            float: "left"
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 10,
          linkHref: "../assets/typo2maggridsb.pdf",
          styleCss: {
            width: "640px",
            height: "300px",
            float: "right"
          },
          github: false,
          staticImg: true
        },
        {
          linkId: 11,
          dataContent2: "https://github.com/InkPi/inkpi.github.io",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left",
            backgroundPosition: "0px -7px"
          },
          hover: false,
          dataContent1: "https://inkpi.github.io/",
          github: true,
          staticImg: false,
          oldComment: true
        },
        {
          linkId: 12,
          dataContent2: "https://github.com/InkPi/rpgGame",
          styleCss: {
            width: "320px",
            height: "300px",
            float: "left",
            backgroundSize: "cover"
          },
          hover: false,
          dataContent1: "https://inkpi.github.io/rpgGame/",
          github: true,
          staticImg: false
        },
        {
          linkId: 13,
          dataContent2: "https://github.com/Mjavala/28th",
          styleCss: {
            width: "640px",
            height: "300px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            float: "left"
          },
          hover: false,
          dataContent1: "https://inkpi.github.io/28th-glitch-GithubPgs/",
          github: true,
          staticImg: false,
          collabComment: true
        }
      ],
      alertText: "* to be fixed",
      //Make "Github Pages" for online or Jekyll for more complicated and ambitous ones
      onlineViewLinks: [],
      //direct github code
      githubLinks:
        "<a href='https://inkpi.github.io/28th-glitch-GithubPgs/'>github page</a>"
    };
  }
  // methods: {
  //   applyHoverLinks() {
  //     let nodeId = "hoverLinks";
  //     //do I need this?
  //     let style = document.createElement(nodeId);
  //     if (!style) {
  //       style = document.createElement("style");
  //       style.id = nodeId;
  //       style.type = "text/css";
  //       //append style node as child of current component
  //       this.$el.appendChild(style);
  //     }

  //     let cssRule = `
  //       .{ 'port' + link.linkId }:after {
  //         content: attr(data-content);
  //         color:#fff;
  //         position:absolute;
  //         width:100%; height:100%;
  //         top:0; left:0;
  //         background:rgba(0,0,0,0.6);
  //         opacity:0;
  //         transition: all 0.5s;
  //         -webkit-transition: all 0.5s;
  //       }

  //       .{ 'port' + link.linkId }:hover:after {
  //         opacity:1;
  //       }
  //     `;
  //     style.innerHTML = cssRule;
  //   },
  //   mounted: function() {
  //     this.applyHoverLinks();
  //   },
  //   beforeUpdate: function() {
  //     this.applyHoverLinks();
  //   }
  // }
};
</script>

<style scoped>
#portfolioBody {
  width: 960px;
  margin: 0px auto;
}

.port1 {
  position: relative;
  background: url("../assets/acspreporiginal2icon.jpg");
}
.port2 {
  position: relative;
  background: url("../assets/typo2maggrids_icon.jpg");
}
.port3 {
  position: relative;
  background: url("../assets/seniorinformationc_icon.jpg");
}
.port4 {
  position: relative;
  background: url("../assets/SeniorPort1_icon.jpg");
}
.port5 {
  position: relative;
  background: url("../assets/typo9_icon.jpg");
}
.port6 {
  position: relative;
  background: url("../assets/CBI_justpic.jpg");
}
.port7 {
  position: relative;
  background: url("../assets/SeniorPortDragon_icon.jpg");
}
.port8 {
  position: relative;
  background: url("../assets/SeniorPortsakura_icon.jpg");
}
.port9 {
  position: relative;
  background: url("../assets/wowhuhsite.jpg");
}
.port10 {
  position: relative;
  background: url("../assets/27.jpg");
}
.port11 {
  background: url("../assets/960_grid_16_col3d.jpg");
  position: relative;
  display: block;
}

.port12 {
  background: url("../assets/rpgGame.png");
  position: relative;
  display: block;
}

.port13 {
  background: url("../assets/glitchanimation.png");
  position: relative;
  display: block;
}

/* Tried dynamic hover */
.gitStuff:hover {
  opacity: 0.5;
}

/* .port13 img {
  width: 100%;
  vertical-align: top;
} */

/* .port13:after {
  
  //This hover to change different image!
  //I want actual link text to go there
   
  content: attr(v-html);
  color: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
} */

.port13:hover:after {
  opacity: 1;
}

.top11,
.top12,
.top13 {
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  /* top: -300px; */
  padding: 0px;
  margin: 0px;
  position: absolute;
  display: block;
  opacity: 0;
  transition: opacity 1s;
}

.top12 {
  right: 240px;
}

.top11 {
  top: 425px;
}

.top11:hover,
.top12:hover,
.top13:hover {
  opacity: 1;
}

.linkSpace {
  color: white;
  font-size: 30px;
  z-index: 10;
}

.linkSpace:last-child {
  margin-top: 0px;
  padding: 10px;
  text-align: center;
}

.linkSpace:first-child {
  margin-top: 70px;
  padding: 10px;
  text-align: center;
}

/* Modal */

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

/* Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {
  padding: 2px 16px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}
</style>
