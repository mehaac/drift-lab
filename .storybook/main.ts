import type { StorybookConfig } from '@storybook-vue/nuxt'

const config = {
  stories: ['../app/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-vitest'],
  framework: '@storybook-vue/nuxt',
} satisfies StorybookConfig

export default config
