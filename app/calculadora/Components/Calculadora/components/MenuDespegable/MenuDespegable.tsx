import React, { useState } from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.dropdown}>
			<button
				onClick={handleToggle}
				className={styles.dropdownToggle}>
				Moneda
			</button>
			{isOpen && (
				<div className={styles.dropdownContent}>
					<p>USD</p>
					<p>MLC</p>
					<p>EURO</p>
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
