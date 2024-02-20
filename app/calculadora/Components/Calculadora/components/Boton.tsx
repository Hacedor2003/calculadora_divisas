import '../hojas-de-estilo/Boton.css';

type BotonProps = {
	children: any;
	desabilitado: boolean;
	manejarClic: (valor: any) => void;
};

const Boton: React.FC<BotonProps> = ({ children, desabilitado, manejarClic }) => {
	const esOperador = (valor: any): boolean => {
		return isNaN(valor) && valor !== '.' && valor !== '=';
	};

	const esIgual = (valor: boolean): boolean => {
		return valor === false;
	};

	const handleClick = (valor: any): void => {
		if (!esIgual(desabilitado)) {
			manejarClic(valor);
		}
	};

	return (
		<div
			className={`boton-contenedor ${esOperador(children) ? 'operador' : ''} ${esIgual(desabilitado) ? 'desabilitado' : ''}`.trimEnd()}
			onClick={() => handleClick(children)}>
			{children}
		</div>
	);
};

export default Boton;
