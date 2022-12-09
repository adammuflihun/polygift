import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export const gsapHome = () => {
  gsap.registerPlugin(ScrollTrigger);

  let addAnimation = function () {
    $('.title-unique').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words',
        lineClass: 'word-line',
      });

      let textInstance = $(this);
      let line = textInstance.find('.word-line');
      let word = $(this).find('.word');

      gsap.from(word, {
        // scrollTrigger: {
        //   trigger: '.title-unique',
        //   start: 'top 1rem',
        //   end: 'top 1rem',
        //   toggleActions: 'play none reverse none',
        // },
        y: '2rem',
        opacity: 0,
        duration: 0.05,
        ease: 'expo.out',
      });
    });
  };

  addAnimation();
};
