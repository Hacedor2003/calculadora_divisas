export default function estilos_carta_mas_vistos() {
	const lista = document.getElementsByClassName('mas_vistos_lista_Mas_Vistos__kmDci');
	for (let index = 0; index < lista.length; index++) {
		const lista_li = lista.item(index)?.getElementsByTagName('li');
		if (lista_li) {
			for (let index1 = 0; index1 < lista_li.length; index1++) {
				const element = lista_li.item(index1);
				element.style.zIndex = index1;
				//element.setAttribute('class', 'estilo_apilado')
			}
		}
	}
}
