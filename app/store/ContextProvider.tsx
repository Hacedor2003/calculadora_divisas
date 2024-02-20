'use client';
import React, { createContext, useEffect, useState } from 'react';
import { FetchingApi } from '../Functions/FecthingApi';

type ContextType =
	| {
			usd: any;
			euro: any;
			mlc: any;
			cup: { usd: any; euro: any; mlc: any };
			status: string;
	  }
	| undefined;
export const ContextData = createContext<ContextType>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
	const [contexto, setContexto] = useState<ContextType>(undefined);

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
