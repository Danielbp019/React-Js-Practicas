import React from 'react';
import '../css/Testimonio.css';

/* se agrega props para recibir las propiedades */
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>

      {/* Se reemplaza las comillas a comillas investidas y se reemplaza el nombre del archivo de texto plano a props, todos los archivos tienen el mismo formato de texto en el nombre! por lo que funciona al solo cambiar el nombre de la imagen y dejar la extencion.
      Tambien se aplico un formato dinamico al ALT de la imagen, para que varie segun la imagen que se muestra */}
      <img className='imagen-testimonio' src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt={`Foto de ${props.imagen}`} />

      <div className='contenedor-texto-testimonio'>
        {/* Se reemplazan los campos para hacerlos dinamicos borrando el texto que tenian y agregando el nombre de los props correspondientes */}
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'> "{props.testimonio}"</p>
      </div>

    </div>
  );
}

//Para poder leerlo en otra parte de la aplicacion. Aqui se exporta solo una funcion.
export default Testimonio;

