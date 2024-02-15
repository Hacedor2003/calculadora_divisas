'use client';
import { useEffect } from 'react';
import { Mas_Vistos } from './Components/Mas_Vistos/Mas_Vistos';
import { Peliculas } from './Components/Categorias/Peliculas/Peliculas';
import { Series } from './Components/Categorias/Series/Series';
import { Novelas } from './Components/Categorias/Novelas/Novelas';

export default function Home() {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js').then((registration) => console.log('scope is: ', registration.scope));
		}
	}, []);
	return (
		<article>
			<Mas_Vistos />
			<Peliculas />
			<Series />
			<Novelas />
		</article>
	);
}
