import { defineConfig } from 'vitest/config'
import {storybookTest} from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [storybookTest({configDir: '.storybook'})],
  test: {
    name: 'storybook',
    root: fileURLToPath(new URL('app', import.meta.url)),
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [
        { browser: 'chromium' },
      ],
    },
    setupFiles: [fileURLToPath(new URL('.storybook/vitest.setup.ts', import.meta.url))],
  }
})
