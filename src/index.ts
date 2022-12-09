import Styles from 'src/styles/globalStyles';
import Styles from 'src/styles/styleSnap';


import { fullPage } from '$utils/fullPage';
import { gsapHome } from '$utils/gsapHome';
import { scrollTo } from '$utils/scrollTo';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsapHome();
  // fullPage();
  // scrollTo();
});

$(document).ready(function () {
  $('head').append("<link rel='stylesheet' href='https://polygift.vercel.app/dist/index.css'>");
});
