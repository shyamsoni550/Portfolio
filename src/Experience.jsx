import React from "react";
import html from "/images/html.png?url";

import css from "/images/css.jpg?url";

import php from "/images/php.jpg?url";


import javascript from "/images/javascript.png?url";

import reactjs from "/images/reactjs.png?url"

function Experience() {

  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: php,
      name: "PHP",
    },

    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: reactjs,
      name: "React",
    }
  ];
  return (
      <div
        name="Experience"

        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-xl"
      >

      <div>
        <h1 className="text-3xl font-bold mb-5 text-blue-800">Experience</h1>


        <p className="text-gray-600 mb-8">
          I've more than 2 years of experience in these technologies:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-3">


          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 border-blue-100 rounded-2xl md:w-[200px] md:h-[200px] shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 hover:shadow-xl hover:bg-blue-50 transition-all"
              key={id}
            >
              <img src={logo} className="w-[120px] h-[120px] object-contain" alt={name} />
              <div className="mt-4">
                <div className="text-lg font-medium text-blue-800">{name}</div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
