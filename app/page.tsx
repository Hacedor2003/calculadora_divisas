'use client';
import Image from 'next/image';
import { useEffect } from 'react';

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
				width={500}
				height={500}
			/>
		</section>
	);
}
