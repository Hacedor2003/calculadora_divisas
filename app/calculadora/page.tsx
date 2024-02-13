'use client';
import { useState } from 'react';
import estilos from '../estilos.module.css';
import { ViewCard } from './Components/ViewCard';

export default function Page() {
	const [valor, setValor] = useState<number | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [vista, setVista] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.valueAsNumber;
		if (inputValue >= 0 || Number.isNaN(inputValue)) {
			setValor(inputValue);
		}
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<header className={estilos.Header}>Calculadora Oculos Reparo</header>
			<article className={estilos.Article}>
				<label htmlFor='calculadora'>Valor:</label>
				<input
					type='number'
					id='calculadora'
					value={valor ? valor : ''}
					onChange={handleInputChange}
					autoFocus
					placeholder='Ingrese el monto'
				/>
				<div className='relative inline-block text-left m-2'>
					<button
						type='button'
						className='inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-teal-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
						id='options-menu'
						aria-haspopup='true'
						onClick={toggleDropdown}>
						Moneda:
						<svg
							className='-mr-1 ml-2 h-5 w-5'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'>
							<path
								fillRule='evenodd'
								d='M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z'
								clipRule='evenodd'
							/>
						</svg>
					</button>

					{isOpen && (
						<div
							className='origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'>
							<div
								className='py-1 w-fit'
								role='none'>
								<button
									type='button'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
									onClick={() => setVista('CUP')}>
									CUP
								</button>
								<button
									type='button'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
									onClick={() => setVista('USD')}>
									USD
								</button>
								<button
									type='button'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
									onClick={() => setVista('EUROS')}>
									EUROS
								</button>
								<button
									type='button'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
									onClick={() => setVista('MLC')}>
									MLC
								</button>
							</div>
						</div>
					)}
				</div>
			</article>
			<section>{ViewCard(vista, valor)}</section>
		</div>
	);
}
