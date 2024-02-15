import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import estilos from './styles/main_page.module.css';
import { NavBar } from './UI/NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Peliculas',
	description: 'Paginas Web para descargar las peliculas',
	generator: 'Next.js',
	manifest: '/manifest.json',
	keywords: ['peliculas'],
	authors: [
		{ name: 'Bryan Espinosa' },
		{
			name: 'Bryan Espinosa',
		},
	],
	icons: [
		{ rel: 'apple-touch-icon', url: '/calculadora 64x64.png' },
		{ rel: 'icon', url: '/calculadora 180x180.png' },
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
					<NavBar />
					{children}
				</main>
			</body>
		</html>
	);
}
