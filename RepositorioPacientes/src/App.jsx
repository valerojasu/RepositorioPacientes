import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Formulario from './Formulario'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header/>
     <Formulario/>
         <h1>Works</h1>
    </div>
  )
}

export default App
