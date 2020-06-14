import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueExpandableImage from "vue-expandable-image";
import VModal from "vue-js-modal";

Vue.use(VueExpandableImage);
Vue.use(VModal);

//Was doing this but it conflicted with modal scrolling
//  * when scrolled, everything turned to just background color
//  * thus part of stuff got cut off
//https://gist.github.com/AnalyzePlatypus/22ca31c8f953db92eedadfe930bce31f

//For ModalPort
// register modal component
Vue.component("modal", {
  template: "#modal-template"
});

// Vue.component("modalPopup", {
//   template: `
//     <transition name="modal">
//         <div class="modal-mask">
//           <div class="modal-wrapper">
//             <div class="modal-container">

//               <div class="modal-header">
//                 <slot name="header">
//                   default header
//                 </slot>
//               </div>

//               <div class="modal-body">
//                 <slot name="body">
//                   default body
//                 </slot>
//               </div>

//               <div class="modal-footer">
//                 <slot name="footer">
//                   default footer
//                   <button class="modal-default-button" @click="$emit('close')">
//                     OK
//                   </button>
//                 </slot>
//               </div>
//             </div>
//           </div>
//         </div>
//       </transition>
//   `
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  //just added
  components: { App }
}).$mount("#app");
