function setFooterYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
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
    } catch {
      button.textContent = email;
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
    'Building odd but useful things',
    'Shipping static-first experiments',
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % lines.length;
    tagline.textContent = lines[index];
  }, 3800);
}

function initializeApp() {
  setFooterYear();
  initStats();
  updateLocalTime();
  initCopyEmail();
  initRevealAnimations();
  initTaglineRotation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
