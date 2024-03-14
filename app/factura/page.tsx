'use client';
import React, { useEffect, useState } from 'react';
import estilos from '../estilos.module.css';
import printDiv from './Components/printDiv';
import DropdownMenuFactura from './Components/MenuDespegableFactura';

export default function Page() {
	const [formValues, setFormValues] = useState({
		nombre: localStorage.getItem('nombre') ? localStorage.getItem('nombre') : '',
		telefono: localStorage.getItem('telefono') ? localStorage.getItem('telefono') : '',
		fechaHora: localStorage.getItem('fechaHora') ? localStorage.getItem('fechaHora') : '',
		total: localStorage.getItem('total') ? localStorage.getItem('total') : '',
		subTotal: localStorage.getItem('subTotal') ? localStorage.getItem('subTotal') : '',
		pagoEfectuado: localStorage.getItem('pagoEfectuado') ? localStorage.getItem('pagoEfectuado') : '',
		debe: localStorage.getItem('debe') ? localStorage.getItem('debe') : '',
		metodoPago: localStorage.getItem('metodoPago') ? localStorage.getItem('metodoPago') : '',
	});

	const { nombre, telefono, fechaHora, total, subTotal, pagoEfectuado, debe, metodoPago } = formValues;

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		localStorage.setItem(name, value);
		setFormValues({ ...formValues, [name]: value });
	};

	const isFormComplete = Object.values(formValues).every((value) => value !== '');

	const agregarProducto = () => {
		const contenedor = document.getElementById('contenedor_listas_producto');

		// Crear los 4 elementos <input> con placeholders
		const inputTexto = document.createElement('input');
		inputTexto.type = 'text';
		inputTexto.placeholder = 'Producto:';

		const inputNumero1 = document.createElement('input');
		inputNumero1.type = 'number';
		inputNumero1.placeholder = 'Cantidad:';

		const inputNumero2 = document.createElement('input');
		inputNumero2.type = 'number';
		inputNumero2.placeholder = 'Precio:';

		const inputNumero3 = document.createElement('input');
		inputNumero3.type = 'number';
		inputNumero3.placeholder = 'Debe:';

		// Agregar los elementos al contenedor
		contenedor?.appendChild(inputTexto);
		contenedor?.appendChild(inputNumero1);
		contenedor?.appendChild(inputNumero2);
		contenedor?.appendChild(inputNumero3);
	};

	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js').then((registration) => console.log('scope is: ', registration.scope));
		}
	}, []);

	return (
		<>
			<div id='areaImprimir'>
				<div className={estilos.contenedor_imprimir}>
					<aside>
						<img
							src='/PNG Aplicacion/Logo Cambio Oculus Reparo.png'
							alt='Logo Optica'
							width={100}
							height={100}
						/>
					</aside>
					<div>
						<input
							type='text'
							name='nombre'
							value={nombre ? nombre : ''}
							onChange={handleChange}
							placeholder='Nombre'
						/>
						<input
							type='number'
							name='telefono'
							value={telefono ? telefono : ''}
							onChange={handleChange}
							placeholder='Numero de Telefono'
						/>
					</div>
					<div>
						<input
							type='datetime-local'
							name='fechaHora'
							value={fechaHora ? fechaHora : ''}
							onChange={handleChange}
							placeholder='Fecha/Hora'
						/>
					</div>
					<section
						id='contenedor_listas_producto'
						className={estilos.contenedor_producto}>
						<div>
							Producto{' '}
							<button
								type='button'
								onClick={agregarProducto}>
								+
							</button>
						</div>
						<p>Cantidad</p>
						<p>Precio</p>
						<p>Debe</p>
					</section>
					<div>
						Total:
						<input
							type='number'
							name='total'
							value={total ? total : ''}
							onChange={handleChange}
							placeholder='Total'
						/>
					</div>
					<div>
						Sub Total:
						<input
							type='number'
							name='subTotal'
							value={subTotal ? subTotal : ''}
							onChange={handleChange}
							placeholder='Sub Total'
						/>
					</div>
					<div>
						Pago Efectuado:
						<input
							type='number'
							name='pagoEfectuado'
							value={pagoEfectuado ? pagoEfectuado : ''}
							onChange={handleChange}
							placeholder='Pago Efectuado'
						/>
					</div>
					<div>
						Debe:
						<input
							type='number'
							name='debe'
							value={debe ? debe : ''}
							onChange={handleChange}
							placeholder='Debe'
						/>
					</div>
					<div>
						Metodo de Pago:
						<DropdownMenuFactura />
					</div>
					<p>Gracias por preferirnos, vuelva pronto</p>
				</div>
			</div>
			<input
				type='button'
				id='btn_Imprimir'
				disabled={!isFormComplete}
				onClick={() => printDiv('areaImprimir', nombre ? nombre : '')}
				value='Imprimir'
			/>
		</>
	);
}
