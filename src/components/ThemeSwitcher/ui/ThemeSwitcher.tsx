import React from 'react';

import {useTheme} from "app/providers/ThemeProvider";
import ThemeIcon from 'shared/assets/icons/theme.svg'
import {classNames} from "shared/lib/classNames/classNames";

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;

    const {toggleTheme} = useTheme()

    return (
            <button
                type="button"
                className={classNames(cls.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}
            >
                <ThemeIcon />
            </button>
    );
};