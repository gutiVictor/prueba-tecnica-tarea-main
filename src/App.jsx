import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main style={{ backgroundColor: 'lightgray', padding: '20px', textAlign: 'center' }}> {/* agrege stilos al main */}
      <h1>App de gatitos</h1>


      {/* agrege estilos al boton */}
      <button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
        Get new fact
      </button>


      {fact && <p>{fact}</p>}


      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
