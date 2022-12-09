import { fullPage } from '$utils/fullPage';
import { gsapHome } from '$utils/gsapHome';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsapHome();
  fullPage();
});

$(document).ready(function () {
  $('head').append("<link rel='stylesheet' href='http://localhost:3000/index.css'>");
});
