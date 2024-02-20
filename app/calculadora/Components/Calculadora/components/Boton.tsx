import React from 'react';
import '../hojas-de-estilo/Boton.css';

type BotonProps = {
	children: any;
	deshabilitado: boolean;
	manejarClic: (valor: any) => void;
};

const Boton: React.FC<BotonProps> = ({ children, deshabilitado, manejarClic }) => {
	const esOperador = (valor: any): boolean => {
		return isNaN(valor) && valor !== '.' && valor !== '=';
	};

	const esIgual = (valor: boolean): boolean => {
		return valor === false;
	};

	const handleClick = (valor: any): void => {
		if (!esIgual(deshabilitado)) {
			manejarClic(valor);
		}
	};

	return (
		<div
			className={`boton-contenedor ${esOperador(children) ? 'operador' : ''} ${esIgual(deshabilitado) ? 'desabilitado' : ''}`.trimEnd()}
			onClick={() => handleClick(children)}>
			{children}
		</div>
	);
};

export default Boton;
