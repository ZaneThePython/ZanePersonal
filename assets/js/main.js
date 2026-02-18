function setFooterYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 1500);
}

function animateCount(elementId, target, duration = 1200) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = 0;
  const startTime = performance.now();

  function updateCount(timeNow) {
    const elapsed = timeNow - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(start + (target - start) * progress);
    element.textContent = String(value);

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    }
  }

  requestAnimationFrame(updateCount);
}

function initStats() {
  animateCount('years-coding', 6);
  animateCount('projects-shipped', 40);
}

function updateLocalTime() {
  const timeElement = document.getElementById('local-time');
  if (!timeElement) return;

  const formatter = new Intl.DateTimeFormat([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const setTime = () => {
    timeElement.textContent = formatter.format(new Date());
  };

  setTime();
  setInterval(setTime, 1000);
}

function initCopyEmail() {
  const button = document.getElementById('copy-email');
  if (!button) return;

  const originalText = button.textContent;

  button.addEventListener('click', async () => {
    const email = button.getAttribute('data-email');
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      button.textContent = 'Copied ✅';
      showToast('Email copied to clipboard');
    } catch {
      button.textContent = email;
      showToast('Copy unavailable, showing email instead');
    }

    setTimeout(() => {
      button.textContent = originalText;
    }, 1400);
  });
}

function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((card) => card.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  reveals.forEach((card) => observer.observe(card));
}

function initTaglineRotation() {
  const tagline = document.getElementById('tagline');
  if (!tagline) return;

  const lines = [
    'Certified Epik Guy',
    'Builder of weirdly useful tools',
    'Shipping static-first experiments',
    'Professional random stuff creator',
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % lines.length;
    tagline.textContent = lines[index];
  }, 3200);
}

function launchPixelBurst() {
  const colors = ['#53b6ff', '#9a7fff', '#53d28c', '#ffce5b'];

  for (let index = 0; index < 26; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.left = `${Math.random() * window.innerWidth}px`;
    pixel.style.bottom = `${40 + Math.random() * 80}px`;
    pixel.style.background = colors[index % colors.length];
    pixel.style.animationDelay = `${Math.random() * 180}ms`;
    document.body.appendChild(pixel);

    setTimeout(() => {
      pixel.remove();
    }, 1000);
  }
}

function initEpikMode() {
  const epikButton = document.getElementById('epik-mode');
  if (!epikButton) return;

  epikButton.addEventListener('click', () => {
    const active = document.body.classList.toggle('epik-mode');
    launchPixelBurst();
    showToast(active ? 'Epik mode activated ⚡' : 'Epik mode disengaged');
  });
}

function initTerminalFeed() {
  const terminal = document.getElementById('terminal-line');
  if (!terminal) return;

  const lines = [
    'booting zane-core...',
    'compiling questionable ideas into useful tools',
    'optimizing static deploy for cloudflare pages',
    'shipping feature: "make it epik"',
    'status: all systems slightly chaotic and online',
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % lines.length;
    terminal.textContent = lines[index];
  }, 2800);
}

function initSecretSequence() {
  const brand = document.querySelector('.brand-name');
  if (!brand) return;

  let keys = '';

  document.addEventListener('keydown', (event) => {
    keys += event.key.toLowerCase();
    if (keys.length > 4) {
      keys = keys.slice(-4);
    }

    if (keys === 'epik') {
      brand.classList.add('glitch');
      launchPixelBurst();
      showToast('secret unlocked: ultra epik');
      setTimeout(() => {
        brand.classList.remove('glitch');
      }, 1700);
      keys = '';
    }
  });
}

function initializeApp() {
  setFooterYear();
  initStats();
  updateLocalTime();
  initCopyEmail();
  initRevealAnimations();
  initTaglineRotation();
  initEpikMode();
  initTerminalFeed();
  initSecretSequence();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
