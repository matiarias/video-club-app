import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[100px] sm:h-[90px] md:h-[80px] bg-gradient-to-r from-[#020225] to-black/90 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-2">
      <div className="flex justify-center items-center gap-2">
        <h4 className="text-indigo-200 text-base sm:text-lg font-bold">
          Created by Matias Arias
        </h4>
        <span className="text-gray-100 font-medium text-base">&#169; 2022</span>
      </div>

      <div className="flex gap-6">
        <a href="https://github.com/matiarias" target="_blank">
          <FaGithub className="text-4xl md:text-3xl text-gray-100" />
        </a>
        <a href="https://www.linkedin.com/in/matiasarias27" target="_blank">
          <FaLinkedinIn className="text-4xl md:text-3xl text-gray-100" />
        </a>
        <a href="https://www.instagram.com/_matiarias/?hl=es" target="_blank">
          <FaInstagram className="text-4xl md:text-3xl text-gray-100" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
