import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BarraNavegacion } from './UI/BarraNavegacion';
import estilos from './estilos.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Calculadora de Divisas',
	description: 'Pagina web para calcular las divisas de Cuba',
	generator: 'Next.js',
	manifest: '/manifest.json',
	keywords: ['divisas', 'calculadora de divisas'],
	authors: [
		{ name: 'Bryan Espinosa' },
		{
			name: 'Bryan Espinosa',
		},
	],
	icons: [
		{ rel: 'apple-touch-icon', url: '/icons/calculadora 64x64.png' },
		{ rel: 'icon', url: '/icons/calculadora 180x180.png' },
	],
};
export const viewport: Viewport = {
	themeColor: 'dark',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main className={estilos.Main}>
					{children}
					<BarraNavegacion />
				</main>
			</body>
		</html>
	);
}
