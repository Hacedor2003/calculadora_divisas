import './hojas-de-estilo/estilos.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { Dispatch, SetStateAction, useState } from 'react';
import { evaluate } from 'mathjs';
import DropdownMenu from './components/MenuDespegable/MenuDespegable';
import { SelectedMoneda } from '@/app/Functions/SelectedMoneda';

function CalculadoraComponent({ setWatch, input, setInput, setSelectedMoneda, desabilitado }: { desabilitado: boolean; setWatch: Dispatch<SetStateAction<boolean>>; input: number; setInput: Dispatch<SetStateAction<number>>; setSelectedMoneda: Function }) {
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
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						1
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						2
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						3
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						+
					</Boton>
				</div>
				<div className='fila'>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						4
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						5
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						6
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						-
					</Boton>
				</div>
				<div className='fila'>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						7
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						8
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						9
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						*
					</Boton>
				</div>
				<div className='fila'>
					<Boton
						manejarClic={calcularResultado}
						desabilitado={desabilitado}>
						=
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						0
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						.
					</Boton>
					<Boton
						manejarClic={agregarInput}
						desabilitado={true}>
						/
					</Boton>
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
