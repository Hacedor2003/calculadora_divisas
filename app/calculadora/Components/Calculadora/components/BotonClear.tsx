import '../hojas-de-estilo/BotonClear.css';

type BotonClearProps = {
	manejarClear: () => void;
	children: React.ReactNode;
};

const BotonClear: React.FC<BotonClearProps> = ({ manejarClear, children }) => (
	<div
		className='boton-clear'
		onClick={manejarClear}>
		{children}
	</div>
);

export default BotonClear;
