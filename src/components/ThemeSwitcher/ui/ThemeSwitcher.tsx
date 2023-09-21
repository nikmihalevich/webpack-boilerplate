import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import ThemeIcon from 'shared/assets/icons/theme.svg'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;

    const {toggleTheme} = useTheme()

    return (
            <button
                className={classNames(cls.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}
            >
                <ThemeIcon />
            </button>
    );
};