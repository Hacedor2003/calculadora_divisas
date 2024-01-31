import axios from 'axios';
import React, { createContext } from 'react';

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
		};

		return moneda;
	} catch (error) {
		console.error(error);
		//return { moneda: { error: error.message } };
	}
};