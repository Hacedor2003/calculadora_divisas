'use client';
import { useContext, useEffect } from 'react';
import { Card } from '../UI/Card';
import estilos from '../estilos.module.css';
import { ContextData } from '../store/ContextProvider';

export default function Page() {
	const moneda = useContext(ContextData);

	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js').then((registration) => console.log('scope is: ', registration.scope));
		}
	}, []);

	return (
		<>
			<header className={estilos.Header}>Tasa de Cambio Informal</header>
			<section id='container_informal'>
				<Card
					dinero={moneda?.cup.usd}
					image='/usd.webp'
					moneda='USD'
					mostrar={true}
				/>
				<Card
					dinero={moneda?.cup.euro}
					image='/euro.webp'
					moneda='EURO'
					mostrar={true}
				/>
				<Card
					dinero={moneda?.cup.mlc}
					image='/mlc.webp'
					moneda='MLC'
					mostrar={true}
				/>
			</section>
		</>
	);
}
