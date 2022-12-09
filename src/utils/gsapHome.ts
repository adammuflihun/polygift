import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export const gsapHome = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  //title text 1
  let addAnimation = function () {
    $('.title-unique:nth-child(1)').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words, chars',
        lineClass: 'word-line',
      });
      const chars = $(this).find('.char');
      tl.from(chars, 2.5, {
        y: '8rem',
        opacity: 0,
        stagger: {
          each: 0.1,
        },
        ease: 'Expo.easeOut',
      });
    });
  };
  //title text 1

  //title text 2
  let addAnimation2 = function () {
    $('.title-unique:nth-child(2)').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words, chars',
        lineClass: 'word-line',
      });
      const chars = $(this).find('.char');
      tl.from(
        chars,
        2,
        {
          y: '8rem',
          opacity: 0,
          stagger: {
            each: 0.08,
            from: 'start',
          },
          ease: 'Expo.easeOut',
        },
        0.5
      );
    });
  };
  //title text 2

  addAnimation();
  addAnimation2();
};
