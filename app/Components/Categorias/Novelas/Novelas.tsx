import Lista_Categorias from '../Lista_Categorias';
import { DataContext } from '@/app/store/DataContext';
import { useContext } from 'react';

const Novelas = () => {
	const { data } = useContext(DataContext);

	return (
		<Lista_Categorias
			nombre_categoria='Novelas'
			data={data.series}
		/>
	);
};
export default Novelas;
