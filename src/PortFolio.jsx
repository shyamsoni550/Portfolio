import React from "react";
import mongoDB from "../public/images/mongodb.jpg";
import html from "../public/images/html.png";
import reactjs from "../public/images/reactjs.png";
import javascript from "../public/images/javascript.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      description: "Developed a full-stack application using MongoDB for database management.", // Replace with your actual video link
      sourceCodeLink: "https://github.com/shyamsoni550/Pinterest-clone", // Replace with your actual GitHub repository link
    },
    {
      id: 2,
      logo: html,
      name: "html",
      description: "Created a clone using dynamic css and html .", // Replace with your actual video link
      sourceCodeLink: "https://github.com/shyamsoni550/Jwellery_shop", // Replace with your actual GitHub repository link
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description: "Built a dynamic and responsive front-end using ReactJS.",// Replace with your actual video link
      sourceCodeLink: "https://github.com/shyamsoni550/React-projects/tree/main/04BgChnager", // Replace with your actual GitHub repository link
    },
    {
      id: 4,
      logo: javascript,
      name: "javascript",
      description: "Implemented server-side logic with Node.js.", // Replace with your actual video link
      sourceCodeLink: "https://github.com/shyamsoni550/js/tree/main/projects", // Replace with your actual GitHub repository link
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, videoLink, sourceCodeLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
               
                <a
                  href={sourceCodeLink}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
