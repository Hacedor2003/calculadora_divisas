import { ContextData } from '@/app/store/ContextProvider';
import { useContext } from 'react';

export const SelectedMoneda = (monedaSeleccionada: string, valor: number | null) => {
	const moneda = useContext(ContextData);

	let valores = ['Error 404', 'Error 404', 'Error 404'];
	let tiposMoneda = ['No Conexion', 'No Conexion', 'No Conexion'];

	if (moneda?.status !== 'Network Error') {
		switch (monedaSeleccionada) {
			case 'CUP':
				valores = [(valor ? valor / moneda?.cup.usd : 0).toFixed(2), (valor ? valor / moneda?.cup.euro : 0).toFixed(2), (valor ? valor / moneda?.cup.mlc : 0).toFixed(2)];
				tiposMoneda = ['USD', 'EURO', 'MLC'];
				break;
			case 'USD':
				valores = [(valor ? valor * moneda?.usd : 0).toFixed(2), (valor ? (valor * moneda?.usd) / moneda?.euro : 0).toFixed(2), (valor ? (valor * moneda?.usd) / moneda?.mlc : 0).toFixed(2)];
				tiposMoneda = ['CUP', 'EURO', 'MLC'];
				break;
			case 'EURO':
				valores = [(valor ? valor * moneda?.euro : 0).toFixed(2), (valor ? (valor * moneda?.euro) / moneda?.usd : 0).toFixed(2), (valor ? (valor * moneda?.euro) / moneda?.mlc : 0).toFixed(2)];
				tiposMoneda = ['CUP', 'USD', 'MLC'];
				break;
			case 'MLC':
				valores = [(valor ? valor * moneda?.mlc : 0).toFixed(2), (valor ? (valor * moneda?.mlc) / moneda?.euro : 0).toFixed(2), (valor ? (valor * moneda?.mlc) / moneda?.usd : 0).toFixed(2)];
				tiposMoneda = ['CUP', 'EURO', 'USD'];
				break;
		}
	}
	return { valores, tiposMoneda };
};
