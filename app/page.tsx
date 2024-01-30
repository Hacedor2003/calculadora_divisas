import { BarraNavegacion } from './UI/BarraNavegacion';
import estilos from './estilos.module.css';
import Image from 'next/image';

export default function Home() {
	return (
		<section>
			<Image
				src='/logo.jpg'
				alt='Foto:Logo'
				width={500}
				height={500}
			/>
		</section>
	);
}
