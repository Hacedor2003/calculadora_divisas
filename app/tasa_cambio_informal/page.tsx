'use client'
import React, { useContext } from 'react';
import { Card } from '../UI/Card';
import estilos from '../estilos.module.css';
import { ContextData } from '../Components/ContextProvider';

export default function Page() {
	const  moneda  = useContext(ContextData);

	return (
		<>
			<header className={estilos.Header}>Tasa de Cambio Informal</header>
			<section>
				<Card
					dinero={moneda ? moneda.usd : 'Cargando'}
					image='/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero={moneda ? moneda.euro : 'Cargando'}
					image='/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero={moneda ? moneda.mlc : 'Cargando'}
					image='/mlc.jpeg'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
