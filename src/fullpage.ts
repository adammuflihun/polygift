import Styles from 'src/styles/globalStyles';

import { fullPage } from '$utils/fullPage';
import { gsapHome } from '$utils/gsapHome';
import { scrollTo } from '$utils/scrollTo';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsapHome();
  fullPage();
  // scrollTo();
});

$(document).ready(function () {
  $('head').append("<link rel='stylesheet' href='http://localhost:3000/index.css'>");
});

/*fullpage*/
/*$(function(){
  var attached = false;
  fullpage();

  $(window).resize( function() {
    fullpage();
  })

  function fullpage(){
    if( $(this).width() > $(this).height() && $(this).width() > 479 ) {
      if(! attached){
        fullpage_init();
        attached = true;
      }
    }else{
      if(attached){
        attached = false;
        $.fn.fullpage.destroy('all');
        location.reload();
      }
    }
  }
});*/
