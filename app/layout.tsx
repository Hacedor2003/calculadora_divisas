import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
<<<<<<< HEAD
import estilos from './styles/main_page.module.css';
import { NavBar } from './UI/NavBar/NavBar';
import { Footer } from './UI/Footer/Footer';
import { DataProvider } from './store/DataContext';
=======
import { BarraNavegacion } from './UI/BarraNavegacion';
import estilos from './estilos.module.css';
import { ContextProvider } from './store/ContextProvider';
>>>>>>> parent of 53ff688 (Prueba de estilos Mas Vistos)

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
<<<<<<< HEAD
					<DataProvider>
						<NavBar />
						{children}
						<Footer />
					</DataProvider>
=======
					<ContextProvider>{children}</ContextProvider>
					<BarraNavegacion />
>>>>>>> parent of 53ff688 (Prueba de estilos Mas Vistos)
				</main>
			</body>
		</html>
	);
}
