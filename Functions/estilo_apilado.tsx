export default function estilo_apilado() {
	const lista = document.getElementsByClassName('categorias_Categorias__5bOUy');
	for (let index = 0; index < lista.length; index++) {
		const lista_li = lista.item(index)?.getElementsByTagName('ul').item(0)?.getElementsByTagName('li');
		if (lista_li) {
			for (let index1 = 0; index1 < lista_li.length; index1++) {
				const element = lista_li.item(index1);
				element.style.position = 'absolute';
				element.style.transition = '0.5s all ease';
				element.style.left = 70 * index1 + 'px';
				//element.setAttribute('class', 'estilo_apilado')
			}
		}
	}
}
