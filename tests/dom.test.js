import { describe, it, expect, beforeEach } from 'vitest';
import { DOM, getNavElements, getMainElements } from '../assets/js/modules/dom.js';

describe('DOM Module', () => {
  beforeEach(() => {
    // Setup basic HTML structure
    document.body.innerHTML = `
      <div class="container">
        <div class="avatar">Avatar</div>
        <h1 class="brand-name">ZaneDev</h1>
        <p class="tagline">Tagline</p>
        <nav class="navigation">
          <a href="#" class="nav-button">Button 1</a>
          <a href="#" class="nav-button">Button 2</a>
        </nav>
      </div>
    `;
  });

  describe('DOM utility', () => {
    it('should cache and retrieve elements', () => {
      const avatar = DOM.get('.avatar');
      expect(avatar).toBeTruthy();
      expect(avatar.textContent).toBe('Avatar');

      // Should return cached version on second call
      const avatarAgain = DOM.get('.avatar');
      expect(avatarAgain).toBe(avatar);
    });

    it('should get all elements matching selector', () => {
      const buttons = DOM.getAll('.nav-button');
      expect(buttons).toHaveLength(2);
    });

    it('should clear cache', () => {
      DOM.get('.avatar');
      expect(Object.keys(DOM.cache).length).toBeGreaterThan(0);

      DOM.clearCache();
      expect(Object.keys(DOM.cache).length).toBe(0);
    });
  });

  describe('getMainElements', () => {
    it('should return main UI elements', () => {
      const elements = getMainElements();

      expect(elements.avatar).toBeTruthy();
      expect(elements.brandName).toBeTruthy();
      expect(elements.tagline).toBeTruthy();
    });
  });

  describe('getNavElements', () => {
    it('should return navigation elements', () => {
      // Add required elements for navigation
      document.body.innerHTML += `
        <div class="content-section"></div>
        <button class="close-button">Close</button>
      `;

      const elements = getNavElements();

      expect(elements.navButtons).toBeTruthy();
      expect(elements.navButtons.length).toBeGreaterThan(0);
    });
  });
});
