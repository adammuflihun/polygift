import Styles from 'src/styles/globalStyles';

import { fullPage } from '$utils/fullPage';
import { gsapHome } from '$utils/gsapHome';
import { scrollTo } from '$utils/scrollTo';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsapHome();

  // First, check if the browser supports media queries
  if ('matchMedia' in window) {
    // Create a media query
    const query = window.matchMedia('(min-width: 780px)');

    // Add a listener to the media query
    query.addListener(handleMatch);

    // Call the listener function initially, in case the viewport is already at 900px or above
    handleMatch(query);
  }

  // This function will be called whenever the viewport width matches or changes from the media query
  function handleMatch(query) {
    if (query.matches) {
      fullPage();
    } else {
      // The viewport is less than 900px, so we don't want to run the JavaScript
    }
  }
});

console.log('oke');
$(document).ready(function () {
  $('head').append("<link rel='stylesheet' href='http://localhost:3000/index.css'>");
});
