import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Piedepagina = () => {
  return (
    <div className="bg-blue-900 pl-5 mt-5">
      <div className="w-1/2 flex  items-center pt-5 pb-5">
       
        <h1 className="font-semibold text-white  text-2xl">
          Correo electronico: <span className="underline text-2xl">luchorosalesc6@gmail</span> 
        </h1>
      

      <div className="flex  items-center pt-5 pb-5 border-2 rounded-lg shadow-sm shadow-white mt-5 ml-10">
        <li className="w-[260px] h-[60px] flex justify-between items-center">
          <a
            className=" text-2xl rounded-lg flex justify-between items-center w-full text-gray-300  ml-[20px]  
                    duration-300  bg-blue-700 p-2 font-bold shadow-md shadow-white hover:bg-blue-600"
            href="https://www.linkedin.com/in/luis-eduardo-rosales-80070724b"
            target="_blank"
          >
            Linkedin <FaLinkedin size={40} />
          </a>
        </li>

        <li className="w-[260px] h-[60px] flex justify-between items-center">
          <a
            className="text-2xl flex justify-between items-center w-full text-gray-300  ml-[20px]  
                    duration-300 bg-blue-600 p-1 rounded-lg font-bold hover:bg-blue-500 shadow-md shadow-white"
            href="https://es-la.facebook.com/"
            target="_blank"
          >
            Facebook <FaFacebook size={40} />
          </a>
        </li>

        <li className="w-[260px] h-[60px] flex justify-between items-center">
          <a
            className="text-2xl flex justify-between items-center w-full text-gray-300  ml-[20px]  duration-300 
                    bg-blue-1000 p-1 rounded-lg font-bold border-2 hover:bg-blue-800 shadow-sm shadow-white"
            href="https://github.com/Luis0952"
            target="_blank"
          >
            GitHub <FaGithub size={40} />
          </a>
        </li>

        <li className="w-[260px] h-[60px] flex justify-between items-center">
          <a
            className=" text-2xl flex justify-between items-center w-full text-gray-300  ml-[20px]  duration-300 
                    bg-blue-800 p-1 rounded-lg font-bold border-2 hover:bg-blue-700 shadow-sm shadow-white"
            href="https://www.gmail.com/"
            target="_blank"
          >
            Correo <HiOutlineMail size={40} />
          </a>
        </li>
      </div>
      </div>
    </div>
  );
};
