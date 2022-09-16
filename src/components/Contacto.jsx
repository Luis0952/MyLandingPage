import React from "react";

export const Contacto = () => {
  return (
    <div
      name="contacto"
      className="w-full h-screen text-gray-300 bg-white flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/3f003185-1dec-4d8a-bcaf-9f0d9bcfccf7"
        className="rounded-lg shadow-lg shadow-blue-400 flex flex-col max-w-[600px] w-full border-2 border-blue-300 p-5"
      >
        <div className="pb-8 ">
          <p className=" text-6xl font-bold inline border-b-4 border-blue-700 text-blue-700 m-40">
            <span className="bg-blue-700 text-white px-1 text-6xl ">C</span>
            ontacto{" "}
          </p>
          <p className="text-2xl font-bold  py-5 mt-5 text-blue-900">
            // Registrate en el siguiente formulario o enviame un correo
            electrónico{" "}
          </p>
        </div>

        <input
          className="my-2 p-4 bg-blue-200 rounded-lg text-black capitalize required"
          type="text"
          placeholder="Nombre"
          name="nombre"
        />
        <input
          className="my-2 p-4 bg-blue-200 rounded-lg text-black capitalize required"
          type="email"
          placeholder="Correo"
          name="correo"
        />
        <textarea
          className="my-2 p-4 bg-blue-200 rounded-lg  text-black capitalize required"
          name="mensaje"
          id=""
          cols="30"
          rows="10"
          placeholder=""
        >
          Mensaje:{" "}
        </textarea>
        <button className="bg-blue-800 text-2xl font-bold  rounded-full p-2 hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </div>
  );
};
