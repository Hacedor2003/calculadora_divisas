'use client';
import { useContext } from 'react';
import { Card } from '../UI/Card';
import estilos from '../estilos.module.css';
import { ContextData } from '../store/ContextProvider';

export default function Page() {
	const moneda = useContext(ContextData);

	return (
		<>
			<header className={estilos.Header}>Tasa de Cambio Informal</header>
			<section id='container_informal'>
				<Card
					dinero={moneda?.cup.usd}
					image='/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero={moneda?.cup.euro}
					image='/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero={moneda?.cup.mlc}
					image='/mlc.png'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
