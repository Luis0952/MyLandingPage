import React from "react";

export const Contacto = () => {
  return (
    <div
      name="contacto"
      className="w-full h-screen text-gray-300 bg-white flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-blue-700 text-blue-700">
          
            <span className="bg-blue-700 text-white px-1 text-6xl">C</span>
            ontacto{" "}
          </p>
          <p className="text-2xl font-bold  py-5 mt-5 text-blue-900">
            // Registrate en el siguiente formulario o enviame un correo
            electrónico{" "}
          </p>
        </div>
        <input className="my-2 p-4 bg-blue-100 rounded-lg" type="text" placeholder="Nombre" name="nombre" />
        <input className="my-2 p-4 bg-blue-100 rounded-lg" type="email" placeholder="Correo" name="correo" />
        <textarea className="my-2 p-4 bg-blue-100 rounded-lg" name="mensaje" id="" cols="30" rows="10" placeholder="mensaje">Mensaje: </textarea>
        <button className="bg-blue-800 text-2xl font-bold  rounded-full p-2 hover:bg-blue-700">Enviar</button>

      </form>
    </div>
  );
};
