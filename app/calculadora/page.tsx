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
					dinero={`${moneda ? (valor * moneda.usd).toFixed(2) + ' CUP' : 'Cargando'}`}
					dinero2={`${moneda ? ((valor * moneda.usd) / moneda.euro).toFixed(2) + ' EUROS' : 'Cargando'}`}
					dinero3={`${moneda ? ((valor * moneda.usd) / moneda.mlc).toFixed(2) + ' MLC' : 'Cargando'}`}
					image='/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero={`${moneda ? (valor * moneda.euro).toFixed(2) + ' CUP' : 'Cargando'}`}
					dinero2={`${moneda ? ((valor * moneda.euro) / moneda.usd).toFixed(2) + ' USD' : 'Cargando'}`}
					dinero3={`${moneda ? ((valor * moneda.euro) / moneda.mlc).toFixed(2) + ' MLC' : 'Cargando'}`}
					image='/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero={`${moneda ? (valor * moneda.mlc).toFixed(2) + ' CUP' : 'Cargando'}`}
					dinero2={`${moneda ? ((valor * moneda.mlc) / moneda.euro).toFixed(2) + ' EUROS' : 'Cargando'}`}
					dinero3={`${moneda ? ((valor * moneda.mlc) / moneda.usd).toFixed(2) + ' USD' : 'Cargando'}`}
					image='/mlc.jpeg'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
