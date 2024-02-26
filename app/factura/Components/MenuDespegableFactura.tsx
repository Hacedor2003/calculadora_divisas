import React, { useState } from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenuFactura = ( ) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedMoneda, setSelectedMoneda] = useState("Seleccionar Moneda")

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleMonedaSelection = (moneda: string) => {
		setSelectedMoneda(moneda);
		handleToggle();
	};

	return (
		<div className={styles.dropdown}>
			<button
				onClick={handleToggle}
				type='button'
				className={styles.dropdownToggle}>
				{selectedMoneda}
			</button>
			{isOpen && (
				<ul className={styles.dropdownContent}>
					<li onClick={() => handleMonedaSelection('Transferencias en CUP')}>Transferencias en CUP</li>
					<li onClick={() => handleMonedaSelection('Transferencias en MLC')}>Transferencias en MLC</li>
				</ul>
			)}
		</div>
	);
};

export default DropdownMenuFactura;
