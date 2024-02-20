'use client';
import { useEffect, useState } from 'react';
import estilos from '../estilos.module.css';

export const Footer = () => {
	const [content, setContent] = useState('');

	useEffect(() => {
		const isOnline = window.navigator.onLine;
		setContent(isOnline ? '' : 'Error 404, no hay conexión a internet');
	}, []);

	return <footer className={estilos.Header}>{content}</footer>;
};
