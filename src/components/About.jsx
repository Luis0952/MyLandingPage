import React from 'react'
import ReactPlayer from 'react-player'
import ReactJS from '../assets/LOGOS/Logo-React.png'
import Github from '../assets/LOGOS/Logo_Github.png'

export const About = () => {
  return (
    <div name ='about' className='w-full h-screen bg-blue-900 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 '>
                <div>
                    <p 
                    className=' text-6xl font-bold inline border-b-4 border-white-500 text-white '>
                        <span className='bg-white text-blue-600 '>A</span>cerca de mi: </p>
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 border-2 m-6 rounded-lg bg-white shadow-sm shadow-black my-10'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p className='mt-8 text-blue-700 transform hover:-translate-y-4 duration-500'> Hola, conoce algo acerca de mi...</p>
                </div>
                <div>
                    <p className='  text-2xl text-justify text-blue-700 font-semibold p-5 transform hover:-translate-y-4 duration-500'>
                    Ingeniero de Sistemas con conocimientos en el Desarrollo Web en el área del Front-End, manejo de Java-
                    Script, CSS, HTML, React-Js, TailwindCss;  Muy dinámico, pro-activo, con gran
                    capacidad de trabajar en equipo, con muchas ganas de aprender, de adquirir nuevos conocimientos y de
                    ampliar los que ya he adquirido, enfocándome en el Desarrollo Frontend.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
