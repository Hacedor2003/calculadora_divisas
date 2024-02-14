import { Card } from '@/app/UI/Card';
import { ContextData } from '@/app/store/ContextProvider';
import React, { useContext } from 'react';
import estilos from '../../../estilos.module.css';

export const ViewCards = ({ watch, setwatch, input }: { watch: boolean; setwatch: Function; input: number }) => {
	const moneda = useContext(ContextData);

	return watch ? (
		<div className={estilos.contenedor_cards_calculadora}>
			<button
				type='button'
				onClick={() => {
					setwatch((valor: boolean) => !valor);
				}}>
				X
			</button>
			<Card
				dinero={moneda ? input / moneda?.usd.toFixed(2) + ' CUP' : 'Cargando'}
				image='/usa.webp'
				moneda='USD'
			/>
			<Card
				dinero={moneda ? input / moneda?.euro.toFixed(2) + ' CUP' : 'Cargando'}
				image='/euro.webp'
				moneda='EURO'
			/>
			<Card
				dinero={moneda ? input / moneda?.mlc.toFixed(2) + ' CUP' : 'Cargando'}
				image='/mlc.png'
				moneda='MLC'
			/>
		</div>
	) : null;
};
