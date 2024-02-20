'use client';
import { useEffect, useState } from 'react';
import estilos from '../estilos.module.css';
import CalculadoraComponent from './Components/Calculadora/CalculadoraComponent';
import { ViewCards } from './Components/ViewCards/ViewCards';

export default function Page() {
	const [watch, setwatch] = useState(false);
	const [input, setInput] = useState(0);
	const [selectedMoneda, setSelectedMoneda] = useState('');
	const [desabilitado, setDesabilitado] = useState(false);

	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js').then((registration) => console.log('scope is: ', registration.scope));
		}
	}, []);

	useEffect(() => {
		if (input && selectedMoneda) {
			setDesabilitado(true);
		} else {
			setDesabilitado(false);
		}
	}, [input, selectedMoneda]);

	return (
		<div>
			<header className={estilos.Header}>Calculadora Oculos Reparo</header>
			<section className={estilos.contenedor_calculadora}>
				<CalculadoraComponent
					setWatch={setwatch}
					input={input}
					setInput={setInput}
					setSelectedMoneda={setSelectedMoneda}
					deshabilitado={desabilitado}
				/>
				<ViewCards
					input={input}
					watch={watch}
					setwatch={setwatch}
					selectedMoneda={selectedMoneda}
				/>
			</section>
		</div>
	);
}
