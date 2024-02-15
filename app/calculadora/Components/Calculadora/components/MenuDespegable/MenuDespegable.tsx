import React, { useState } from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = ({ setSelectedMoneda }: { setSelectedMoneda: Function }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
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
					<p onClick={() => setSelectedMoneda('USD')}>USD</p>
					<p onClick={() => setSelectedMoneda('MLC')}>MLC</p>
					<p onClick={() => setSelectedMoneda('EURO')}>EURO</p>
					<p onClick={() => setSelectedMoneda('CUP')}>CUP</p>
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
