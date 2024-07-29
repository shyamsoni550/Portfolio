import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped, Typed } from "react-typed";
function Home() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20  my-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 ">
          <span className="text-xl">Welcome In My Feed</span>
          <div className="flex space-x-1 text-2xl md:text-4xl ">
            <h1>Hello I'm a </h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Devloper", "Coder", "Programmer"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <hr />
          <br />
          <a className="bg-blue-800 hover:bg-green-700 text-white font-bold px-4 py-2 rounded" href="../public/images/vaya-shyam-resume .pdf" download="vaya-shyam-resume">Download Resume</a>
          <br />
          <br />
          <hr />

          <p className="text-sm md:text-md text-justify">
            Welcome! I am Vaya Shyam, currently a Fourth-year student at Silver
            Oak University, passionate about Web development. Explore my
            portfolio and let's connect to create something Extraordinary
            together!
          </p>
          <br />
          {/* social media icons  */}
          <div className="flex flex-col  items-center md:flex-row  space-y-6 md:space-y-0 justify-between ">
            <div className="space-y-2 ">
              <h1 className="font-bold">Available on</h1>
              <ul className="flex space-x-5">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100060721845494" target="_balnk">
                    <FaFacebookSquare className="text-2xl cursor-pointer" />
                  </a>
                </li>

                <li>
                <a href="https://www.linkedin.com/in/vaya-shyam/" target="_balnk">
                  <FaLinkedin className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                <a href="https://github.com/shyamsoni550" target="_balnk">
                <FaGithub  className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                <a href="https://www.instagram.com/shyam_soni.99/" target="_balnk">
                <FaInstagram  className="text-2xl cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
            <div id="skill" className="space-y-2">
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[-2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[-2px]" />
                  <IoLogoReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[-2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[-2px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className=" md:w-1/2 md:ml-48  md:mt-20 mt-8 order-1">
          <img
            src="../public/images/photo.avif"
            alt=""
            className="rounded-full md:w-[450px] h-[450px] "
          />
        </div>
      </div>
      <hr />
    </div>
  );
 
}

export default Home;