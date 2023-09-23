import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import AboutPage from './AboutPage';

const meta = {
	title: 'pages/AboutPage',
	component: AboutPage,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
export const Light: Story = {
	decorators: [ThemeDecorator('app_light_theme')],
};
