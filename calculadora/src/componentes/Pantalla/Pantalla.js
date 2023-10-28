import React from 'react';

import '../Pantalla/Pantalla.css'

/* Se usa para componentes sencillos. Se define un componente como una funcion flecha */
const Pantalla = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;