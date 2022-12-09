import Styles from 'src/styles/globalStyles';

import { fullPage } from '$utils/fullPage';
import { gsapHome } from '$utils/gsapHome';
import { gsapObserver } from '$utils/gsapObserver';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsapHome();
  fullPage();
  gsapObserver();
});

$(document).ready(function () {
  $('head').append("<link rel='stylesheet' href='http://localhost:3000/index.css'>");
});
