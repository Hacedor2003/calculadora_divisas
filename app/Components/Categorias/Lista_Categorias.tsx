import { Card } from '@/app/UI/Card/Card';
import { Categorias } from '@/app/UI/Categorias/Categorias';

type Lista_Categorias_Type = {
	nombre_categoria: string;
	data: string[];
};

const Lista_Categorias: React.FC<Lista_Categorias_Type> = ({ nombre_categoria, data }) => {
	return (
		<Categorias titulo={nombre_categoria}>
			{data.map((item: string, index: number) => (
				<Card
					key={index}
					titulo={item}
					imageSRC='/calculadora 64x64.png'
				/>
			))}
		</Categorias>
	);
};

export default Lista_Categorias;
