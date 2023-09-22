import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/app/providers/ThemeProvider';

import App from './app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

const container = document.getElementById('root');

if (!container) {
	throw new Error(
		'Контейнер root не найден. Не удалось вмонтировать React-приложение.',
	);
}

const root = createRoot(container);
root.render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
);
