import React from 'react';

export default function Layout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <section id='page_cambio_informal'>{children}</section>;
}
