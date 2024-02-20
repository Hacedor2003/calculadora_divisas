'use client';
import { useContext, useEffect, useState } from 'react';
import { ContextData } from '../store/ContextProvider';
import estilos from '../estilos.module.css';

export const Footer = () => {
	const moneda = useContext(ContextData);
	const [content, setContent] = useState('');

	useEffect(() => {
		const isOnline = window.navigator.onLine;
		setContent(isOnline ? '' : 'Error 404, no hay conexión a internet');
	}, []);

	return <footer className={estilos.Header}>{content}</footer>;
};
