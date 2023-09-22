import React, {memo, Suspense, useCallback} from 'react';

import {routeConfig} from "app/providers/router/config/routeConfig";
import {Route, Routes} from "react-router-dom";
import {AppRoutesProps} from "shared/types/router";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback="Loading...">{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);