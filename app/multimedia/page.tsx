import Image from 'next/image';
import estilos from './styles/estilos.module.css';
import '../styles/estilos.css';

export default function Page() {
	return (
		<article className={estilos.Contenedor_Multimedia}>
			<section className={estilos.Header}>
				<Image
					src='/calculadora 512x512.png'
					alt=''
					width={400}
					height={400}
				/>
				<header>Titulo</header>
			</section>
			<p id='multimedia_header'>Descripcion</p>
			<aside className={estilos.Contenedor_Multimedia_Aside}>
				<h5>Lista de Reproduccion</h5>
				<ul>
					<li>
						<Image
							src='/calculadora 64x64.png'
							alt=''
							width={64}
							height={64}
						/>
						<div>
							<p>Titulo</p>
							<p>Breve Descripcion</p>
							<p>Tamano</p>
						</div>
					</li>
					<li>
						<Image
							src='/calculadora 64x64.png'
							alt=''
							width={64}
							height={64}
						/>
						<div>
							<p>Titulo</p>
							<p>Breve Descripcion</p>
							<p>Tamano</p>
						</div>
					</li>
					<li>
						<Image
							src='/calculadora 64x64.png'
							alt=''
							width={64}
							height={64}
						/>
						<div>
							<p>Titulo</p>
							<p>Breve Descripcion</p>
							<p>Tamano</p>
						</div>
					</li>
					<li>
						<Image
							src='/calculadora 64x64.png'
							alt=''
							width={64}
							height={64}
						/>
						<div>
							<p>Titulo</p>
							<p>Breve Descripcion</p>
							<p>Tamano</p>
						</div>
					</li>
					<li>
						<Image
							src='/calculadora 64x64.png'
							alt=''
							width={64}
							height={64}
						/>
						<div>
							<p>Titulo</p>
							<p>Breve Descripcion</p>
							<p>Tamano</p>
						</div>
					</li>
					<li>
						<Image
							src='/calculadora 64x64.png'
							alt=''
							width={64}
							height={64}
						/>
						<div>
							<p>Titulo</p>
							<p>Breve Descripcion</p>
							<p>Tamano</p>
						</div>
					</li>
				</ul>
			</aside>
		</article>
	);
}
