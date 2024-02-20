import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

type PantallaProps = {
	input: React.ReactNode;
};

const Pantalla: React.FC<PantallaProps> = ({ input }) => <div className='input'>{input}</div>;

export default Pantalla;
