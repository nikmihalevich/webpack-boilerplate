import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Page } from './Page';

const meta = {
	title: 'widgets/Page',
	component: Page,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		children: <div>Content of page</div>,
	},
};
export const Light: Story = {
	args: {
		children: <div>Content of page</div>,
	},
	decorators: [ThemeDecorator('app_light_theme')],
};
