// Animation utilities and functions
import { DOM, getMainElements } from './dom.js';

// Animate elements on page load
export function animateOnLoad() {
  const { avatar, brandName, disclaimer } = getMainElements();
  const navButtons = DOM.getAll('.nav-button');

  // Set initial states
  if (avatar) {
    avatar.style.opacity = '0';
    avatar.style.transform = 'translateY(30px)';
  }
  if (brandName) {
    brandName.style.opacity = '0';
    brandName.style.transform = 'translateY(30px)';
  }

  navButtons.forEach((button, index) => {
    button.style.opacity = '0';
    button.style.transform = 'translateX(30px)';
    button.style.transitionDelay = `${index * 0.1}s`;
  });

  if (disclaimer) {
    disclaimer.style.opacity = '0';
  }

  // Animate in sequence
  setTimeout(() => {
    if (avatar) {
      avatar.style.transition = 'all 0.8s ease';
      avatar.style.opacity = '1';
      avatar.style.transform = 'translateY(0)';
    }
  }, 200);

  setTimeout(() => {
    if (brandName) {
      brandName.style.transition = 'all 0.8s ease';
      brandName.style.opacity = '1';
      brandName.style.transform = 'translateY(0)';
    }
  }, 400);

  setTimeout(() => {
    navButtons.forEach((button) => {
      button.style.transition = 'all 0.6s ease';
      button.style.opacity = '1';
      button.style.transform = 'translateX(0)';
    });
  }, 600);

  setTimeout(() => {
    if (disclaimer) {
      disclaimer.style.transition = 'all 0.8s ease';
      disclaimer.style.opacity = '1';
    }
  }, 800);
}

// Typing animation
export function typeWriter(element, text, speed = 100) {
  if (!element) return;
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Animate skill tags with stagger effect
export function animateSkillTags() {
  const skillTags = DOM.getAll('.skill-tag');

  skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';

    setTimeout(() => {
      tag.style.transition = 'all 0.5s ease';
      tag.style.opacity = '1';
      tag.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Animate project cards with stagger effect
export function animateProjectCards() {
  const projectCards = DOM.getAll('.project-card');

  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';

    setTimeout(() => {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150);
  });
}

// Add typing animation for tagline
export function addTypingAnimation() {
  const { tagline } = getMainElements();
  if (tagline) {
    const originalText = tagline.textContent;
    tagline.textContent = '';

    setTimeout(() => {
      typeWriter(tagline, originalText, 100);
    }, 2000);
  }
}
