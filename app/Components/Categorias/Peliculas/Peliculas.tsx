import { Card } from '@/app/UI/Card/Card';
import { Categorias } from '@/app/UI/Categorias/Categorias';

export const Peliculas = () => {
	return (
		<Categorias titulo='Peliculas'>
			<Card>Harry Potter</Card>
			<Card>Harry Potter 1</Card>
			<Card>Harry Potter 2</Card>
			<Card>Harry Potter 3</Card>
			<Card>Harry Potter 4</Card>
		</Categorias>
	);
};
