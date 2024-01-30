'use client';
import { useState } from 'react';
import { Card } from '../UI/Card';
import estilos from '../estilos.module.css';

export default function Page() {
	const [valor, setValor] = useState(0);

	return (
		<>
			<header className={estilos.Header}>Calculadora Oculos Reparo</header>
			<article className={estilos.Article}>
				<label htmlFor='calculadora'>Valor:</label>
				<input
					type='number'
					id='calculadora'
					value={valor}
					onChange={(e) => setValor(e.target.valueAsNumber)}
				/>
			</article>
			<section>
				<Card
					dinero={`${valor * 280}`}
					image='/Icons/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero={`${valor * 270}`}
					image='/Icons/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero={`${valor * 240}`}
					image='/Icons/mlc.jpeg'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
