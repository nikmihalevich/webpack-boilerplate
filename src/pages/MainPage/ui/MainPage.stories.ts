import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import MainPage from './MainPage';

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
export const Light: Story = {
	decorators: [ThemeDecorator('app_light_theme')],
};
