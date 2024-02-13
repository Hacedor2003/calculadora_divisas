import { ContextData } from '@/app/store/ContextProvider';
import { Card } from '@/app/UI/Card';
import React, { useContext } from 'react';

export const ViewCard = (vista: string, valor: number | null) => {
	const moneda = useContext(ContextData);
	let content = undefined;

	switch (vista) {
		case 'CUP':
			content = (
				<Card
					dinero={`${moneda ? (valor ? valor / moneda.cup.usd : 0).toLocaleString() + ' Convertidos en USD' : 'Cargando'}`}
					image='/mlc.png'
					moneda={valor ? valor.toLocaleString() + ' CUP son :' : 'CUP'}
				/>
			);
			break;
		case 'EUROS':
			content = (
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.euro : 0).toLocaleString() + ' CUP' : 'Cargando'}`}
					image='/euro.webp'
					moneda={valor ? valor.toLocaleString() + ' EUROS son :' : 'EUROS'}
				/>
			);
			break;
		case 'USD':
			content = (
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.usd : 0).toLocaleString() + ' CUP' : 'Cargando'}`}
					image='/usa.webp'
					moneda={valor ? valor.toLocaleString() + ' USD son :' : 'USD'}
				/>
			);
			break;
		case 'MLC':
			content = (
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.mlc : 0).toLocaleString() + ' CUP' : 'Cargando'}`}
					image='/mlc.png'
					moneda={valor ? valor.toLocaleString() + ' MLC son :' : 'MLC'}
				/>
			);
			break;
		default:
			content = '';
			break;
	}
	return content;
};
