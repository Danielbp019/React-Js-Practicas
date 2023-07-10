import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
/* Se importa la imagen directamente de la carpeta de imagenes y luego se usa como variable */
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
/* Se importa el hook para su uso */
import { useState } from 'react';

function App() {

  /* Hook. numClics de Contador.jsx*/
  const [numClics, setNumClics] = useState(0);

  /* funcion flecha */
  const manejarClic = () => {
    setNumClics(numClics + 1);
    /* console.log('Clic'); */
  }

  const reiniciarContador = () => {
    setNumClics(0);
    /* console.log('Reiniciar'); */
  }

  return (
    <div className='App'>

      <div className='freecodecamp-logo-contenedor'>
        {/* Aqui se usa como variable la imagen importada */}
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo' />
      </div>

      <div className='contenedor-principal'>

        <Contador numClics={numClics} />

        {/* Como si es el boton de clic el que aumenta la cuenta se le asigna el valor true para que lo envie a Boton.jsx */}
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          /* Cuando se pulsa, se ejecuta la funcion flecha de más arriba */
          manejarClic={manejarClic}
        />
        {/* Como es el boton de reiniciar la cuenta se le asigna el valor false para que lo envie a Boton.jsx */}
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          /* Cuando se pulsa, se ejecuta la funcion flecha de más arriba */
          manejarClic={reiniciarContador}
        />
      </div>

    </div>
  );
}

export default App;
