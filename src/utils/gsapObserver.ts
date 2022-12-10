import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

export const gsapObserver = () => {
  console.log('gsapobserver');

  gsap.registerPlugin(Observer);
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  $('#slide1number2').click(function () {
    // code to be executed when the button is clicked
    tl.fromTo(
      '#slide1number2title',
      { opacity: 0, autoAlpha: 0, y: '2rem' },
      { opacity: 1, autoAlpha: 1, y: '0rem', ease: 'Expo.easeOut' }
    );
    tl.fromTo(
      '#slide1number2subtitle',
      { opacity: 0, autoAlpha: 0 },
      { opacity: 1, autoAlpha: 1, ease: 'Expo.easeOut' },
      0.3
    );
    gsap.to('#slide1number2titledrag', { duration: 1, x: '2.3rem', ease: 'Expo.easeOut' });
    tl.to('#slide1number2', { color: 'white' }, 0.2);
    tl.to('#slide1number2titlenumber1', { color: '#000000' }, 0.2);
  });

  $('#slide1number2titlenumber1').click(function () {
    // code to be executed when the button is clicked
    tl2.fromTo(
      '#slide1number2title',
      { opacity: 1, autoAlpha: 1, y: '2rem' },
      { opacity: 0, autoAlpha: 0, y: '0', ease: 'Expo.easeOut' }
    );
    tl2.fromTo(
      '#slide1number2subtitle',
      { opacity: 1, autoAlpha: 1 },
      { opacity: 0, autoAlpha: 0, ease: 'Expo.easeOut' },
      0.2
    );
    gsap.to('#slide1number2titledrag', { duration: 1, x: '0rem', ease: 'Expo.easeOut' });
    tl2.to('#slide1number2', { color: '#000000' }, 0.2);
    tl2.to('#slide1number2titlenumber1', { color: 'white' }, 0.2);
  });
};
