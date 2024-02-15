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
				<div className={styles.dropdownContent}>
					<p onClick={() => handleMonedaSelection('USD')}>USD</p>
					<p onClick={() => handleMonedaSelection('MLC')}>MLC</p>
					<p onClick={() => handleMonedaSelection('EURO')}>EURO</p>
					<p onClick={() => handleMonedaSelection('CUP')}>CUP</p>
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
