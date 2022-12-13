import Styles from 'src/styles/globalStyles';

import { fullPage } from '$utils/fullPage';
import { gsapHome } from '$utils/gsapHome';
import { scrollTo } from '$utils/scrollTo';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsapHome();
  // fullPage();

  function myFunction() {
    // This function will be run every time the window size is changed
    // Put your code here...

    if (navigator.userAgent.match(/Desktop/i)) {
      fullPage();
    }
  }

  window.addEventListener('resize', myFunction);
});

// $(document).ready(function () {
//   $('head').append("<link rel='stylesheet' href='http://localhost:3000/index.css'>");
// });
