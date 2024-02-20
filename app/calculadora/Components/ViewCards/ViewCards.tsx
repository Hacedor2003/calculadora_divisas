import { Card } from '@/app/UI/Card';
import estilos from '../../../estilos.module.css';
import { SelectedMoneda } from '../../../Functions/SelectedMoneda';

export const ViewCards = ({ watch, setwatch, input, selectedMoneda }: { watch: boolean; setwatch: Function; input: number; selectedMoneda: string }) => {
	if (!watch || !input || !selectedMoneda) {
		return null;
	}

	const { valores, tiposMoneda } = SelectedMoneda(selectedMoneda, input);

	const toggleWatch = () => {
		setwatch((valor: boolean) => !valor);
	};

	return (
		<div className={estilos.contenedor_cards_calculadora}>
			<button
				type='button'
				onClick={toggleWatch}>
				X
			</button>
			{valores.map((value, index) => (
				<Card
					key={index}
					dinero={value}
					image={`/${tiposMoneda[index].toLocaleLowerCase()}.webp`}
					moneda={tiposMoneda[index]}
					mostrar={false}
				/>
			))}
		</div>
	);
};
