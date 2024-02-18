import { useContext } from 'react';
import Lista_Categorias from '../Lista_Categorias';
import { DataContext } from '@/app/store/DataContext';

const Series = () => {
	const { data } = useContext(DataContext);

	return (
		<Lista_Categorias
			nombre_categoria='Series'
			data={data.series}
		/>
	);
};

export default Series;
