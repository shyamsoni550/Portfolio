import React from "react";
import mongoDB from "/images/mongodb.jpg?url";
import html from "/images/html.png?url";
import reactjs from "/images/reactjs.png?url";
import javascript from "/images/javascript.png?url";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      description: "Developed a full-stack application using MongoDB for database management.",
      sourceCodeLink: "https://github.com/shyamsoni550/Pinterest-clone",
    },
    {
      id: 2,
      logo: html,
      name: "html",
      description: "Created a clone using dynamic css and html.",
      sourceCodeLink: "https://github.com/shyamsoni550/Jwellery_shop",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description: "Built a dynamic and responsive front-end using ReactJS.",
      sourceCodeLink: "https://github.com/shyamsoni550/React-projects/tree/main/04BgChnager",
    },
    {
      id: 4,
      logo: javascript,
      name: "javascript",
      description: "Implemented server-side logic with Node.js.",
      sourceCodeLink: "https://github.com/shyamsoni550/js/tree/main/projects",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-xl"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-blue-800">Projects</h1>
        <p className="text-gray-600 mb-8">Here are some of my featured projects:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
          {cardItem.map(({ id, logo, name, description, sourceCodeLink }) => (
            <div
              className="border-2 border-blue-100 rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 duration-300 hover:shadow-xl hover:bg-blue-50 transition-all"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] object-contain mx-auto"
                alt={name}
              />
              <div className="mt-4 text-center">
                <div className="text-xl font-bold text-blue-800 mb-2">{name}</div>
                <p className="text-gray-600">{description}</p>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href={sourceCodeLink}
                  className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-4 py-2 rounded-lg transition-all"
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
