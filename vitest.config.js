import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use JSDOM for DOM-based testing
    globals: true,        // Use Vitest's global test functions (like `test`, `expect`)
  },
});
