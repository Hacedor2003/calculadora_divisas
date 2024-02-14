'use client';

import printDiv from './Components/printDiv';
import estilos from '../estilos.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
	const [nombre, setNombre] = useState('');
	const [telefono, setTelefono] = useState('');
	const [fechaHora, setFechaHora] = useState('');
	const [total, setTotal] = useState('');
	const [subTotal, setSubTotal] = useState('');
	const [pagoEfectuado, setPagoEfectuado] = useState('');
	const [debe, setDebe] = useState('');
	const [metodoPago, setMetodoPago] = useState('');

	return (
		<>
			<div id='areaImprimir'>
				<div className={estilos.contenedor_imprimir}>
					<Image
						src='/PNG Aplicacion/Logo Cambio Oculus Reparo.png'
						alt='Logo Optica'
						width={100}
						height={100}
					/>
					<p>
						<input
							type='text'
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
							placeholder='Nombre'
						/>{' '}
						:
						<input
							type='text'
							value={telefono}
							onChange={(e) => setTelefono(e.target.value)}
							placeholder='Numero de Telefono'
						/>
					</p>
					<p>
						<input
							type='text'
							value={fechaHora}
							onChange={(e) => setFechaHora(e.target.value)}
							placeholder='Fecha/Hora'
						/>
					</p>
					<section className={estilos.contenedor_producto}>
						<p>Producto</p>
						<p>Cantidad</p>
						<p>Precio</p>
						<p>Debe</p>
						<p>Producto Vendido</p>
					</section>
					<p>
						Total:
						<input
							type='text'
							value={total}
							onChange={(e) => setTotal(e.target.value)}
							placeholder='Total'
						/>
					</p>
					<p>
						Sub Total:
						<input
							type='text'
							value={subTotal}
							onChange={(e) => setSubTotal(e.target.value)}
							placeholder='Sub Total'
						/>
					</p>
					<p>
						Pago Efectuado:
						<input
							type='text'
							value={pagoEfectuado}
							onChange={(e) => setPagoEfectuado(e.target.value)}
							placeholder='Pago Efectuado'
						/>
					</p>
					<p>
						Debe:
						<input
							type='text'
							value={debe}
							onChange={(e) => setDebe(e.target.value)}
							placeholder='Debe'
						/>
					</p>
					<p>
						Metodo de Pago:
						<input
							type='text'
							value={metodoPago}
							onChange={(e) => setMetodoPago(e.target.value)}
							placeholder='Metodo de Pago'
						/>
					</p>
					<p>Gracias por preferirnos, vuelva pronto</p>
				</div>
			</div>
			<input
				type='button'
				id='btn_Imprimir'
				onClick={() => printDiv('areaImprimir')}
				value='Imprimir'
			/>
		</>
	);
}
