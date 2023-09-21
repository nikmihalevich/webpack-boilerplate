import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import './styles/index.scss'
import {Navbar} from "components/Navbar";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={`app ${theme} `}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;