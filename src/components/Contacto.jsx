import React from "react";

export const Contacto = () => {
  return (
    <div
      name="contacto"
      className="w-full h-screen text-gray-300 bg-white flex justify-center items-center pt-10"
    >
      <form
        method="POST"
        action="https://getform.io/f/3f003185-1dec-4d8a-bcaf-9f0d9bcfccf7"
        className=" md:mt-[10px] mt-[100px] md:mb-[30px] rounded-lg shadow-lg shadow-blue-400 flex flex-col max-w-[500px] md:h-screen h-[450px] border-2 
        border-blue-300 p-5 bg-blue-100"
      >
        <div className="pb-8 ">
          <p className=" text-5xl font-bold inline border-b-4 border-blue-700 text-blue-700 ">
            <span className="bg-blue-700 text-white px-1 text-5xl ">C</span>
            ontacto{" "}
          </p>
          <p className="md:text-2xl text-1xl text-center font-semibold md:py-2 py-1 mt-2 text-blue-900">
            Registrate en el siguiente formulario o enviame un correo
            electrónico al <span className="font-bold text-blue-600">luchorosalesc6@gmail.com</span> {" "}
          </p>
        </div>

        <label className="relative ">
          <input
            className="my-1 mt-0 md:p-4  p-1 bg-white border-b-4 border-blue-600 rounded-lg text-black capitalize 
            required w-full md:h-full h-10 outline-none  border-opacity-50 focus:border-blue-500 focus:text-black"
            type="text"
            placeholder="Nombre"
            name="nombre"
          />
            <span className="text-3xl   text-white  text-opacity-50 absolute left-0 top-7 mx-2 px-2 
                  transition duration-200 input-text">Nombre completo </span>
         </label>

        <label className="relative ">
          <input
            className="my-1 mt-1 md:p-4  p-1 bg-white border-b-4  border-blue-600 rounded-lg text-black capitalize required 
            outline-none  border-opacity-50 focus:border-blue-500 focus:text-black w-full"
            type="email"
            placeholder="Correo"
            name="correo"
            />
            <span className="text-3xl  text-white text-opacity-50 absolute left-0 top-7 mx-2 px-2 
                  transition duration-200  input-text">Correo electrónico </span>
        </label>

        <textarea
          className="my-2 p-4 bg-white rounded-lg  text-black capitalize mt-4 border-b-4 
          shadow-blue-200  border-blue-500 outline-none  border-opacity-50 focus:border-blue-500 focus:text-black"
          name="mensaje"
          id="message"
          cols="20"
          rows="10"
          placeholder="Mensaje"
        >
         
        </textarea>
        <button className="bg-blue-800 text-2xl font-bold text-white rounded-full hover:bg-blue-700 mt-2">
          Enviar
        </button>
      </form>
    </div>
  );
};
