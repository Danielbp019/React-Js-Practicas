import './App.css';
//Se importa el componente previamente exportado desde el archivo raiz para poder usarlo.
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        <Testimonio
          /* Estos con los props para pasar al componente testimonio */
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio={['Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en ', <strong>freeCodeCamp</strong>, ' me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.']}
        />

        <Testimonio
          /* Estos con los props para pasar al componente testimonio, se pueden agregar todos los que quiera siguiendo la plantilla de datos */
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio={[<strong>freeCodeCamp</strong>, ' fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.']}
        />

        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio={['Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. ', <strong>freeCodeCamp cambió mi vida.</strong>]}
        />

      </div>
    </div>
  );
}
/* Ojo! se puede poner en negrita partes del texto agregando {[]} a todo el texto y luego sacando el texto a cambiar e concatenando con una coma.

No se recomienda usar dangerouslySetInnerHTML porque puede abrirte a un ataque de cross-site scripting (XSS) si no estás sanitizando los valores de las propiedades
*/

/*
Opcion B, llenado por arreglo de datos.

function App() {

  const users = [
    {
      nombre:'Shawn Wang',
      pais:'Singapur',
      imagen:'Shawn',
      cargo:'Ingeniero de software',
      empresa:'Amazon',
      testimonio:'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'        
    },
    {
      nombre:'Sara Chima',
      pais:'Nigeria',
      imagen:'Sarah',
      cargo:'Ingeniero de software',
      empresa:'ChatDesk',
      testimonio:'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble' 
    },
    {
      nombre:'Emma Bostian',
      pais:'Suecia',
      imagen:'Emma',
      cargo:'Ingeniero de software',
      empresa:'Spotify',
      testimonio:'Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify'
    }
  ];

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1> 
        {
         users.map((user, index)=> {
          return (<Testimonio
                    key={index}
                    nombre={user.nombre}
                    pais={user.pais}
                    imagen={user.imagen}
                    cargo={user.cargo}
                    empresa={user.empresa}
                    testimonio={user.testimonio}    
                  />)
              })
        }
      </div>
    </div>
  );
}

export default App;
*/

export default App;
