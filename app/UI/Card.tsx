import Image from 'next/image';
import React from 'react';
import estilos from '../estilos.module.css';

export const Card = ({ image, moneda, dinero }: { image: string; moneda: string; dinero: string }) => {
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
			<p>{dinero} CUP</p>
		</div>
	);
};
