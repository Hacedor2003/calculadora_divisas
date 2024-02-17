import Link from 'next/link';
import estilos from './NavBar.module.css';
export const NavBar = () => {
	return (
		<nav className={estilos.NavBar}>
			<span>Logo</span>
			<ul className={estilos.lista_NavBar}>
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/peliculas'}>Peliculas</Link>
				</li>
				<li>
					<Link href={'/series'}>Series</Link>
				</li>
				<li>
					<Link href={'/novelas'}>Novelas</Link>
				</li>
			</ul>
		</nav>
	);
};
