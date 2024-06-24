import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf";

function Footer() {
  return (
    <div className="text-center p-6 bg-black footer">
      <span className="text-white">&copy; 2024 Copyright - </span>
      <a
        className=" text-white font-bold"
      >
        Nagesh Waghmode
      </a>
      <div className="flex justify-center mt-4 m-4 md:hidden">
        <a
          href="https://github.com/waghmode02"
          className="text-white mx-2 ml-2 p-4"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/nagesh02/"
          className="text-white mx-2 ml-2 p-4 "
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href={resume}
          className="text-white mx-2 ml-2 p-4"
          aria-label="Resume"
        >
          <BsFillPersonLinesFill size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
