import React from 'react';

import { AppRouter } from '@/app/providers/router';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';

import './styles/index.scss';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={`app ${theme} `}>
			<Navbar />
			<AppRouter />
		</div>
	);
};

export default App;
