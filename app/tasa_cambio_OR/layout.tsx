export default function Layout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <section id='page_oculos_reparo'>{children}</section>;
}
