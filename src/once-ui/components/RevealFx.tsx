'use client';

import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { SpacingToken } from '../types';
import styles from './RevealFx.module.scss';
import { Flex } from '.';

interface RevealFxProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	speed?: 'slow' | 'medium' | 'fast';
	delay?: number;
	revealedByDefault?: boolean;
	translateY?: number | SpacingToken;
	style?: React.CSSProperties;
	className?: string;
}

const RevealFx = forwardRef<HTMLDivElement, RevealFxProps>(({
	children,
	speed = 'medium',
	delay = 0,
	revealedByDefault = false,
	translateY,
	style,
	className,
	...rest
}, ref) => {
	const [isRevealed, setIsRevealed] = useState(revealedByDefault);
	const elementRef = useRef<HTMLDivElement | null>(null);

	const handleScroll = () => {
		if (!elementRef.current) return;

		const rect = elementRef.current.getBoundingClientRect();
		const windowHeight = window.innerHeight;

		// Trigger reveal when the element is 20% visible in the viewport
		if (rect.top < windowHeight * 0.8) {
			setIsRevealed(true);
		} else {
			setIsRevealed(false);
		}
	};

	useEffect(() => {
		if (revealedByDefault) return;

		// Attach scroll event listener
		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Trigger on mount to check visibility

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [revealedByDefault]);

	const getSpeedDuration = () => {
		switch (speed) {
			case 'fast':
				return '1s';
			case 'medium':
				return '2s';
			case 'slow':
				return '3s';
			default:
				return '2s';
		}
	};

	const getTranslateYValue = () => {
		if (typeof translateY === 'number') {
			return `${translateY}rem`;
		} else if (typeof translateY === 'string') {
			return `var(--static-space-${translateY})`;
		}
		return undefined;
	};

	const translateValue = getTranslateYValue();

	const combinedClassName = `${styles.revealFx} ${isRevealed ? styles.revealed : styles.hidden} ${className || ''}`;

	const revealStyle: React.CSSProperties = {
		transitionDuration: getSpeedDuration(),
		transform: isRevealed ? 'translateY(0)' : `translateY(${translateValue})`,
		...style,
	};

	return (
		<Flex
			fillWidth
			justifyContent="center"
			ref={(node) => {
				elementRef.current = node;
				if (typeof ref === 'function') ref(node);
				else if (ref) ref.current = node;
			}}
			aria-hidden={!isRevealed}
			style={revealStyle}
			className={combinedClassName}
			{...rest}>
			{children}
		</Flex>
	);
});

RevealFx.displayName = 'RevealFx';
export { RevealFx };
