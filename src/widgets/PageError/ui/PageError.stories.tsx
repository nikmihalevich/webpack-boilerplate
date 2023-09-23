import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { PageError } from './PageError';

const meta = {
	title: 'widgets/PageError',
	component: PageError,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
export const Light: Story = {
	decorators: [ThemeDecorator('app_light_theme')],
};
