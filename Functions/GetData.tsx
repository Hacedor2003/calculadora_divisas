import { useEffect, useState } from 'react';

const useGetData = () => {
	const [series, setSeries] = useState<string[]>([]);
	const [peliculas, setPeliculas] = useState<string[]>([]);

	useEffect(() => {
		fetch('http://localhost:4000/getSeriesNetflix')
			.then((response) => response.json())
			.then((data) => {
				const filteredLinks = data.links.filter((link: string) => link !== '?C=N;O=D' && !link.includes('/Series/'));
				setSeries(filteredLinks.map((link: string) => decodeURIComponent(link).replace(/\/$/, '')));
			})
			.catch((error) => console.error(error));
		fetch('http://localhost:4000/getPeliculas')
			.then((response) => response.json())
			.then((data) => {
				const filteredLinks = data.links.filter((link: string) => link !== '?C=N;O=D' && !link.includes('/Series/'));
				setPeliculas(filteredLinks.map((link: string) => decodeURIComponent(link).replace(/\/$/, '')));
			})
			.catch((error) => console.error(error));
	}, []);

	return {
		series,
		peliculas,
	};
};

export default useGetData;
