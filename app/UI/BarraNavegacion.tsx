import Link from 'next/link';
import React from 'react';
import estilos from '../estilos.module.css';
import '../styles/estilos_id.css';
import Image from 'next/image';

export const BarraNavegacion = () => {
	return (
		<ul className={estilos.barraNavegacion}>
			<li id='link_tasa_informal'>
				<Link href={'/tasa_cambio_informal'}>
					<Image
						src='/PNG Aplicacion/Logo Cambio Informal.png'
						alt='Logo Cambio Informal'
						width={50}
						height={50}
					/>
				</Link>
			</li>
			<li>
				<Link href={'/calculadora'}>
					<Image
						src='/PNG Aplicacion/Logo Calculadora.png'
						alt='Logo Calculadora'
						width={50}
						height={50}
					/>
				</Link>
			</li>
			<li id='link_factura'>
				<Link href={'/factura'}>
					<Image
						src='/factura.png'
						alt='Logo factura'
						width={50}
						height={50}
					/>
				</Link>
			</li>
		</ul>
	);
};
