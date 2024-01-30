import { Card } from '../UI/Card';
import estilos from '../estilos.module.css'

export default function Page() {
	return (
		<>
			<header className={estilos.Header}>Tasa de Cambio Informal</header>
			<section>
				<Card
					dinero='285'
					image='/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero='290'
					image='/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero='252'
					image='/mlc.jpeg'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
