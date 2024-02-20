/** @type {import('next').NextConfig} */

// Opciones de configuración para Next.js
const nextConfig = {
	reactStrictMode: true, // Habilitar el modo estricto de React para un manejo de errores mejorado
	swcMinify: true, // Habilitar la minificación SWC para mejorar el rendimiento
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production', // Eliminar console.log en producción
	},
};

// Objeto de configuración para el plugin next-pwa
const withPWA = {
	pwa: {
		dest: 'public', // Directorio de destino para los archivos de la PWA
		disable: process.env.NODE_ENV === 'development', // Deshabilitar la PWA en modo de desarrollo
		register: true, // Registrar el service worker de la PWA
		skipWaiting: true, // Omitir la espera de la activación del service worker
	},
};

// Exportar la configuración combinada para Next.js con soporte de PWA
module.exports = {
	...nextConfig,
	...withPWA,
};
