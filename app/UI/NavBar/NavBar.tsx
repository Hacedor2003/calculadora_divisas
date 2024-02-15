import estilos from './NavBar.module.css';
export const NavBar = () => {
	return (
		<nav className={estilos.NavBar}>
			<ul className={estilos.lista_NavBar}>
				<li>Home</li>
				<li>Peliculas</li>
				<li>Series</li>
				<li>Novelas</li>
			</ul>
		</nav>
	);
};
