require("./../css/style.styl");

import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

//import { default as EventManager } from './eventManager';
import { default as myModal } from './modal';



// function openModal() {
//   let myPromoModal = document.querySelector(".my-promo-modal");
//   myPromoModal.classList.add("my-promo-modal_visible");

//   let page = document.querySelector(".is-page");
//   page.classList.add("is-blur");

//   setTimeout(() => {
//     let skelet_loading = document.querySelectorAll(".is-loading");

//     skelet_loading.forEach(el => {
//       el.classList.add("is-load");
//     });

//     setTimeout(() => {
//       skelet_loading.forEach(el => {
//         el.classList.remove("is-load", "is-loading");
//       });
//     }, 500);
//   }, 1000);
// }



window.addEventListener("load", () => {
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector(".my-promo-modal__content"), {
    plugins: {
      overscroll: true,
    },
  });
  let modal = new myModal("hi");
  //let eventManager = new EventManager("hello", openModal);
});