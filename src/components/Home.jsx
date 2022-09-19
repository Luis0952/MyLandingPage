import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";
import Particulas from '../assets/LOGOS/FONDO_PARTICULAS.jpg'
import HTML_CSS_JS from '../assets/LOGOS/HTML_CSS_JS.png'


export const Home = () => {
  return (
    <div name="home" className=" flex h-screen bg-[#0a192f]">
      {/* Contenido */}

     

        <div className=" max-w-[800px] mx-auto px-50 md:px-40 px-40 flex flex-col 
        justify-center h-full " >

          <p className="text-blue-100 text-2xl">Hola, mi Nombre es </p>
          <h1 className="md:text-2xl sm:text-4xl font-bold text-gray-100">
            {" "}
            Luis Rosales{" "}
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-400">
            Soy Ingeniero de Sistemas
          </h2>
          <p className="pt-3 text-white text-2xl py-4 max-w-[700px] border-2 shadow-sm shadow-white 
          px-4 mt-8 mb-8 rounded-lg hover:bg-white hover:text-[#0a192f] 
          hover:font-bold duration-700 ">
            {" "}
            Me dedico al Desarrollo Web Frontend, egresado de la Universidad
            CESMAG a finales del año 2020. 
          </p>
          <div>
            <button className=" transform hover:-translate-y-4 duration-500 text-2xl group flex items-center border-2 rounded-full px-4 py-1 mt-3 text-white hover:bg-blue-600 hover:">
            
              <Link to="proyectos" smooth={true} duration={500}>
              {" "} Mis Proyectos
              </Link>
              <span className="group-hover:rotate-90  duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </div>
        </div>
    

      

    </div>

    
  );
};
