import React from 'react'

export const About = () => {
  return (
    <div name ='about' className='w-full h-screen bg-[#0e223f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 '>
                <div>
                    <p className='text-6xl font-bold inline border-b-4 border-blue-500'>Acerca de </p>
                </div>
                <div> </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p className='mt-5'> Hola, por favor conoce algo acerca de mi...</p>
                </div>
                <div>
                    <p>
                        Soy un apasionado del desarrollo web, más enfocado en el Frontend.
                        Soy graduado de la Universidad CESMAG.
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}
