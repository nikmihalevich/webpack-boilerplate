export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',

	// last
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
	[getRouteMain()]: AppRoutes.MAIN,
	[getRouteAbout()]: AppRoutes.ABOUT,
};
