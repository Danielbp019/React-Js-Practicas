import React from 'react';
import '../Boton-limpiar/BotonClear.css';

const BotonClear = (props) => (
    <div className='boton-clear'>
        {props.children}
    </div>
);

export default BotonClear;