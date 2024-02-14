'use client';
import { useState } from 'react';
import estilos from '../estilos.module.css';
import CalculadoraComponent from './Components/Calculadora/CalculadoraComponent';
import { ViewCards } from './Components/ViewCards/ViewCards';

export default function Page() {
	const [watch, setwatch] = useState(false);
	const [input, setInput] = useState(0);

	return (
		<div>
			<header className={estilos.Header}>Calculadora Oculos Reparo</header>
			<section>
				<CalculadoraComponent
					setWatch={setwatch}
					input={input}
					setInput={setInput}
				/>
				<ViewCards
					input={input}
					watch={watch}
					setwatch={setwatch}
				/>
			</section>
		</div>
	);
}
