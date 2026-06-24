import './App.css'
import { useState } from 'react'

function App() {
  const [busqueda, setbusqueda]= useState('')
  const hacerbusqueda = (e) => {
      e.preventDefault()
      console.log("el ususario quiere buscar ",busqueda)
  }
  return (
    <div>
      <h1>Buscador de pelis </h1>
      <form>
        <input type="text"
        placeholder='escribe el nombre de tu pelicula'
        value={busqueda}
        onChange={(e) => setbusqueda(e.target.value)} />
        <button type='submit'>Buscar</button>
      </form>
    </div>

  )
}

export default App
