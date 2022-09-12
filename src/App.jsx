import { useState } from 'react'
import { About } from './components/About'
import { Habilidades } from './components/Habilidades'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
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
    </div>
  )
}

export default App
