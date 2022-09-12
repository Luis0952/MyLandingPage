import { useState } from 'react'
import { About } from './components/About'
import { Habilidades } from './components/Habilidades'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <Navbar/>
     <Home/>
     <About/>
     <Habilidades/>
    </div>
  )
}

export default App
