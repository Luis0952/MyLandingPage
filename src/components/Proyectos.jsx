import React from "react";
import APP_CREACIONTAREAS from "../assets/APP_CREACIONTAREAS.png";
import APP_SIMTRELLO from "../assets/APP_SIMTRELLO.jpg";
import JUEGO_AHORCADO_TS from "../assets/JUEGO_AHORCADO_TS.png";
import LISTADO_CONTACTOS_API from "../assets/LISTADO_CONTACTOS_API.png";
import VALIDACION_FORMULARIO from "../assets/VALIDACION_FORMULARIO.png";
import FONDO_PARTICULAS from "../assets/FONDO_PARTICULAS.jpg";
import ReactPlayer from "react-player";
import Piso from "../assets/videos/Piso.mp4";
import Video_Formulario from "../assets/videos/DEMO_FORMULARIO_VALIDACION.mp4";
import Video_Lista_Contactos from "../assets/videos/DEMO_LISTA_CONTACTOS.mp4";
import Video_Ahorcado from "../assets/videos/DEMO-AHORCADO.mp4";
import Video_AppTareas from "../assets/videos/DEMO-APPTAREAS-CRUD.mp4";
import Video_Trello from "../assets/videos/DEMO-APPTRELLO.mp4";

export const Proyectos = () => {
  return (
    <div
      name="proyectos"
      className="w-full md:h-screen text-gray-300 bg-[#0f2c58]"
    >
      <div className="max-w-[700px] mx-auto flex flex-col justify-center items-center w-full h-full ">
        <div className="pb-2">
          <p className="text-6xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            {" "}
            Mis Proyectos
          </p>
          <p className="py-6">Estos son mis proyectos más recientes..</p>
        </div>

        <div className="m-0  bg-blue-100 grid sm:grid-cols-2 md:grid-cols-3 gap-4 border-2 shadow-md shadow-black border-blue-900 rounded-lg  w-max p-2">
          <div className="bg-black rounded-lg">
            <h2 className="text-center text-blue-500 font-bold p-1 rounded-lg">
              Aplicación realizada en JS, HTML, TailwindCss y ReactJS
            </h2>

            {/* Grid */}
            <div
              style={{ backgroundImage: `url(${APP_CREACIONTAREAS})` }}
              className="mt-0 m-5 mb-2 shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Efectos Hover */}
              <div className="opacity-0 group-hover:opacity-100  ml-1 mb-0">
                <ReactPlayer
                  url={Video_AppTareas}
                  controls
                  width="370px"
                  height="200px "
                />
                <div className="pt-0 text-center">
                <a href="https://github.com/Luis0952/App-ToDo" a>

                  <button className=" text-center rounded-lg px-1 mt-1 bg-blue-700 text-white text-md w-full">
                    App To-Do-Ir al Código{" "}
                  </button>
                </a>
                </div>
              </div>
            </div>
          </div>

          {/* fin 1 tarjeta */}
          <div className="bg-black rounded-lg">
            <h2 className="text-center font-bold p-1  text-blue-500">
              Simulacion Trello-Se usó JS-HTML y CSS
            </h2>

            {/* Grid */}
            <div
              style={{ backgroundImage: `url(${APP_SIMTRELLO})` }}
              className="mt-0 m-5 mb-2 shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Efectos Hover */}
              <div className="opacity-0 group-hover:opacity-100  ml-1 mb-0">
                <ReactPlayer
                  url={Video_Trello}
                  controls
                  width="370px"
                  height="200px "
                />
                <div className="pt-0 text-center">
                  <a href="https://github.com/Luis0952/AppTrelloSimulacion" target="_blank">
                  <button className=" text-center rounded-lg px-1 mt-1 bg-blue-700 text-white text-md w-full">
                    App Trello-Ir al Código{" "}
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="bg-black rounded-lg">
            <h2 className="text-center font-semibold p-1 rounded-lg text-blue-500">
              App hecha en JS, HTML, TailwindCss, ReactJS y Type Script
            </h2>

            {/* Grid */}
            <div
              style={{ backgroundImage: `url(${JUEGO_AHORCADO_TS})` }}
              className="mt-0 m-5 mb-2 shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Efectos Hover */}
              <div className="opacity-0 group-hover:opacity-100  ml-1 mb-0">
                <ReactPlayer
                  url={Video_Ahorcado}
                  controls
                  width="370px"
                  height="200px "
                />
                <div className="pt-0 text-center">
                  <a href="https://github.com/Luis0952/Juego-ahorcado" target="_blank">
                    <button className=" text-center rounded-lg px-1 mt-1 bg-blue-700 text-white text-md w-full">
                      App Juego Ahorcado-Ir al Código
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="bg-black rounded-lg">
            <h2 className="text-center text-blue-500 font-bold p-1 rounded-lg">
              App realizada en JS, HTML, TailwindCss y ReactJS
            </h2>

            {/* Grid */}
            <div
              style={{ backgroundImage: `url(${LISTADO_CONTACTOS_API})` }}
              className="mt-0 m-5 mb-2 shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Efectos Hover */}
              <div className="opacity-0 group-hover:opacity-100  ml-1 mb-0">
                <ReactPlayer
                  url={Video_Lista_Contactos}
                  controls
                  width="370px"
                  height="200px "
                />
                <div className="pt-0 text-center">
                  <a
                    href="https://github.com/Luis0952/ListaContactos"
                    target="_blank"
                  >
                    <button className=" text-center rounded-lg px-1 mt-1 bg-blue-700 text-white text-md w-full">
                      App To-Do-Ir al Código{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-black rounded-lg">
            <h2 className="text-center text-blue-500 font-bold p-1 rounded-lg">
              Aplicación realizada en JS, HTML, TailwindCss y ReactJS
            </h2>

            {/* Grid */}
            <div
              style={{ backgroundImage: `url(${VALIDACION_FORMULARIO})` }}
              className="mt-0 m-5 mb-2 shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Efectos Hover */}
              <div className="opacity-0 group-hover:opacity-100  ml-1 mb-0">
                <ReactPlayer
                  url={Video_Formulario}
                  controls
                  width="370px"
                  height="200px "
                />
                <div className="pt-0 text-center">
                  <a
                    href="https://github.com/Luis0952/Juego-ahorcado"
                    target="_blank"
                  >
                    <button className=" text-center rounded-lg px-1 mt-1 bg-blue-700 text-white text-md w-full">
                      App To-Do-Ir al Código{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};
