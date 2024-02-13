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
			<section>
				<Card
					dinero={moneda ? moneda.usd.toFixed(2) + ' CUP' : 'Cargando'}
					dinero2={''}
					dinero3={''}
					image='/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero={moneda ? moneda.euro.toFixed(2) + ' CUP' : 'Cargando'}
					dinero2={''}
					dinero3={''}
					image='/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero={moneda ? moneda.mlc.toFixed(2) + ' CUP' : 'Cargando'}
					dinero2={''}
					dinero3={''}
					image='/mlc.png'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
