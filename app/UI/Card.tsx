import Image from 'next/image';
import React from 'react';
import estilos from '../estilos.module.css';

export const Card = ({ image, moneda, dinero, dinero2, dinero3 }: { image: string; moneda: string; dinero2: string; dinero3: string; dinero: string }) => {
	return (
		<div className={estilos.Card}>
			<section>
				<Image
					src={`${image}`}
					alt={`${image}`}
					width={30}
					height={30}
				/>
				<p>{moneda}</p>
			</section>
			<p>{dinero ? dinero : null}</p>
			<p>{dinero2 ? dinero2 : null}</p>
			<p>{dinero3 ? dinero3 : null}</p>
		</div>
	);
};
