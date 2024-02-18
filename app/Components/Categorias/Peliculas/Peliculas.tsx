import { DataContext } from '@/app/store/DataContext';
import { useContext } from 'react';
import Lista_Categorias from '../Lista_Categorias';

const Peliculas = () => {
	const { data } = useContext(DataContext);

	return (
		<Lista_Categorias
			nombre_categoria='Peliculas'
			data={data.peliculas}
		/>
	);
};

export default Peliculas;
