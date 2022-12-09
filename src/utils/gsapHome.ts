import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export const gsapHome = () => {
  // gsap.registerPlugin(ScrollTrigger);

  let addAnimation = function () {
    $('.title-unique').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words, chars',
        lineClass: 'word-line',
      });

      // let textInstance = $(this);
      // let line = textInstance.find('.word-line');
      // let word = $(this).find('.word');
      const chars = $(this).find('.char');
      gsap.from(chars, {
        y: '2rem',
        opacity: 0,
        stagger: {
          each: 0.3,
        },
        ease: 'Expo.easeOut',
      });
    });
  };

  addAnimation();
};
