import { useEffect, useState } from 'react'
import axios from 'axios';
import "./App.css"
  
function App() {

  const [criptos, setCriptos] = useState();
  const API_URL = `${import.meta.env.VITE_API_URL}assets`;
  useEffect(() => {
    axios.get(API_URL)
    .then((data) => {
      console.log(data.data.data);
      setCriptos(data.data.data);
    })
    .catch(() => {
      console.error("La petición fallo");
    })
  }, []);

  //const [count, setCount] = useState(0)
  console.log(!criptos);
  if(!criptos) {
    return <span>Cargando...</span>
  }

  return (
    <>
      <h1>Lista de criptos</h1>
      <ol>
          { criptos.map(({id, name, priceUsd}) => (
            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
          ))}
      </ol>
    </>
  )
}

export default App
