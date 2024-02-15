import { useEffect } from 'react';
import estilos from './mas_vistos.module.css';
import estilos_carta_mas_vistos from '@/app/Functions/estilos_carta_mas_vistos';
export const Mas_Vistos = () => {
	useEffect(() => {
		estilos_carta_mas_vistos();
	}, []);

	return (
		<header className={estilos.Mas_Vistos}>
			<ul className={estilos.lista_Mas_Vistos}>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>
		</header>
	);
};
