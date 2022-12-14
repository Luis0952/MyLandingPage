import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo_LR from '../assets/Logo_LR.png'
import {Link} from 'react-scroll'
import Piso from '../assets/videos/Piso.mp4'
import ReactPlayer from 'react-player'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick=()=>setNav(!nav)

  return (
    <div 
    className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-blue-950 text-gray-300 shadow-md shadow-white rounded-b-lg'>
        <div>
            <img src={Logo_LR} alt="Image Java Script" style={{width:'100px'}}/>
        </div>

        
            <ul 
            className='hidden md:flex text-2xl'>
                <li className='inline hover:border-b-2'>
                <Link to="home" smooth={true} duration={500}>
                inicio
                </Link>
                </li>
                <li className='inline hover:border-b-2'>
                <Link to="about" smooth={true} duration={500}>
                Acerca de
                </Link>
                </li>
                <li className='inline hover:border-b-2'>
                <Link to="habilidades" smooth={true} duration={500}>
                Habilidades
                </Link>
                </li>
                <li className='inline hover:border-b-2'>
                <Link to="proyectos" smooth={true} duration={500}>
                Proyectos
                </Link>
                </li>
                <li className='inline hover:border-b-2'>
                <Link to="contacto" smooth={true} duration={500}>
                Contacto
                </Link>
                </li>
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
            className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                inicio
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                Acerca de
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="habilidades" smooth={true} duration={500}>
                Habilidades
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="proyectos" smooth={true} duration={500}>
                Proyectos
                </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contacto" smooth={true} duration={500}>
                Contacto
                </Link></li>
            </ul>
        {/* Redes Sociales */}
        <div 
            className='fixed flex-col top-[35%] left-0'>
            <ul>
                <li 
                className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='rounded-lg flex justify-between items-center w-full text-gray-300  ml-[-100px] hover:ml-[-15px]  duration-300  bg-blue-500 p-2 font-bold'
                    href="https://www.linkedin.com/in/luis-eduardo-rosales-80070724b" target="_blank">
                        Linkedin <FaLinkedin size={40}/>
                    </a>
                </li>

                <li 
                className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300  ml-[-100px] hover:ml-[-15px] duration-300 bg-blue-600 p-1 rounded-lg font-bold'
                    href="https://es-la.facebook.com/" target="_blank">
                        Facebook <FaFacebook size={40} />
                    </a>
                </li>

                <li 
                    className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300  ml-[-100px] hover:ml-[-15px] duration-300 bg-blue-1000 p-1 rounded-lg font-bold border-2'
                    href="https://github.com/Luis0952" target="_blank">
                        GitHub <FaGithub size={40} />
                    </a>
                </li>

                <li 
                    className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300  ml-[-100px] hover:ml-[-15px] duration-300 bg-blue-800 p-1 rounded-lg font-bold'
                    href="https://www.gmail.com/" target="_blank">
                        Correo <HiOutlineMail size={40}/>
                    </a>
                </li>

                <li 
                    className='w-[160px] h-[60px] flex justify-between items-center'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300  ml-[-100px] hover:ml-[-15px] duration-300 bg-blue-900 p-1 rounded-lg font-bold'
                    href="/">
                        Resumen <BsFillPersonLinesFill size={40}/>
                    </a>
                </li>
            </ul>    
        </div>

    </div>
  )
}
