import { useContext } from 'react';

import { Theme } from '@/shared/const/theme';

import { ThemeContext } from './ThemeContext';

interface UseThemeResult {
	/**
	 * For more than two themes
	 */
	// toggleTheme: (saveAction?: (theme: Theme) => void) => void;
	toggleTheme: () => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	/**
	 * For more than two themes
	 */
	// const toggleTheme = (saveAction?: (theme: Theme) => void) => {
	//     let newTheme: Theme;
	//
	//
	//     switch (theme) {
	//         case 'app_dark_theme':
	//             newTheme = 'app_light_theme';
	//             break;
	//         case 'app_light_theme':
	//             newTheme = 'app_dark_theme';
	//             break;
	//         default:
	//             newTheme = 'app_light_theme';
	//             break;
	//     }
	//
	//     setTheme?.(newTheme);
	//
	//     saveAction?.(newTheme);
	// };

	const toggleTheme = () => {
		setTheme(
			theme === 'app_light_theme' ? 'app_dark_theme' : 'app_light_theme',
		);
	};

	return {
		theme: theme || 'app_light_theme',
		toggleTheme,
	};
}
