'use client';
import { useContext, useEffect, useState } from 'react';
import { ContextData } from '../store/ContextProvider';
import estilos from '../estilos.module.css';

export const Footer = () => {
	const moneda = useContext(ContextData);
	const [content, setcontent] = useState('');

	useEffect(() => {
		if (moneda?.status === 'Network Error' || moneda === undefined) {
			setcontent('Error 404 , no internet');
		} else {
			setcontent('');
		}
	}, [moneda]);

	return <footer className={estilos.Header}>{content}</footer>;
};
