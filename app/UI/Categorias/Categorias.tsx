import { useEffect } from 'react';
import estilos from './categorias.module.css';
import estilo_apilado from '@/app/Functions/estilo_apilado';
import '../../styles/estilos_apilado.css';
export const Categorias = ({ children, titulo }: { children: any; titulo: string }) => {
	useEffect(() => {
		estilo_apilado();
	}, []);
	return (
		<section className={estilos.Categorias}>
			<h3>{titulo}</h3>
			<ul className='estilo_apilado'>{children}</ul>
		</section>
	);
};
