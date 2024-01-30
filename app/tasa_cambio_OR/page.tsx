import { Card } from '../UI/Card';
import estilos from '../estilos.module.css'

export default function Page() {
	return (
		<>
			<header className={estilos.Header}>Tasa de Oculos Reparo</header>
			<section>
				<Card
					dinero='285'
					image='/public/icons/usa.webp'
					moneda='USD'
				/>
				<Card
					dinero='290'
					image='/public/icons/euro.webp'
					moneda='EURO'
				/>
				<Card
					dinero='252'
					image='/public/icons/mlc.jpeg'
					moneda='MLC'
				/>
			</section>
		</>
	);
}
