import Image from 'next/image';
import estilos from './Card.module.css';
import '../../styles/estilos.css';
export const Card = ({ imageSRC, titulo }: { imageSRC: string; titulo: string }) => {
	return (
		<li className={estilos.Card}>
			<Image
				src={imageSRC}
				alt={'Foto:' + titulo}
				width={178}
				height={273}
			/>
			<p className='letras_arriba'>{titulo}</p>
		</li>
	);
};
