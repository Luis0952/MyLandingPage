import { useState } from 'react'
import { About } from './components/About'
import { Contacto } from './components/Contacto'
import { Habilidades } from './components/Habilidades'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Piedepagina } from './components/Piedepagina'
import { Proyectos } from './components/Proyectos'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <Navbar/>
     <Home/>
     <About/>
     <Habilidades/>
     <Proyectos/>
     <Contacto/>
     <Piedepagina/>
    </div>
  )
}

export default App
