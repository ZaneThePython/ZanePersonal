// DOM utility functions and element caching
export const DOM = {
  // Cache frequently accessed elements
  cache: {},

  // Get and cache element
  get(selector) {
    if (!this.cache[selector]) {
      this.cache[selector] = document.querySelector(selector);
    }
    return this.cache[selector];
  },

  // Get all and cache elements
  getAll(selector) {
    if (!this.cache[selector]) {
      this.cache[selector] = document.querySelectorAll(selector);
    }
    return this.cache[selector];
  },

  // Clear cache
  clearCache() {
    this.cache = {};
  },
};

// Navigation elements
export const getNavElements = () => ({
  navButtons: DOM.getAll('.nav-button'),
  contentSections: DOM.getAll('.content-section'),
  closeButtons: DOM.getAll('.close-button'),
});

// Main UI elements
export const getMainElements = () => ({
  avatar: DOM.get('.avatar'),
  brandName: DOM.get('.brand-name'),
  tagline: DOM.get('.tagline'),
  aboutText: DOM.get('.about-text'),
  disclaimer: DOM.get('.disclaimer'),
});
