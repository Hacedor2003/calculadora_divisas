'use client';
import { useContext, useState } from 'react';
import { Card } from '../UI/Card';
import estilos from '../estilos.module.css';
import { ContextData } from '../Components/ContextProvider';
import { Span } from 'next/dist/trace';

export default function Page() {
	const moneda = useContext(ContextData);
	const [valor, setValor] = useState(null);

	const handleInputChange = (e: any) => {
		const inputValue = e.target.valueAsNumber;
		if (inputValue >= 0 || Number.isNaN(inputValue)) {
			setValor(inputValue);
		}
	};

	return (
		<div>
			<header className={estilos.Header}>Calculadora Oculos Reparo  </header>
			<article className={estilos.Article}>
				<label htmlFor='calculadora'>Valor:</label>
				<input
					type='number'
					id='calculadora'
					value={valor ? valor : ''}
					onChange={handleInputChange}
				/>
			</article>
			<section>
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.cup.usd : 0).toFixed(2) + ' Convertidos en USD' : 'Cargando'}`}
					dinero2={`${moneda ? (valor ? valor * moneda.cup.euro : 0).toFixed(2) + ' Convertidos en EUROS' : 'Cargando'}`}
					dinero3={`${moneda ? (valor ? valor * moneda.cup.mlc : 0).toFixed(2) + ' Convertidos en MLC' : 'Cargando'}`}
					image='/mlc.jpeg'
					moneda={valor ? valor + ' CUP son :' : 'CUP'}
				/>
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.usd : 0).toFixed(2) + ' CUP' : 'Cargando'}`}
					dinero2={`${moneda ? ((valor ? valor * moneda.usd : 0) / moneda.euro).toFixed(2) + ' Convertidos en  EUROS' : 'Cargando'}`}
					dinero3={`${moneda ? ((valor ? valor * moneda.usd : 0) / moneda.mlc).toFixed(2) + ' Convertidos en  MLC' : 'Cargando'}`}
					image='/usa.webp'
					moneda={valor ? valor + ' USD son :' : 'USD'}
				/>
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.euro : 0).toFixed(2) + ' CUP' : 'Cargando'}`}
					dinero2={`${moneda ? ((valor ? valor * moneda.euro : 0) / moneda.usd).toFixed(2) + ' Convertidos en USD' : 'Cargando'}`}
					dinero3={`${moneda ? ((valor ? valor * moneda.euro : 0) / moneda.mlc).toFixed(2) + ' Convertidos en MLC' : 'Cargando'}`}
					image='/euro.webp'
					moneda={valor ? valor + ' EUROS son :' : 'EUROS'}
				/>
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.mlc : 0).toFixed(2) + ' CUP' : 'Cargando'}`}
					dinero2={`${moneda ? ((valor ? valor * moneda.mlc : 0) / moneda.euro).toFixed(2) + ' Convertidos en EUROS' : 'Cargando'}`}
					dinero3={`${moneda ? ((valor ? valor * moneda.mlc : 0) / moneda.usd).toFixed(2) + ' Convertidos en USD' : 'Cargando'}`}
					image='/mlc.jpeg'
					moneda={valor ? valor + ' MLC son :' : 'MLC'}
				/>
			</section>
		</div>
	);
}
