import React from "react";

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20  my-20">
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <p>
        Hello,I am Shyam a full stack developer specializing in creating Dynamic
        and responsive web applications. My skill set includes HTML, CSS,
        JavaScript, Tailwind CSS,React, Mongoose, and MongoDB.
      </p>
      <br />
      <h1 className="text-green-600 font-semibold text-xl">
        Education & Training{" "}
      </h1>
      <span>
      ADITYA SILVER OAK (2021-2025)                                                                                                     Computer Engineering |
        Ahmedabad,India | CGPA:8.02
      </span>
      <br />
      <br />
      <h1 className="text-green-600 font-semibold text-xl">Skills </h1>
      <div class="flex flex-wrap justify-center">
  <ul class="flex flex-col w-1/3">
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      HTML
    </li>
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      CSS
    </li>
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      JavaScript
    </li>
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      Tailwind CSS
    </li>
  </ul>
  <ul class="flex flex-col w-1/3">
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      React
    </li>
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      Node.js
    </li>
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      Express.js
    </li>
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      MongoDB
    </li>
  </ul>
  <ul class="flex flex-col w-1/3">
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      Git
    </li>
    <li class="list-inline-item bg-secondary text-black p-2 rounded">
      Github
    </li>
  </ul>
</div>
      <br />
      <h1 className="text-green-600 font-semibold text-xl"> Experience </h1>
      <h2 className="font-semibold">
        Blockchain (Web4upskill) | (Oct 2023-Nov 2023)
      </h2>
      <span className="font-semibold"> </span>
      <p>
        I have had the incredible opportunity to dive deep into the world of
        blockchain technology during this internship. Blockchain is
        revolutionizing industries across the globe, from finance and healthcare
        to supply chain management and voting systems.
      </p>
      <br />
      <h2 className="font-semibold">
        Frontend Developer (Codsoft) | (Dec 2023-Jan 2024)
      </h2>
      <p class="card-text">
        {" "}
        Dive into frontend development using HTML, CSS, and JavaScript to create
        engaging and intuitive user interfaces. Explore backend technologies
        such as Python, Ruby, or JavaScript (Node.js) to build scalable and
        efficient server-side solutions.
      </p>
      <br />
      <h1 className="text-green-600 font-semibold text-xl flex flex-row">
        Certificates{" "}
      </h1>
      <p>
        <ul>
          <li>
            IT QUIZ certificate (L.D collage of Enginnering)
            <a
              href="https://drive.google.com/file/d/1ttNMEPUatfCOpQ1Oa3zJ9xob-aCjTJQE/view?usp=drivesdk"
              target="_blank"
            >
              (Link)
            </a>
          </li>
          <li>
           Oracle Cloud Infrastructure 2024 Generative AI Certified Professional 
            <a
              href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=AE55051DB9C4BF7E47283FA868379D5578EFEA9A6DE814429C84330E7B96E091"
              target="_blank"
            >
              (Link)
            </a>
          </li>
         
        </ul>
      </p>
      <br />
      <hr />
    </div>
  );
}

export default About;
