import Link from 'next/link';
import React from 'react';
import estilos from '../estilos.module.css'

export const BarraNavegacion = () => {
	return (
		<nav className={estilos.barraNavegacion}>
			<button>
				<Link href={'/tasa_cambio_OR'}>tasa cambio OR</Link>
			</button>
			<button>
				<Link href={'/tasa_cambio_informal'}>tasa cambio informal</Link>
			</button>
			<button>
				<Link href={'/calculadora'}>calculadora</Link>
			</button>
		</nav>
	);
};
