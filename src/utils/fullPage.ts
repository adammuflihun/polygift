import { gsap } from 'gsap';
import SplitType from 'split-type';

export const fullPage = () => {
  const pageFull = new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    afterLoad: function (origin, destination, direction) {
      if (destination.index == destination.index) {
        // trigger animations on page 2 here
        let addAnimation = function () {
          const tl = gsap.timeline();
          // heading
          $('.section .heading-style-h1').each(function (index) {
            const text = new SplitType($(this), {
              types: 'words',
              lineClass: 'word-line',
            });
            const word = $(this).find('.word');
            tl.fromTo(
              word,
              0.8,
              {
                y: '12rem',
                autoAlpha: 0,
                opacity: 0,
                stagger: {
                  each: 0.1,
                },
                ease: 'Expo.easeOut',
              },
              { y: '0', autoAlpha: 1, opacity: 1 }
            );
          }, 0);
          // heading

          // numberslide
          tl.from(
            '.section .wrap-number-slide',
            0.8,
            {
              y: '12rem',
              autoAlpha: 0,
              opacity: 0,
              stagger: {
                each: 0.1,
              },
              ease: 'Expo.easeOut',
            },
            0.5
          );
          //paragraph
          tl.from(
            '.section .text-weight-normal',
            0.8,
            {
              y: '12rem',
              autoAlpha: 0,
              opacity: 0,
              stagger: {
                each: 0.1,
              },
              ease: 'Expo.easeOut',
            },
            0.7
          );
          // paragraph
        };
        addAnimation();
        // trigger animations on page 2 here
      }
    },
  });
};
