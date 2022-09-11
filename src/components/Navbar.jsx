import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo_LR from '../assets/Logo_LR.png'


export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick=()=>setNav(!nav)

  return (
    <div 
    className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo_LR} alt="Image Java Script" style={{width:'100px'}}/>
        </div>

        
            <ul 
            className='hidden md:flex'>
                <li>Inicio</li>
                <li>Estudios</li>
                <li>Habilidades</li>
                <li>Proyectos</li>
                <li>Contactos</li>
            </ul>
        

        {/* Menu Hamburguesa */}
        <div 
        onClick={handleClick}
        className='md:hidden z-10'
        >
            {!nav?<FaBars />:<FaTimes/>}
        </div>
        {/* Menu Mobile */}
            <ul 
            className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Inicio</li>
                <li className='py-6 text-4xl'>Estudios</li>
                <li className='py-6 text-4xl'>Habilidades</li>
                <li className='py-6 text-4xl'>Proyectos</li>
                <li className='py-6 text-4xl'>Contactos</li>
            </ul>
        {/* Redes Sociales */}
        <div 
            className='hidden fixed flex-col top-[35%] left-0'>
            <ul>
                <li 
                className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='rounded-lg flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-15px]  duration-300  bg-blue-500 p-2 font-bold'
                    href="/">
                        Linkedin <FaLinkedin size={40}/>
                    </a>
                </li>

                <li 
                className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-15px] duration-300 bg-blue-600 p-1 rounded-lg font-bold'
                    href="/">
                        Facebook <FaFacebook size={40}/>
                    </a>
                </li>

                <li 
                    className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-15px] duration-300 bg-blue-1000 p-1 rounded-lg font-bold border-2'
                    href="/">
                        GitHub <FaGithub size={40}/>
                    </a>
                </li>

                <li 
                    className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-15px] duration-300 bg-blue-800 p-1 rounded-lg font-bold'
                    href="/">
                        Correo <HiOutlineMail size={40}/>
                    </a>
                </li>

                <li 
                    className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-15px] duration-300 bg-blue-900 p-1 rounded-lg font-bold'
                    href="/">
                        Resumen <BsFillPersonLinesFill size={40}/>
                    </a>
                </li>
            </ul>    
        </div>

    </div>
  )
}
