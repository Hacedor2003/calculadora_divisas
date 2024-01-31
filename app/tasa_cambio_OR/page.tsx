'use client';
import { useContext } from 'react';
import { Card } from '../UI/Card';
import estilos from '../estilos.module.css';
import { ContextData } from '../Components/ContextProvider';

export default function Page() {
	const moneda = useContext(ContextData);

	return (
		<>
			<header className={estilos.Header}>Tasa de Oculus Reparo</header>
			<section>
				<Card
					dinero={moneda ? (moneda.usd + 10).toFixed(2) : 'Cargando'}
					image='/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero={moneda ? (moneda.euro + 10).toFixed(2) : 'Cargando'}
					image='/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero={moneda ? (moneda.mlc + 10).toFixed(2) : 'Cargando'}
					image='/mlc.jpeg'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
