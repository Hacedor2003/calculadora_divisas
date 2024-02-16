import { Card } from '@/app/UI/Card/Card';
import { Categorias } from '@/app/UI/Categorias/Categorias';

export const Peliculas = () => {
	return (
		<Categorias titulo='Peliculas'>
			<Card
				imageSRC='/calculadora 192x192.png'
				titulo='Harry Potter 1'
			/>
			<Card
				imageSRC='/calculadora 192x192.png'
				titulo='Harry Potter 2'
			/>
			<Card
				imageSRC='/calculadora 192x192.png'
				titulo='Harry Potter 3'
			/>
			<Card
				imageSRC='/calculadora 192x192.png'
				titulo='Harry Potter 4'
			/>
			<Card
				imageSRC='/calculadora 192x192.png'
				titulo='Harry Potter 5'
			/>
		</Categorias>
	);
};
