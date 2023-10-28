import React from 'react';
import '../componentes/Boton.css';

function Boton(props) {

    const esOperador = valor => {
        /* El retorno es una evaluacion, si no es un numero 'isNaN(valor)', si no es un punto y si no es igual */
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    };

    return (
        /* si la llamada a la clase esOperador es falsa no hara cambios pero si es verdadera se reempleza por operador */
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
            {props.children}
        </div>
    );
}

export default Boton;