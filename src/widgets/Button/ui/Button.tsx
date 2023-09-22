import {
	type ButtonHTMLAttributes,
	ForwardedRef,
	forwardRef,
	ReactNode,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	/**
	 * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
	 */
	variant?: ButtonVariant;
	/**
	 * Флаг, делающий кнопку квадратной
	 */
	square?: boolean;
	/**
	 * Размер кнопки в соответствии с дизайн системой
	 */
	size?: ButtonSize;
	/**
	 * Флаг, отвечающий за работу кнопки
	 */
	disabled?: boolean;
	/**
	 * Содержимое кнопки
	 */
	children?: ReactNode;
	/**
	 * Увеличивает кнопку на всю свободную ширину
	 */
	fullWidth?: boolean;
	/**
	 * Аддон для левой стороны кнопки (иконка, и тд)
	 */
	addonLeft?: ReactNode;
	/**
	 * Аддон для правой стороны кнопки (иконка, и тд)
	 */
	addonRight?: ReactNode;
	/**
	 * Цвет кнопки
	 */
	color?: ButtonColor;
}

export const Button = forwardRef(
	(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
		const {
			className,
			children,
			variant = 'outline',
			square,
			disabled,
			size = 'm',
			fullWidth,
			addonLeft,
			addonRight,
			color = 'normal',
			...otherProps
		} = props;

		const mods: Mods = {
			[cls.square]: square,
			[cls.disabled]: disabled,
			[cls.fullWidth]: fullWidth,
			[cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
		};

		return (
			<button
				type="button"
				className={classNames(cls.Button, mods, [
					className,
					cls[variant],
					cls[size],
					cls[color],
				])}
				disabled={disabled}
				{...otherProps}
				ref={ref}
			>
				{addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
				{children}
				{addonRight && (
					<div className={cls.addonRight}>{addonRight}</div>
				)}
			</button>
		);
	},
);
