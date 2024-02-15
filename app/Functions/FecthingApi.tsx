import axios from 'axios';

export const FetchingApi = async () => {
	const configUSD = {
		method: 'get',
		url: 'https://exchange-rate.decubba.com/api/v2/informal/source/usd.json',
	};
	const configEURO = {
		method: 'get',
		url: 'https://exchange-rate.decubba.com/api/v2/informal/source/eur.json',
	};
	const configMLC = {
		method: 'get',
		url: 'https://exchange-rate.decubba.com/api/v2/informal/source/mlc.json',
	};

	try {
		const [responseUSD, responseEURO, responseMLC] = await Promise.all([axios(configUSD), axios(configEURO), axios(configMLC)]);

		const moneda = {
			usd: responseUSD.data.rates.CUP.sell,
			euro: responseEURO.data.rates.CUP.sell,
			mlc: responseMLC.data.rates.CUP.sell,
			cup: {
				usd: responseUSD.data.rates.CUP.buy,
				euro: responseEURO.data.rates.CUP.buy,
				mlc: responseMLC.data.rates.CUP.buy,
			},
			status: responseUSD.statusText,
		};

		return moneda;
	} catch (error: any) {
		console.error(error);
		return {
			usd: 0,
			euro: 0,
			mlc: 0,
			cup: {
				usd: 0,
				euro: 0,
				mlc: 0,
			},
			status: error ? error.message : error,
		};
	}
};
