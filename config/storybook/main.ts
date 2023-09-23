import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';
import { DefinePlugin, Configuration } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
	stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		{
			name: '',
			options: {
				sass: {
					// Require your Sass preprocessor here
					// eslint-disable-next-line global-require
					implementation: require('sass'),
				},
			},
		},
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config: Configuration) => {
		const paths = {
			build: '',
			html: '',
			entry: '',
			src: path.resolve(__dirname, '..', '..', 'src'),
			locales: '',
			buildLocales: '',
		};
		config!.resolve!.modules!.push(paths.src);
		config!.resolve!.extensions!.push('.ts', '.tsx');
		// eslint-disable-next-line no-param-reassign
		config!.resolve!.alias = {
			...config!.resolve!.alias,
			'@': paths.src,
		};

		// @ts-ignore
		// eslint-disable-next-line no-param-reassign
		config!.module!.rules = config!.module!.rules!.map(
			// @ts-ignore
			(rule: RuleSetRule) => {
				if (/svg/.test(rule.test as string)) {
					return { ...rule, exclude: /\.svg$/i };
				}

				return rule;
			},
		);

		config!.module!.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		config!.module!.rules.push(buildCssLoader(true));

		config!.plugins!.push(
			new DefinePlugin({
				__IS_DEV__: JSON.stringify(true),
				__API__: JSON.stringify('https://testapi.ru'),
				__PROJECT__: JSON.stringify('storybook'),
			}),
		);

		return config;
	},
};
export default config;
