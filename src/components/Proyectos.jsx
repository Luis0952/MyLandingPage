import React from 'react'


export const Proyectos = () => {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#0f2c58]'>
        <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-6xl font-bold inline border-b-4 text-gray-300 border-blue-600'> Mis Proyectos</p>
                <p className='mt-5'>Estos son mis proyectos más recientes..</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Efectos Hover */}
                    <div>
                        <span>

                        </span>

                        <div>
                            <a href="/">
                                <button></button>
                            </a>

                            <a href="/">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
