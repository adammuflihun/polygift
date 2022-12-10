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
      if (destination.index == 2) {
        $('.fixed-2').css('opacity', '0');
      }

      if (destination.index == 3) {
        $('.fixed-2').css('opacity', '1');
      }
      if (destination.index == 4) {
        $('.fixed-3').css('opacity', '0');
        $('.fixed-2').css('opacity', '1');
      }
      if (destination.index == 5) {
        $('.fixed-2').css('opacity', '0');
        $('.fixed-3').css('opacity', '1');
      }
      if (destination.index == 6) {
        $('.fixed-3').css('opacity', '1');
        $('.fixed-4').css('opacity', '0');
      }
      if (destination.index == 7) {
        $('.fixed-3').css('opacity', '0');
        $('.fixed-4').css('opacity', '1');
      }
      if (destination.index == 8) {
        $('.fixed-4').css('opacity', '1');
        $('.fixed-5').css('opacity', '0');
      }
      if (destination.index == 9) {
        $('.fixed-4').css('opacity', '0');
        $('.fixed-5').css('opacity', '1');
      }
      if (destination.index == 10) {
        $('.fixed-5').css('opacity', '1');
        $('.fixed-6').css('opacity', '0');
      }
      if (destination.index == 11) {
        $('.fixed-5').css('opacity', '0');
        $('.fixed-6').css('opacity', '1');
      }
      if (destination.index == 12) {
        $('.fixed-7').css('opacity', '0');
        $('.fixed-6').css('opacity', '1');
      }
      if (destination.index == 13) {
        $('.fixed-6').css('opacity', '1');
      }
    },
    //responsiveWidth: 480,
    licenseKey: '6A0A57E3-ADC34D84-A91F6D3E-392746EE',
  });
  console.log('fullpage');
};
