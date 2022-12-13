import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export const gsapHome = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  gsap.to('h1', { autoAlpha: 1 });

  //title text 1

  let addAnimation = function () {
    $('.title-unique:nth-child(1)').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words, chars',
        lineClass: 'word-line',
      });
      const chars = $(this).find('.char');
      tl.fromTo(
        chars,
        2.5,
        {
          autoAlpha: 0,
          opacity: 0,
          y: '8rem',
        },
        {
          y: '0rem',
          autoAlpha: 1,
          opacity: 1,
          stagger: {
            each: 0.1,
          },
          ease: 'Expo.easeOut',
        }
      );
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
          autoAlpha: 0,
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

  //calling function
  addAnimation();
  addAnimation2();
  //calling function

  // Continue timeline navbar
  tl.from(
    '.navbar',
    1,
    {
      y: '-4rem',
      opacity: 0,
      autoAlpha: 0,
      stagger: {
        each: 0.08,
        from: 'start',
      },
      ease: 'Expo.easeOut',
    },
    1.2
  );
  // Continue timeline navbar

  // supported-text-headline
  tl.from(
    '.supported-text-headline',
    1,
    {
      y: '4rem',
      opacity: 0,
      autoAlpha: 0,
      stagger: {
        each: 0.08,
        from: 'start',
      },
      ease: 'Expo.easeOut',
    },
    0.9
  );
  // supported-text-headline

  // wrap gallery
  tl.from(
    '.item-img-gallery',
    2.5,
    {
      // scrollTrigger: {
      //   trigger: '.section-colored-dark:nth-child(1)',
      //   start: 'top 100%',
      //   end: '0% 100%',
      //   // markers: true,
      //   toggleActions: 'play none reverse none',
      // },
      y: '4rem',
      opacity: 0,
      autoAlpha: 0,
      stagger: {
        each: 0.3,
      },
      ease: 'Expo.easeOut',
    },
    2
  );
  // wrap gallery

  // Title unique 2
  let addAnimation3 = function () {
    $('.title-unique2').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words, chars',
        lineClass: 'word-line',
      });
      const words = $(this).find('.word');
      tl.from(
        words,
        1.5,
        {
          // scrollTrigger: {
          //   trigger: '.section-colored-dark:nth-child(1)',
          //   // markers: true,
          //   toggleActions: 'play none none none',
          // },
          y: '8rem',
          opacity: 0,
          autoAlpha: 0,
          stagger: {
            each: 0.05,
          },
          ease: 'Expo.easeOut',
        },
        2.8
      );
    });
  };
  // addAnimation3();
  // Title unique 2

  // Title explore

  let addAnimation5 = function () {
    $('.title-explore').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words, chars',
        lineClass: 'word-line',
      });
      const chars = $(this).find('.char');
      console.log(this);
      gsap.from(chars, 2.5, {
        scrollTrigger: {
          trigger: '.title-explore',
          // markers: true,
          toggleActions: 'restart none none none',
        },
        y: '8rem',
        autoAlpha: 0,
        opacity: 0,
        stagger: {
          each: 0.1,
        },
        ease: 'Expo.easeOut',
      });
    });
  };

  // addAnimation5();
  // Title explore

  // gsap fixed change
  // fixed-2

  // fixed-2
};
