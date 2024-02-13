'use client';
import { useState } from 'react';
import estilos from '../estilos.module.css';
import { ViewCard } from './Components/ViewCard';

export default function Page() {
	const [valor, setValor] = useState<number | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [vista, setVista] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.valueAsNumber;
		if (inputValue >= 0 || Number.isNaN(inputValue)) {
			setValor(inputValue);
		}
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<header className={estilos.Header}>Calculadora Oculos Reparo</header>
			<article className={estilos.Article}>
				<label htmlFor='calculadora'>Valor:</label>
				<p>{valor}</p>
			</article>
			<section>{ViewCard(vista, valor)}</section>
		</div>
	);
}
