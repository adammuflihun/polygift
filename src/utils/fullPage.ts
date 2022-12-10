import { gsap } from 'gsap';
import SplitType from 'split-type';

export const fullPage = () => {
  new fullpage('#fullpage', {
    css3: false,
    scrollingSpeed: 700,
    // scrollBar: true,
    lockAnchors: false,

    afterLoad: function (origin, destination, direction, trigger) {
      var origin = this;

      //using index
      if (destination.index == 3) {
        $('.fixed-2').css('opacity', '1');
      }
    },
    //responsiveWidth: 480,
    licenseKey: '6A0A57E3-ADC34D84-A91F6D3E-392746EE',
  });
  console.log('fullpage');
};
