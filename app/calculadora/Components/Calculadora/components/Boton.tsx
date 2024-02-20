import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props: any) {
	const esOperador = (valor: any) => {
		return isNaN(valor) && valor != '.' && valor != '=';
	};
	const esIgual = (valor: boolean) => {
		return valor === false;
	};

	const handleClick = (valor: any) => {
		if (!esIgual(props.desabilitado)) {
			props.manejarClic(valor);
		}
	};

	return (
		<div
			className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''} ${esIgual(props.desabilitado) ? 'desabilitado' : ''}`.trimEnd()}
			onClick={() => handleClick(props.children)}>
			{props.children}
		</div>
	);
}

export default Boton;
