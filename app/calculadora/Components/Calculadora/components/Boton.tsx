import React from 'react';
import '../hojas-de-estilo/Boton.css';

type BotonProps = {
	children: string | number;
	deshabilitado: boolean;
	manejarClic: (valor: string | number) => void;
};

const Boton: React.FC<BotonProps> = ({ children, deshabilitado, manejarClic }) => {
	const esOperador = (valor: string | number): boolean => {
		return isNaN(Number(valor)) && valor !== '.' && valor !== '=';
	};

	const esDiferenteDeFalse = (valor: boolean): boolean => {
		return valor !== false;
	};

	const handleClick = (valor: string | number): void => {
		if (esDiferenteDeFalse(deshabilitado)) {
			manejarClic(valor);
		}
	};

	return (
		<div
			className={`boton-contenedor ${esOperador(children) ? 'operador' : ''} ${!esDiferenteDeFalse(deshabilitado) ? 'deshabilitado' : ''}`.trimEnd()}
			onClick={() => handleClick(children)}>
			{children}
		</div>
	);
};

export default Boton;
