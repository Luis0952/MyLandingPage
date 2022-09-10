import React from 'react'
import Logo_LR from '../assets/Logo_LR.png'

export const Navbar = () => {
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo_LR} alt="Image Java Script" style={{width:'100px'}}/>
        </div>

        <div>
            <ul>
                <li>Inicio</li>
                <li>Estudios</li>
                <li>Habilidades</li>
                <li>Proyectos</li>
                <li>Contactos</li>
            </ul>
        </div>

        {/* Menu Hamburguesa */}
        <div></div>
        {/* Menu Mobile */}
        

    </div>
  )
}
