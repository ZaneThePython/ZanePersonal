// Easter eggs and interactive features
import { getMainElements } from './dom.js';

// Show notification
export function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.background = 'linear-gradient(135deg, #007acc, #00aaff)';
  notification.style.color = 'white';
  notification.style.padding = '1rem 2rem';
  notification.style.borderRadius = '10px';
  notification.style.boxShadow = '0 10px 30px rgba(0, 122, 204, 0.3)';
  notification.style.zIndex = '10000';
  notification.style.transform = 'translateX(100%)';
  notification.style.transition = 'transform 0.3s ease';
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Konami Code activation
function activateKonamiCode() {
  const body = document.body;
  body.style.animation = 'rainbow 2s ease infinite';

  const style = document.createElement('style');
  style.textContent = `
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    body.style.animation = '';
    style.remove();
  }, 5000);

  showNotification('🎉 Konami Code Activated! You found the secret!');
}

// Avatar Easter Egg
function activateAvatarEasterEgg() {
  const { avatar } = getMainElements();
  if (!avatar) return;

  avatar.style.animation = 'spin 1s linear infinite, bounce 0.5s ease infinite';

  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    avatar.style.animation = '';
    style.remove();
  }, 3000);

  showNotification('🔄 Avatar Spin Mode Activated!');
}

// Brand Easter Egg
function activateBrandEasterEgg() {
  const { brandName } = getMainElements();
  if (!brandName) return;

  const originalText = brandName.textContent;
  const glitchTexts = ['Z4n3D3v', 'Z@n3D3v', 'ZaneDev', 'ZANE_DEV', 'zanedev'];
  let glitchIndex = 0;

  const glitchInterval = setInterval(() => {
    brandName.textContent = glitchTexts[glitchIndex];
    glitchIndex = (glitchIndex + 1) % glitchTexts.length;
  }, 100);

  setTimeout(() => {
    clearInterval(glitchInterval);
    brandName.textContent = originalText;
  }, 2000);

  showNotification('⚡ Glitch Mode Activated!');
}

// Trigger glitch effect
export function triggerGlitch(durationMs = 1000) {
  const { brandName } = getMainElements();
  if (!brandName) return;

  const originalText = brandName.textContent;
  const glitchTexts = ['Z4n3D3v', 'Z@n3D3v', 'ZaneDev', 'ZANE_DEV', 'zanedev'];
  let glitchIndex = 0;

  const glitchInterval = setInterval(() => {
    brandName.textContent = glitchTexts[glitchIndex];
    glitchIndex = (glitchIndex + 1) % glitchTexts.length;
  }, 100);

  setTimeout(() => {
    clearInterval(glitchInterval);
    brandName.textContent = originalText;
  }, durationMs);
}

// Auto Glitch Mode
export function startAutoGlitch() {
  setTimeout(() => triggerGlitch(1000), 100);
  setInterval(() => triggerGlitch(1000), 20000);
}

// Add all Easter eggs
export function addEasterEggs() {
  let clickCount = 0;
  const { avatar, brandName } = getMainElements();

  // Konami Code
  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let konamiIndex = 0;

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateKonamiCode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  // Avatar click counter
  if (avatar) {
    avatar.addEventListener('click', function () {
      clickCount++;
      if (clickCount === 5) {
        activateAvatarEasterEgg();
        clickCount = 0;
      }
    });
  }

  // Brand name secret
  if (brandName) {
    brandName.addEventListener('dblclick', function () {
      activateBrandEasterEgg();
    });
  }
}

// Secret "ZANE" sequence
function activateSecretMode() {
  const body = document.body;
  body.style.animation = 'rainbow 1s ease infinite';

  const style = document.createElement('style');
  style.textContent = `
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    body.style.animation = '';
    style.remove();
  }, 3000);

  showNotification('🎉 Secret "ZANE" sequence activated!');
}

// Keyboard Interactions
export function addKeyboardInteractions() {
  let keySequence = [];
  const secretKeys = ['z', 'a', 'n', 'e'];

  document.addEventListener('keydown', function (e) {
    keySequence.push(e.key.toLowerCase());
    if (keySequence.length > secretKeys.length) {
      keySequence.shift();
    }

    // Check for secret sequence
    if (keySequence.join('') === secretKeys.join('')) {
      activateSecretMode();
      keySequence = [];
    }

    // Add visual feedback for key presses
    const keyElement = document.createElement('div');
    keyElement.textContent = e.key.toUpperCase();
    keyElement.style.position = 'fixed';
    keyElement.style.left = Math.random() * window.innerWidth + 'px';
    keyElement.style.top = Math.random() * window.innerHeight + 'px';
    keyElement.style.color = '#007acc';
    keyElement.style.fontSize = '2rem';
    keyElement.style.fontWeight = 'bold';
    keyElement.style.pointerEvents = 'none';
    keyElement.style.zIndex = '10000';
    keyElement.style.animation = 'keyPress 1s ease-out forwards';

    document.body.appendChild(keyElement);

    setTimeout(() => {
      keyElement.remove();
    }, 1000);
  });

  // Add CSS for key press animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes keyPress {
      0% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
      100% {
        opacity: 0;
        transform: scale(0.5) translateY(-50px);
      }
    }
  `;
  document.head.appendChild(style);
}
