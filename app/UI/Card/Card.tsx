import estilos from './Card.module.css';
export const Card = ({ children }: { children: any }) => {
	return (
		<li className={estilos.Card}>
			<p>{children}</p>
		</li>
	);
};
