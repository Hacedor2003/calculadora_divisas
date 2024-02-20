import React, { useState } from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = ({ setSelectedMoneda }: { setSelectedMoneda: Function }) => {
	const [isOpen, setIsOpen] = useState(false);

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
				Moneda
			</button>
			{isOpen && (
				<ul className={styles.dropdownContent}>
					<li onClick={() => handleMonedaSelection('USD')}>USD</li>
					<li onClick={() => handleMonedaSelection('MLC')}>MLC</li>
					<li onClick={() => handleMonedaSelection('EURO')}>EURO</li>
					<li onClick={() => handleMonedaSelection('CUP')}>CUP</li>
				</ul>
			)}
		</div>
	);
};

export default DropdownMenu;
