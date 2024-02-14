import Image from 'next/image';
import React from 'react';
import estilos from '../estilos.module.css';

export const Card = ({ image, moneda, dinero }: { image: string; moneda: string | null; dinero: string }) => {
	return (
		<div className={estilos.Card}>
			<Image
				src={`${image}`}
				alt={`${image}`}
				width={30}
				height={30}
			/>
			<section>
				<p className={estilos.moneda}>{moneda}</p>
				<aside>
					<p>{Number(dinero) ? dinero : null}</p>
				</aside>
			</section>
			<section>
				<p className={estilos.monedaOR}>{moneda}</p>
				<aside>
					<p>{Number(dinero) ? dinero + 10 : null}</p>
				</aside>
			</section>
		</div>
	);
};
