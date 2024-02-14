'use client';

import printDiv from './Components/printDiv';
import estilos from '../estilos.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
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
					<p>Nombre : Numero de Telefono</p>
					<p>Fecha/Hora</p>
					<section className={estilos.contenedor_producto}>
						<p>Producto</p>
						<p>Cantidad</p>
						<p>Precio</p>
						<p>Debe</p>
						<p>Producto Vendido</p>
					</section>
					<p>Total</p>
					<p>Sub Total</p>
					<p>PagoEfectuado</p>
					<p>Debe</p>
					<p>Metodo de Pago</p>
					<p>Gracias por preferirnos , vuelva pronto</p>
				</div>
			</div>
			<input
				type='button'
				onClick={() => printDiv('areaImprimir')}
				value='imprimir div'
			/>
		</>
	);
}
