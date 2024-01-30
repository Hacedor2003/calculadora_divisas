import { Card } from '../UI/Card';
import estilos from '../estilos.module.css'

export default function Page() {
	return (
		<>
			<header className={estilos.Header}>Tasa de Cambio Informal</header>
			<section>
				<Card
					dinero='285'
					image='/icons/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero='290'
					image='/icons/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero='252'
					image='/icons/mlc.jpeg'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
