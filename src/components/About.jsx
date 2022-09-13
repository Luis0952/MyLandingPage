import React from 'react'

export const About = () => {
  return (
    <div name ='about' className='w-full h-screen bg-[#1e447c] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 '>
                <div>
                    <p className='text-6xl font-bold inline border-b-4 border-blue-500'>Acerca de mi: </p>
                </div>
                <div> </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p className='mt-5'> Hola, conoce algo acerca de mi...</p>
                </div>
                <div>
                    <p className='1xl'>
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
