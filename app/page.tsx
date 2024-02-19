'use client';
import Image from 'next/image';
import { useEffect } from 'react';
<<<<<<< HEAD
import { Mas_Vistos } from './Components/Mas_Vistos/Mas_Vistos';
import Series from './Components/Categorias/Series/Series';
import Peliculas from './Components/Categorias/Peliculas/Peliculas';
import Novelas from './Components/Categorias/Novelas/Novelas';
=======
>>>>>>> parent of 53ff688 (Prueba de estilos Mas Vistos)

export default function Home() {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js').then((registration) => console.log('scope is: ', registration.scope));
		}
	}, []);
	return (
		<section>
			<Image
				src='/PNG Aplicacion/!!!!!!LOGO APLICACION.png'
				alt='Foto:Logo'
				width={400}
				height={400}
			/>
		</section>
	);
}
