import React from 'react';

import { Link } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = (props: NavbarProps) => {
	const { className } = props;

	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<ThemeSwitcher />
		</nav>
	);
};
