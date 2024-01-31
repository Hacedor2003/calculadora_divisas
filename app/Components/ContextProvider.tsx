'use client';
import React, { createContext, useEffect, useState } from 'react';
import { FetchingApi } from './FecthingApi';

export const ContextData = createContext(0);

export function ContextProvider({ children }: { children: any }) {
	const [contexto, setContexto] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await FetchingApi();
				setContexto(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return <ContextData.Provider value={contexto}>{children}</ContextData.Provider>;
}
