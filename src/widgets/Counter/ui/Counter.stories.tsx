import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Counter } from './Counter';

const meta = {
	title: 'widgets/Counter',
	component: Counter,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
export const Light: Story = {
	decorators: [ThemeDecorator('app_light_theme')],
};
