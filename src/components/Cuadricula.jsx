import "./Cuadricula.css"
import Cripto from './cripto/Cripto';
import usePetition from '../hooks/usePetition';
  
function Cuadricula() {

  const [criptos] = usePetition("assets")

  if(!criptos) {
    return <span>Cargando...</span>
  }

  return (
    <div className='grid-container'>
      <h1>Lista de criptos</h1>
      <div className='cripto-container'>
          { 
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto key={id} 
                    id={id}
                    name={name} 
                    priceUsd = {priceUsd} 
                    symbol={symbol} 
                    changePercent24Hr={changePercent24Hr}/>
          ))
          }
      </div>
    </div>
  )
}

export default Cuadricula
