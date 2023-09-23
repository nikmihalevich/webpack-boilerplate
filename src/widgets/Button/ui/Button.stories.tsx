import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button } from './Button';

const meta = {
	title: 'widgets/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		children: 'Click me!',
	},
};
export const Light: Story = {
	args: {
		children: 'Click me!',
	},
	decorators: [ThemeDecorator('app_light_theme')],
};
