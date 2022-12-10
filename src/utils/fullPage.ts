import { gsap } from 'gsap';
import SplitType from 'split-type';

export const fullPage = () => {
  new fullpage('#fullpage', {
    css3: false,
    scrollingSpeed: 700,
    // scrollBar: true,
    // lockAnchors: false,
    licenseKey: '6A0A57E3-ADC34D84-A91F6D3E-392746EE',
    autoScrolling: true,
    scrollHorizontally: true,
    // credits: { enabled: false, label: '', position: 'right' },
  });
  console.log('fullpage');
};
