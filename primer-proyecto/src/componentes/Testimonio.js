import React from 'react';
import '../css/Testimonio.css';

/* se agrega props para recibir las propiedades */
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require('../imagenes/testimonio-emma.png')} alt='Foto de emma' />

      <div className='contenedor-texto-testimonio'>
        {/* Se reemplazan los campos para hacerlos dinamicos borrando el texto que tenian y agregando el nombre de los props correspondientes */}
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'> "{props.testimonio}"</p>
      </div>
    </div>
  );
}

//Para poder leerlo en otra parte de la aplicacion. Aqui se exporta solo una funcion.
export default Testimonio;

