import { within, expect, fn } from 'storybook/test'
import type { Meta, StoryObj } from '@nuxtjs/storybook'
import TestButton from '../app/components/TestButton.vue'

const meta = {
  title: 'Example/TestButton',
  component: TestButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'click' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TestButton>

export default meta
type Story = StoryObj<typeof meta>

export const Clicked: Story = {
  args: {
    label: 'Click me',
  },
  play: async ({ canvasElement, args, userEvent }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await userEvent.click(button)
    expect(args.onClick).toHaveBeenCalledOnce()

    await userEvent.click(button)
    expect(args.onClick).toHaveBeenCalledTimes(2)
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
  play: async ({ canvasElement, args, userEvent }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    expect(args.onClick).not.toHaveBeenCalled()
  },
}
