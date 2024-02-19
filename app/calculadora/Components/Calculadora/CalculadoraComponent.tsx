import './hojas-de-estilo/estilos.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { Dispatch, SetStateAction } from 'react';
import { evaluate } from 'mathjs';
import DropdownMenu from './components/MenuDespegable/MenuDespegable';

function CalculadoraComponent({ setWatch, input, setInput, setSelectedMoneda }: { setWatch: Dispatch<SetStateAction<boolean>>; input: number; setInput: Dispatch<SetStateAction<number>>; setSelectedMoneda: Function }) {
	const agregarInput = (val: number) => {
		if (input === 0) {
			setInput(val);
		} else {
			setInput(input + val);
		}
	};

	const calcularResultado = () => {
		if (input) {
			const resultado = evaluate(input.toString());
			setInput(resultado);
			setWatch((valor: boolean) => !valor);
		} else {
			alert('Por favor ingrese valores para realizar los cálculos.');
		}
	};

	return (
		<div className='App'>
			<div className='contenedor-calculadora'>
				<Pantalla input={input} />
				<div className='fila'>
					<Boton manejarClic={agregarInput}>1</Boton>
					<Boton manejarClic={agregarInput}>2</Boton>
					<Boton manejarClic={agregarInput}>3</Boton>
					<Boton manejarClic={agregarInput}>+</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClic={agregarInput}>4</Boton>
					<Boton manejarClic={agregarInput}>5</Boton>
					<Boton manejarClic={agregarInput}>6</Boton>
					<Boton manejarClic={agregarInput}>-</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClic={agregarInput}>7</Boton>
					<Boton manejarClic={agregarInput}>8</Boton>
					<Boton manejarClic={agregarInput}>9</Boton>
					<Boton manejarClic={agregarInput}>*</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClic={calcularResultado}>=</Boton>
					<Boton manejarClic={agregarInput}>0</Boton>
					<Boton manejarClic={agregarInput}>.</Boton>
					<Boton manejarClic={agregarInput}>/</Boton>
				</div>
				<div className='fila'>
					<BotonClear manejarClear={() => setInput(0)}>Clear</BotonClear>
					<DropdownMenu setSelectedMoneda={setSelectedMoneda} />
				</div>
			</div>
		</div>
	);
}

export default CalculadoraComponent;
