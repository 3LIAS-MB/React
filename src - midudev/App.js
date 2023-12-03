import './App.css';
import Mensaje from './Mensaje';

// Lo primero que encuentra la funcion lo retorna
// Los modulos tienen que empezar con MAYUSCULA   
const Description = () => {
  return <p>Esta es una descripcion</p>
}

function App() { // const App = () => {}
  const mensaje = 'Hola, mundo'
  const a = 2
  const b = 3
  return (
    <div className="App">
      <Mensaje color='red' message = 'Estamos trabajando '/>
      <Mensaje color='blue' message = 'en un curso '/>
      <Mensaje color='green' message = 'de react'/>

      {mensaje + '. Evaluacion en JSX'}
      <br/>
      {a + b}
      <br/>
      <Description/>
    </div>
  );
}

export default App;
