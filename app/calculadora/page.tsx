'use client';
import { useContext, useState, useEffect } from 'react';
import { Card } from '../UI/Card';
import estilos from '../estilos.module.css';
import { ContextData } from '../Components/ContextProvider';

export default function Page() {
	const moneda = useContext(ContextData);
	const [valor, setValor] = useState(1);

	return (
		<>
			<header className={estilos.Header}>Calculadora Oculos Reparo</header>
			<article className={estilos.Article}>
				<label htmlFor='calculadora'>Valor:</label>
				<input
					type='number'
					id='calculadora'
					value={valor}
					onChange={(e) => setValor(e.target.valueAsNumber || 1)}
				/>
			</article>
			<section>
				<Card
					dinero={`${moneda ? (valor * moneda.usd).toFixed(2) : 'Cargando'}`}
					image='/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero={`${moneda ? (valor * moneda.euro).toFixed(2) : 'Cargando'}`}
					image='/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero={`${moneda ? (valor * moneda.mlc).toFixed(2) : 'Cargando'}`}
					image='/mlc.jpeg'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
