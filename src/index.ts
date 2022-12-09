import { fullPage } from '$utils/fullPage';
import { gsapHome } from '$utils/gsapHome';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsapHome();
  fullPage();
});
