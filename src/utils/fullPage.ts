import { gsap } from 'gsap';
import SplitType from 'split-type';

export const fullPage = () => {
  new fullpage('#fullpage', {
    licenseKey: 'YOUR_KEY_HERE',
    autoScrolling: true,
    scrollHorizontally: true,
    credits: { enabled: false, label: '', position: 'right' },
  });
  console.log('fullpage');
};
