import estilos from './mas_vistos.module.css';
import '../../styles/estilos.css';
import Image from 'next/image';
export const Mas_Vistos = () => {
	return (
		<header className={estilos.Mas_Vistos}>
			<ul
				className={estilos.lista_Mas_Vistos}
				id='lista_mas_vistos'>
				<li>
					<Image
						src='/calculadora 512x512.png'
						alt='1'
						width={512}
						height={512}
					/>
					<p className='letras_arriba'>1</p>
				</li>
				<li>
					<Image
						src='/calculadora 512x512.png'
						alt='1'
						width={512}
						height={512}
					/>
					<p className='letras_arriba'>2</p>
				</li>
				<li>
					<Image
						src='/calculadora 512x512.png'
						alt='1'
						width={512}
						height={512}
					/>
					<p className='letras_arriba'>3</p>
				</li>
				<li>
					<Image
						src='/calculadora 512x512.png'
						alt='1'
						width={512}
						height={512}
					/>
					<p className='letras_arriba'>4</p>
				</li>
				<li>
					<Image
						src='/calculadora 512x512.png'
						alt='1'
						width={512}
						height={512}
					/>
					<p className='letras_arriba'>5</p>
				</li>
			</ul>
		</header>
	);
};
