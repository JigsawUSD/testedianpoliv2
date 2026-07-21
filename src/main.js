// Main entry point - SPA with vanilla JS components
import './styles/global.css';
import { Lenis } from 'lenis';
import { initPreloader } from './components/Preloader';
import { initNavigation } from './components/Navigation';
import { initHero } from './components/Hero';
import { initManifesto } from './components/Manifesto';
import { initHistory } from './components/History';
import { initMenu } from './components/Menu';
import { initExperience } from './components/Experience';
import { initReviews } from './components/Reviews';
import { initLocation } from './components/Location';
import { initFooter } from './components/Footer';
import { initRevealAnimations } from './utils/revealAnimations';
import { initParallax } from './utils/parallax';

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Make lenis globally available for components
window.lenis = lenis;

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  // Wait for fonts to load
  await document.fonts.ready;

  // Initialize preloader
  initPreloader();

  // Initialize components
  initNavigation();
  initHero();
  initManifesto();
  initHistory();
  initMenu();
  initExperience();
  initReviews();
  initLocation();
  initFooter();

  // Initialize global utilities
  initRevealAnimations();
  initParallax();

  // Mark app as ready
  document.body.classList.add('app-ready');
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    lenis.stop();
  } else {
    lenis.start();
  }
});