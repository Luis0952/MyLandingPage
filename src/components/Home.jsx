import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ReactPlayer from "react-player";
import Piso from '../assets/Piso.mp4'

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]" >
  
      {/* Contenido */}
      <div className="max-w-[1000px] mx-auto px-20 md:px-10 flex flex-col justify-center h-full">
        <p className="text-blue-100 text-2xl">Hola, mi Nombre es </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-100">
          {" "}
          Luis Rosales{" "}
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-400">
          Soy Ingeniero de Sistemas
        </h2>
        <p className="pt-3 text-white text-1xl py-4 max-w-[700px]">
          {" "}
          Me dedico al Desarrollo Web Frontend, egresado de la Universidad CESMAG.
        </p>
        <div>
          <button className=" group flex items-center border-2 rounded-full px-4 py-1 mt-3 text-white hover:bg-blue-600 hover:">
            Mira mi trabajo
            <span className="group-hover:rotate-90  duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
