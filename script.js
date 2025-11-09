// DOM Elements
const navButtons = document.querySelectorAll('.nav-button');
const contentSections = document.querySelectorAll('.content-section');
const closeButtons = document.querySelectorAll('.close-button');

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
  // Add click event listeners to navigation buttons
  navButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const section = this.getAttribute('data-section');
      if (section) {
        e.preventDefault();
        showContentSection(section);
      }
      // If no data-section, it's a regular link and will navigate normally
    });
  });

  // Add click event listeners to close buttons
  closeButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      hideAllContentSections();
    });
  });

  // Add click event listeners to close content sections when clicking outside
  contentSections.forEach((section) => {
    section.addEventListener('click', function (e) {
      if (e.target === this) {
        hideAllContentSections();
      }
    });
  });

  // Add keyboard support (ESC to close)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hideAllContentSections();
    }
  });

  // Add smooth animations on page load
  animateOnLoad();

  // Add skill tag animations
  animateSkillTags();

  // Add project card stagger animations
  animateProjectCards();

  // Add interactive elements
  addInteractiveElements();

  // Add particle effect
  createParticleEffect();

  // Add mouse trail effect
  addMouseTrail();

  // Add easter eggs
  addEasterEggs();

  // Add sound effects
  addSoundEffects();

  // Add matrix rain effect
  addMatrixRain();

  // Add custom cursor
  addCustomCursor();

  // Add typing animation for tagline
  addTypingAnimation();

  // Add interactive background
  addInteractiveBackground();

  // Add more micro-interactions
  addMicroInteractions();

  // Add text effects
  addTextEffects();

  // Add button morphing
  addButtonMorphing();

  // Add scroll effects
  addScrollEffects();

  // Add keyboard interactions
  addKeyboardInteractions();

  // Start automatic glitch mode: initial after 0.1s, then 1s every 20s
  startAutoGlitch();
});

// Show specific content section
function showContentSection(sectionName) {
  // Hide all content sections first
  hideAllContentSections();

  // Show the requested section
  const targetSection = document.getElementById(`${sectionName}-content`);
  if (targetSection) {
    targetSection.classList.add('active');

    // Add entrance animation
    setTimeout(() => {
      targetSection.style.opacity = '1';
    }, 10);
  }
}

// Hide all content sections
function hideAllContentSections() {
  contentSections.forEach((section) => {
    section.classList.remove('active');
    section.style.opacity = '0';
  });
}

// Animate elements on page load
function animateOnLoad() {
  const avatar = document.querySelector('.avatar');
  const brandName = document.querySelector('.brand-name');
  const navButtons = document.querySelectorAll('.nav-button');
  const disclaimer = document.querySelector('.disclaimer');

  // Set initial states
  avatar.style.opacity = '0';
  avatar.style.transform = 'translateY(30px)';
  brandName.style.opacity = '0';
  brandName.style.transform = 'translateY(30px)';
  navButtons.forEach((button, index) => {
    button.style.opacity = '0';
    button.style.transform = 'translateX(30px)';
    button.style.transitionDelay = `${index * 0.1}s`;
  });
  disclaimer.style.opacity = '0';

  // Animate in sequence
  setTimeout(() => {
    avatar.style.transition = 'all 0.8s ease';
    avatar.style.opacity = '1';
    avatar.style.transform = 'translateY(0)';
  }, 200);

  setTimeout(() => {
    brandName.style.transition = 'all 0.8s ease';
    brandName.style.opacity = '1';
    brandName.style.transform = 'translateY(0)';
  }, 400);

  setTimeout(() => {
    navButtons.forEach((button) => {
      button.style.transition = 'all 0.6s ease';
      button.style.opacity = '1';
      button.style.transform = 'translateX(0)';
    });
  }, 600);

  setTimeout(() => {
    disclaimer.style.transition = 'all 0.8s ease';
    disclaimer.style.opacity = '1';
  }, 800);
}

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function () {
  // Enhanced button hover effects
  const buttons = document.querySelectorAll('.nav-button, .github-button, .contact-link');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-2px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Avatar hover effect
  const avatar = document.querySelector('.avatar');
  if (avatar) {
    avatar.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05) rotate(2deg)';
      this.style.boxShadow = '0 12px 40px rgba(220, 38, 38, 0.3)';
    });

    avatar.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1) rotate(0deg)';
      this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    });
  }
});

// Add smooth scrolling for any internal links
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});

// Add loading animation for external links
document.addEventListener('DOMContentLoaded', function () {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach((link) => {
    link.addEventListener('click', function () {
      // Add a subtle loading effect
      this.style.opacity = '0.7';
      this.style.transform = 'scale(0.98)';

      setTimeout(() => {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });
});

// Add parallax effect to the grid background
document.addEventListener('DOMContentLoaded', function () {
  const gridBackground = document.querySelector('body::before');

  window.addEventListener('mousemove', function (e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    // Subtle parallax effect
    document.body.style.setProperty('--mouse-x', mouseX);
    document.body.style.setProperty('--mouse-y', mouseY);
  });
});

// Add typing effect for the brand name (optional enhancement)
function typeWriter(element, text, speed = 100) {
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
function animateSkillTags() {
  const skillTags = document.querySelectorAll('.skill-tag');

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
function animateProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');

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

// Add intersection observer for scroll animations
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all elements that should animate on scroll
  const animateElements = document.querySelectorAll(
    '.skill-category, .project-card, .about-section'
  );
  animateElements.forEach((el) => observer.observe(el));
}

// Enhanced hover effects for project cards
function addProjectCardEffects() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
  });
}

// Add typing effect for the tagline
function addTypingEffect() {
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    const originalText = tagline.textContent;
    tagline.textContent = '';

    setTimeout(() => {
      typeWriter(tagline, originalText, 80);
    }, 1500);
  }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function () {
  addScrollAnimations();
  addProjectCardEffects();
  addTypingEffect();
});

// Add interactive elements
function addInteractiveElements() {
  // Add click effect to brand name
  const brandName = document.querySelector('.brand-name');
  if (brandName) {
    brandName.addEventListener('click', function () {
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = 'gradientText 3s ease infinite';
      }, 10);
    });
  }

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.nav-button, .contact-link, .project-link');
  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add floating animation to skill tags
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach((tag, index) => {
    tag.addEventListener('mouseenter', function () {
      this.style.animation = `float 2s ease-in-out infinite`;
    });

    tag.addEventListener('mouseleave', function () {
      this.style.animation = 'none';
    });
  });
}

// Create particle effect
function createParticleEffect() {
  const particleContainer = document.createElement('div');
  particleContainer.style.position = 'fixed';
  particleContainer.style.top = '0';
  particleContainer.style.left = '0';
  particleContainer.style.width = '100%';
  particleContainer.style.height = '100%';
  particleContainer.style.pointerEvents = 'none';
  particleContainer.style.zIndex = '-1';
  document.body.appendChild(particleContainer);

  function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#007acc';
    particle.style.borderRadius = '50%';
    particle.style.opacity = '0.6';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.animation = `floatUp ${3 + Math.random() * 4}s linear forwards`;

    particleContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 7000);
  }

  // Add CSS for particle animation
  const style = document.createElement('style');
  style.textContent = `
        @keyframes floatUp {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 122, 204, 0.3);
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
            pointer-events: none;
        }
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);

  // Create particles periodically
  setInterval(createParticle, 2000);
}

// Add mouse trail effect with falling particles
function addMouseTrail() {
  // Particle class for managing individual particles
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 1; // Random size between 1-4
      this.speedY = Math.random() * 1 + 0.5; // Random fall speed
      this.speedX = (Math.random() - 0.5) * 0.5; // Slight horizontal movement
      this.opacity = 1;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.opacity -= 0.01;
    }

    draw(ctx) {
      ctx.fillStyle = `rgba(0, 122, 204, ${this.opacity})`; // Blue color (#007acc)
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);

  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1000';

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let particles = [];
  let mouseX = 0;
  let mouseY = 0;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Create new particles at mouse position
    if (Math.random() > 0.5) {
      // Reduce particle creation rate
      particles.push(new Particle(mouseX, mouseY));
    }
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles = particles.filter((particle) => {
      particle.update();
      particle.draw(ctx);
      return (
        particle.opacity > 0 &&
        particle.y < canvas.height &&
        particle.x > 0 &&
        particle.x < canvas.width
      );
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Easter Eggs
function addEasterEggs() {
  let clickCount = 0;
  const avatar = document.querySelector('.avatar');
  const brandName = document.querySelector('.brand-name');

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
  avatar.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 5) {
      activateAvatarEasterEgg();
      clickCount = 0;
    }
  });

  // Brand name secret
  brandName.addEventListener('dblclick', function () {
    activateBrandEasterEgg();
  });
}

function activateKonamiCode() {
  const body = document.body;
  body.style.animation = 'rainbow 2s ease infinite';

  // Add rainbow animation
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

function activateAvatarEasterEgg() {
  const avatar = document.querySelector('.avatar');
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

function activateBrandEasterEgg() {
  const brandName = document.querySelector('.brand-name');
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

// Auto Glitch Mode
function triggerGlitch(durationMs = 1000) {
  const brandName = document.querySelector('.brand-name');
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

function startAutoGlitch() {
  // Initial trigger after 0.1s
  setTimeout(() => triggerGlitch(1000), 100);
  // Repeat every 20s
  setInterval(() => triggerGlitch(1000), 20000);
}

// Sound Effects
function addSoundEffects() {
  const buttons = document.querySelectorAll('.nav-button');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      playSound('click');
    });

    button.addEventListener('mouseenter', function () {
      playSound('hover');
    });
  });
}

function playSound(type) {
  // Create audio context for sound effects
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  if (type === 'click') {
    // Click sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } else if (type === 'hover') {
    // Hover sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
  }
}

// Matrix Rain Effect
function addMatrixRain() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  canvas.style.opacity = '0.1';

  document.body.appendChild(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
  const matrixArray = matrix.split('');

  const font_size = 10;
  const columns = canvas.width / font_size;

  const drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#007acc';
    ctx.font = font_size + 'px arial';

    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 35);

  // Resize handler
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Custom Cursor
function addCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const trail = document.createElement('div');
  trail.className = 'custom-cursor-trail';
  document.body.appendChild(trail);

  let mouseX = 0,
    mouseY = 0;
  let trailX = 0,
    trailY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX - 10 + 'px';
    cursor.style.top = mouseY - 10 + 'px';
  });

  // Smooth trail following
  function animateTrail() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;

    trail.style.left = trailX - 4 + 'px';
    trail.style.top = trailY - 4 + 'px';

    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Hover effects
  const interactiveElements = document.querySelectorAll('a, button, .avatar, .brand-name');

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      cursor.style.background =
        'radial-gradient(circle, rgba(255, 107, 107, 0.8) 0%, rgba(255, 107, 107, 0.4) 50%, transparent 100%)';
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background =
        'radial-gradient(circle, rgba(0, 122, 204, 0.8) 0%, rgba(0, 122, 204, 0.4) 50%, transparent 100%)';
    });
  });
}

// Typing Animation for Tagline
function addTypingAnimation() {
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    const originalText = tagline.textContent;
    tagline.textContent = '';

    setTimeout(() => {
      typeWriter(tagline, originalText, 100);
    }, 2000);
  }
}

// Interactive Background
function addInteractiveBackground() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-2';
  canvas.style.opacity = '0.3';

  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.size = Math.random() * 3 + 1;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 122, 204, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    particles.forEach((particle, i) => {
      particles.slice(i + 1).forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(0, 122, 204, ${0.1 * (1 - distance / 100)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Notification System
function showNotification(message) {
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

// Micro-Interactions
function addMicroInteractions() {
  // Add magnetic effect to buttons
  const buttons = document.querySelectorAll('.nav-button');

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

  // Add tilt effect to avatar
  const avatar = document.querySelector('.avatar');
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

  // Add ripple effect to all clickable elements
  const clickableElements = document.querySelectorAll('a, button, .avatar, .brand-name');

  clickableElements.forEach((element) => {
    element.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
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

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
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

// Text Effects
function addTextEffects() {
  const brandName = document.querySelector('.brand-name');
  const tagline = document.querySelector('.tagline');
  const aboutText = document.querySelector('.about-text');

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

  // Add typewriter effect to about text
  if (aboutText) {
    const originalText = aboutText.textContent;
    aboutText.textContent = '';

    setTimeout(() => {
      typeWriter(aboutText, originalText, 50);
    }, 3000);
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

// Button Morphing
function addButtonMorphing() {
  const buttons = document.querySelectorAll('.nav-button');

  buttons.forEach((button) => {
    // Add loading state
    button.addEventListener('click', function (e) {
      if (this.href && !this.href.includes('#')) {
        e.preventDefault();

        const originalText = this.textContent;
        this.innerHTML = '<span style="animation: spin 1s linear infinite;">⟳</span>';
        this.style.pointerEvents = 'none';

        setTimeout(() => {
          window.location.href = this.href;
        }, 1000);
      }
    });

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

// Scroll Effects
function addScrollEffects() {
  let ticking = false;

  function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;

    // Parallax effect on background
    document.body.style.setProperty('--scroll', `${parallax}px`);

    // Scale effect on avatar based on scroll
    const avatar = document.querySelector('.avatar');
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

// Keyboard Interactions
function addKeyboardInteractions() {
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

// Uncomment the following lines if you want a typing effect for the brand name
// document.addEventListener('DOMContentLoaded', function() {
//     const brandName = document.querySelector('.brand-name');
//     if (brandName) {
//         const originalText = brandName.textContent;
//         setTimeout(() => {
//             typeWriter(brandName, originalText, 150);
//         }, 1000);
//     }
// });
