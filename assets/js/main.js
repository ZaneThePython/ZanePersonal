// Main application entry point
import {
  animateOnLoad,
  animateSkillTags,
  animateProjectCards,
  addTypingAnimation,
} from './modules/animations.js';
import {
  addMouseTrail,
  addMatrixRain,
  addCustomCursor,
  addInteractiveBackground,
} from './modules/effects.js';
import { addEasterEggs, startAutoGlitch, addKeyboardInteractions } from './modules/easter-eggs.js';
import { addSoundEffects } from './modules/sound.js';
import {
  addMicroInteractions,
  addTextEffects,
  addScrollEffects,
  addButtonMorphing,
} from './modules/interactions.js';
import { getNavElements } from './modules/dom.js';

// Navigation functions
function showContentSection(sectionName) {
  hideAllContentSections();

  const targetSection = document.getElementById(`${sectionName}-content`);
  if (targetSection) {
    targetSection.classList.add('active');

    setTimeout(() => {
      targetSection.style.opacity = '1';
    }, 10);
  }
}

function hideAllContentSections() {
  const { contentSections } = getNavElements();
  contentSections.forEach((section) => {
    section.classList.remove('active');
    section.style.opacity = '0';
  });
}

// Initialize navigation
function initNavigation() {
  const { navButtons, closeButtons, contentSections } = getNavElements();

  navButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const section = this.getAttribute('data-section');
      if (section) {
        e.preventDefault();
        showContentSection(section);
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      hideAllContentSections();
    });
  });

  contentSections.forEach((section) => {
    section.addEventListener('click', function (e) {
      if (e.target === this) {
        hideAllContentSections();
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hideAllContentSections();
    }
  });
}

// Initialize all features
function initializeApp() {
  // Navigation
  initNavigation();

  // Animations
  animateOnLoad();
  animateSkillTags();
  animateProjectCards();
  addTypingAnimation();

  // Visual effects
  addMouseTrail();
  addMatrixRain();
  addCustomCursor();
  addInteractiveBackground();

  // Easter eggs
  addEasterEggs();
  startAutoGlitch();
  addKeyboardInteractions();

  // Sound
  addSoundEffects();

  // Interactions
  addMicroInteractions();
  addTextEffects();
  addScrollEffects();
  addButtonMorphing();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
