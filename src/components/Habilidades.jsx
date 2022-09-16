import React from 'react'

import Logo_Html from '../assets/logo_Html.png'
import Logo_JS from '../assets/Logo_JS.png'
import Logo_React from '../assets/Logo-React.png'
import Logo_Github from '../assets/Logo_Github.png'
import Logo_Tailwind from '../assets/LOGOS/LOGO_TAILWIND_CSS.png'
import Logo_CSS from '../assets/LOGOS/LOGO_CSS.png'

export const Habilidades = () => {
  return (
    <div name="habilidades" className='bg-white'>
        {/* Contenendor */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-7xl text-blue-950 font-bold mb-5 inline border-b-8 border-blue-600 '>Experiencia y Habilidades</p>
                <p className='text-blue-900 font-bold mt-10 text-2xl transform hover:-translate-y-4 duration-500'>Estos son los Lenguajes y tecnologías que he trabajado</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 border-4 shadow-lg p-10 mt-5'>   
                <div className='border-4 p-5 rounded-lg shadow-lg hover:scale-110 hover:border-blue-300 duration-500 '>
                    <img className='w-25 mx-auto' src={Logo_Html} alt="logo_html" />
                    <p className='font-bold text-blue-800'>HTML</p>
                </div>

                <div className='border-4 p-5 rounded-lg shadow-lg hover:scale-110 hover:border-blue-300 duration-500'>
                    <img className='w-25 mx-auto' src={Logo_JS} alt="logo_Js" />
                    <p className='font-bold text-blue-800'>Java Script</p>
                </div>

                <div className='border-4 p-5 rounded-lg shadow-lg hover:scale-110 hover:border-blue-300 duration-500'>
                    <img className='w-25 mx-auto' src={Logo_React} alt="logo_react" />
                    <p className='font-bold text-blue-800'>React JS</p>
                </div>

                <div className='border-4 p-5 rounded-lg shadow-lg hover:scale-110 hover:border-blue-300 duration-500'>
                    <img className='w-25 mx-auto' src={Logo_Github} alt="logo_github" />
                    <p className='font-bold text-blue-800'>Git-Hub</p>
                </div>
        {/* LOGO TAILWINDCSS */}
                <div className='border-4 p-5 rounded-lg shadow-lg hover:scale-110 hover:border-blue-300 duration-500'>
                    <img className='w-25 mx-auto' src={Logo_Tailwind} alt="logo_tailwind" />
                    <p className='font-bold text-blue-800'>TailwindCSS</p>
                </div>

                <div className='border-4 p-5 rounded-lg shadow-lg hover:scale-110 hover:border-blue-300 duration-500'>
                    <img className='w-25 mx-auto' src={Logo_CSS} alt="logo_css" />
                    <p className='font-bold text-blue-800'>CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}
