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
					dinero={`${moneda ? (valor ? valor * moneda.cup.usd : 0).toFixed(2) + ' Convertidos en USD' : 'Cargando'}`}
					dinero2={`${moneda ? (valor ? valor * moneda.cup.euro : 0).toFixed(2) + ' Convertidos en EUROS' : 'Cargando'}`}
					dinero3={`${moneda ? (valor ? valor * moneda.cup.mlc : 0).toFixed(2) + ' Convertidos en MLC' : 'Cargando'}`}
					image='/mlc.jpeg'
					moneda={valor ? valor + ' CUP son :' : 'CUP'}
				/>
			);
			break;
		case 'EUROS':
			content = (
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.euro : 0).toFixed(2) + ' CUP' : 'Cargando'}`}
					dinero2={`${moneda ? ((valor ? valor * moneda.euro : 0) / moneda.usd).toFixed(2) + ' Convertidos en USD' : 'Cargando'}`}
					dinero3={`${moneda ? ((valor ? valor * moneda.euro : 0) / moneda.mlc).toFixed(2) + ' Convertidos en MLC' : 'Cargando'}`}
					image='/euro.webp'
					moneda={valor ? valor + ' EUROS son :' : 'EUROS'}
				/>
			);
			break;
		case 'USD':
			content = (
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.usd : 0).toFixed(2) + ' CUP' : 'Cargando'}`}
					dinero2={`${moneda ? ((valor ? valor * moneda.usd : 0) / moneda.euro).toFixed(2) + ' Convertidos en  EUROS' : 'Cargando'}`}
					dinero3={`${moneda ? ((valor ? valor * moneda.usd : 0) / moneda.mlc).toFixed(2) + ' Convertidos en  MLC' : 'Cargando'}`}
					image='/usa.webp'
					moneda={valor ? valor + ' USD son :' : 'USD'}
				/>
			);
			break;
		case 'MLC':
			content = (
				<Card
					dinero={`${moneda ? (valor ? valor * moneda.mlc : 0).toFixed(2) + ' CUP' : 'Cargando'}`}
					dinero2={`${moneda ? ((valor ? valor * moneda.mlc : 0) / moneda.euro).toFixed(2) + ' Convertidos en EUROS' : 'Cargando'}`}
					dinero3={`${moneda ? ((valor ? valor * moneda.mlc : 0) / moneda.usd).toFixed(2) + ' Convertidos en USD' : 'Cargando'}`}
					image='/mlc.jpeg'
					moneda={valor ? valor + ' MLC son :' : 'MLC'}
				/>
			);
			break;
		default:
			content = '';
			break;
	}
	return content;
};
