'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import useGetData from '../../Functions/GetData';

type Data = {
	data: { series: string[]; peliculas: string[] };
};

export const DataContext = createContext<Data>({ data: { series: [], peliculas: [] } });

export const useDataContext = (): Data => useContext(DataContext);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const data = useGetData();

	return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};
