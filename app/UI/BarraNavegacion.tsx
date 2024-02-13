import Link from 'next/link';
import React from 'react';
import estilos from '../estilos.module.css';
import '../styles/estilos_id.css';
import Image from 'next/image';

export const BarraNavegacion = () => {
	return (
		<nav>
			<ul className={estilos.barraNavegacion}>
				<li id='link_tasa_informal'>
					<Link href={'/tasa_cambio_informal'}>
						<Image
							src='/PNG Aplicacion/Logo Cambio Informal.png'
							alt='Logo Cambio Informal'
							width={75}
							height={75}
						/>
					</Link>
				</li>
				<li>
					<Link href={'/calculadora'}>
						<Image
							src='/PNG Aplicacion/Logo Calculadora.png'
							alt='Logo Calculadora'
							width={75}
							height={75}
						/>
					</Link>
				</li>
				<li id='link_tasa_OR'>
					<Link href={'/tasa_cambio_OR'}>
						<Image
							src='/PNG Aplicacion/Logo Cambio Oculus Reparo.png'
							alt='Logo Cambio Oculos Reparo'
							width={75}
							height={75}
						/>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
