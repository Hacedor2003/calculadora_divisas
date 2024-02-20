import './hojas-de-estilo/estilos.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { Dispatch, SetStateAction } from 'react';
import { evaluate } from 'mathjs';
import DropdownMenu from './components/MenuDespegable/MenuDespegable';

function CalculadoraComponent({ setWatch, input, setInput, setSelectedMoneda, desabilitado }: { desabilitado: boolean; setWatch: Dispatch<SetStateAction<boolean>>; input: number; setInput: Dispatch<SetStateAction<number>>; setSelectedMoneda: Function }) {
	const agregarInput = (val: number) => {
		setInput((prevInput) => (prevInput === 0 ? val : prevInput + val));
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
					{[1, 2, 3, '+'].map((val) => (
						<Boton
							key={val}
							manejarClic={agregarInput}
							desabilitado={true}>
							{val}
						</Boton>
					))}
				</div>
				<div className='fila'>
					{[4, 5, 6, '-'].map((val) => (
						<Boton
							key={val}
							manejarClic={agregarInput}
							desabilitado={true}>
							{val}
						</Boton>
					))}
				</div>
				<div className='fila'>
					{[7, 8, 9, '*'].map((val) => (
						<Boton
							key={val}
							manejarClic={agregarInput}
							desabilitado={true}>
							{val}
						</Boton>
					))}
				</div>
				<div className='fila'>
					<Boton
						manejarClic={calcularResultado}
						desabilitado={desabilitado}>
						=
					</Boton>
					{[0, '.', '/'].map((val) => (
						<Boton
							key={val}
							manejarClic={agregarInput}
							desabilitado={true}>
							{val}
						</Boton>
					))}
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
