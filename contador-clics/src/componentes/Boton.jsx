import React from 'react';
import '../css/Boton.css';

/* 
1. Se acorta el props con des estructuracion usando una sintaxis que se usa normalmente 
2. manejarClic es un event listener
*/
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    /* La clase en el boton usa un operador ternario, que decide con base a esBotonDeClic, si es verdadero se vuelve clic y si es falso reiniciar  */
    <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;