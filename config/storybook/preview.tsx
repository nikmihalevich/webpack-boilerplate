import type { Preview } from '@storybook/react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
	decorators: [
		StyleDecorator,
		ThemeDecorator('app_dark_theme'),
		RouterDecorator,
	],
};

export default preview;
