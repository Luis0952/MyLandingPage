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
       
        <h1 className="font-semibold text-white  md:text-2xl ">
          Correo electronico: <span className="underline md:text-2xl">luchorosalesc6@gmail</span> 
        </h1>
      

      <div className="flex  items-center pt-5 pb-5 border-2 rounded-lg shadow-sm shadow-white mt-5 ml-10">
        <li className="md:w-[260px] w-[100px] h-[60px] flex justify-between items-center">
          <a
            className=" md:text-2xl text-1xl rounded-lg flex justify-between items-center w-full text-gray-300  ml-[10px]  
                    duration-300  bg-blue-700 md:p-2 p-0 md:font-semibold font-bold shadow-md shadow-white hover:bg-blue-600"
            href="https://www.linkedin.com/in/luis-eduardo-rosales-80070724b"
            target="_blank"
          >
            Linkedin <FaLinkedin size={40} />
          </a>
        </li>

        <li className="md:w-[260px] w-[100px] h-[60px] flex justify-between items-center">
          <a
            className="md:text-2xl flex justify-between items-center w-full text-gray-300  ml-[10px]  
                    duration-300 bg-blue-600 md:p-1 p-0 rounded-lg md:font-bold font-semibold 
                    hover:bg-blue-500 shadow-md shadow-white"
            href="https://es-la.facebook.com/"
            target="_blank"
          >
            Facebook <FaFacebook size={40} />
          </a>
        </li>

        <li className="md:w-[260px] w-[100px] h-[50px] flex justify-between items-center">
          <a
            className="md:text-2xl flex justify-between items-center w-full text-gray-300  ml-[5px]  duration-300 
                    bg-blue-1000 md:p-1 p-0 rounded-lg font-bold border-2 hover:bg-blue-800 shadow-sm shadow-white"
            href="https://github.com/Luis0952"
            target="_blank"
          >
            GitHub <FaGithub size={40} />
          </a>
        </li>

        <li className="md:w-[260px] w-[100px] h-[60px] flex justify-between items-center">
          <a
            className=" md:text-2xl flex justify-between items-center w-full text-gray-300  ml-[5px]  duration-300 
                    bg-blue-800 md:p-1 p-0 rounded-lg font-bold border-2 hover:bg-blue-700 shadow-sm shadow-white"
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
