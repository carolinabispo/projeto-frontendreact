import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
        <div className="relative z-[1] container m-auto px-6 md:px-12">
          <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
              <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                <ul className="space-y-8 cursor-pointer">
                  <li>
                    <a href='https://github.com/carolinabispo' target="_blank " className="flex items-center space-x-3 hover:text-sky-400 transition">
                      <span fill="currentColor" className="w-5 h-5">
                        <AiFillGithub size={20} />
                      </span>
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a  href='https://www.linkedin.com/in/carolina-ap-santos/' target="_blanck" className="flex items-center space-x-3 hover:text-sky-400 transition">
                      <span fill="currentColor" className="w-5 h-5">
                        <AiFillLinkedin size={20} />
                      </span>
                      <span>LinkedIn</span>
                    </a>
                  </li>

             

                  <li>
                    <a href="https://www.instagram.com/biispocarol/ " target="_blanck" className="flex items-center space-x-3 hover:text-sky-400 transition">
                      <span fill="currentColor" className="w-5 h-5">
                        <BsInstagram size={20} />
                      </span>
                      <span>Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                <span className="block text-gray-300">
                  Carolina Bispo &copy; 2023
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute h-full inset-0 flex items-center"
        >
          <div
            aria-hidden="true"
            className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
          ></div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
        ></div>
      </footer>
    </div>
  );
};

export default Footer;
