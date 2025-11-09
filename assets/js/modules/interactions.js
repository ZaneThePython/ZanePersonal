// Interactive UI elements and micro-interactions
import { DOM, getMainElements } from './dom.js';

// Add ripple effect
function createRipple(element, e) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(0, 122, 204, 0.3)';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'ripple 0.6s linear';
  ripple.style.pointerEvents = 'none';

  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add micro-interactions
export function addMicroInteractions() {
  const buttons = DOM.getAll('.nav-button');

  // Magnetic effect to buttons
  buttons.forEach((button) => {
    button.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });

    button.addEventListener('mouseleave', function () {
      this.style.transform = 'translate(0, 0) scale(1)';
    });
  });

  // Tilt effect to avatar
  const { avatar } = getMainElements();
  if (avatar) {
    avatar.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (y / rect.height) * 20;
      const rotateY = (x / rect.width) * -20;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    avatar.addEventListener('mouseleave', function () {
      this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }

  // Ripple effect to all clickable elements
  const clickableElements = DOM.getAll('a, button, .avatar, .brand-name');

  clickableElements.forEach((element) => {
    element.addEventListener('click', function (e) {
      createRipple(this, e);
    });
  });

  // Add CSS for ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Add text effects
export function addTextEffects() {
  const { brandName, tagline } = getMainElements();

  // Add letter-by-letter animation to brand name
  if (brandName) {
    const text = brandName.textContent;
    brandName.innerHTML = '';

    text.split('').forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.display = 'inline-block';
      span.style.animation = `letterBounce 0.6s ease forwards`;
      span.style.animationDelay = `${index * 0.1}s`;
      span.style.opacity = '0';
      brandName.appendChild(span);
    });
  }

  // Add hover effect to tagline
  if (tagline) {
    tagline.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1) rotate(1deg)';
      this.style.textShadow = '0 0 20px rgba(0, 122, 204, 0.8)';
    });

    tagline.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1) rotate(0deg)';
      this.style.textShadow = 'none';
    });
  }

  // Add CSS for letter animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes letterBounce {
      0% {
        opacity: 0;
        transform: translateY(20px) rotate(10deg);
      }
      50% {
        transform: translateY(-10px) rotate(-5deg);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotate(0deg);
      }
    }
  `;
  document.head.appendChild(style);
}

// Add scroll effects
export function addScrollEffects() {
  let ticking = false;

  function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;

    document.body.style.setProperty('--scroll', `${parallax}px`);

    const { avatar } = getMainElements();
    if (avatar) {
      const scale = Math.max(0.8, 1 - scrolled * 0.001);
      avatar.style.transform = `scale(${scale})`;
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);
}

// Button morphing effects
export function addButtonMorphing() {
  const buttons = DOM.getAll('.nav-button');

  buttons.forEach((button) => {
    // Add pulse effect on focus
    button.addEventListener('focus', function () {
      this.style.animation = 'pulse 1s ease-in-out infinite';
    });

    button.addEventListener('blur', function () {
      this.style.animation = '';
    });
  });

  // Add CSS for button effects
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `;
  document.head.appendChild(style);
}
