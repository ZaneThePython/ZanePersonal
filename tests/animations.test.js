import { describe, it, expect, beforeEach, vi } from 'vitest';
import { typeWriter } from '../assets/js/modules/animations.js';

describe('Animations Module', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  describe('typeWriter', () => {
    it('should type text character by character', async () => {
      const element = document.createElement('div');
      document.body.appendChild(element);

      const text = 'Hello';
      typeWriter(element, text, 50);

      // Wait for first setTimeout to execute
      await vi.runAllTimersAsync();

      // Complete text should be shown
      expect(element.innerHTML).toBe('Hello');
    });

    it('should handle null element gracefully', () => {
      expect(() => {
        typeWriter(null, 'text', 50);
      }).not.toThrow();
    });

    it('should handle empty text', () => {
      const element = document.createElement('div');
      document.body.appendChild(element);

      typeWriter(element, '', 50);
      vi.advanceTimersByTime(100);

      expect(element.innerHTML).toBe('');
    });
  });
});
