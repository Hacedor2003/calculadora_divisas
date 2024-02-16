import estilos from './categorias.module.css';
export const Categorias = ({ children, titulo }: { children: any; titulo: string }) => {
	return (
		<section className={estilos.Categorias}>
			<h3>{titulo}</h3>
			<ul>{children}</ul>
		</section>
	);
};
