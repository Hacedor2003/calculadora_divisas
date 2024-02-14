import html2canvas from 'html2canvas';

export default function printDiv(nombreDiv: string) {
	var divElement = document.getElementById(nombreDiv);

	if (!divElement) {
		console.error('El elemento con el ID proporcionado no se encontró.');
		return;
	}

	html2canvas(divElement).then(function (canvas: any) {
		var imgData = canvas.toDataURL('image/png');

		var link = document.createElement('a');
		link.download = 'imagen.png';
		link.href = imgData;
		link.click();
	});
}
