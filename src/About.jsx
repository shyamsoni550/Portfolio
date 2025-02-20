import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
      <h1 className="text-3xl font-bold mb-5 text-blue-800">About Me</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-8">
            Hello, I am Shyam - a full stack developer specializing in creating dynamic and responsive web applications. My skill set includes:
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">HTML</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">JavaScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">React</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Education & Training</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium text-gray-800">ADITYA SILVER OAK (2021-2025)</p>
              <p className="text-gray-600">Computer Engineering | Ahmedabad, India | CGPA: 8.02</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Experience</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800">Blockchain (Web4upskill) | (Oct 2023-Nov 2023)</h3>
            <p className="text-gray-600 mt-2">
              I had the incredible opportunity to dive deep into blockchain technology during this internship. Blockchain is revolutionizing industries across the globe, from finance and healthcare to supply chain management and voting systems.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800">Frontend Developer (Codsoft) | (Dec 2023-Jan 2024)</h3>
            <p className="text-gray-600 mt-2">
              Developed frontend applications using HTML, CSS, and JavaScript to create engaging and intuitive user interfaces. Explored backend technologies including Node.js to build scalable and efficient server-side solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Certificates</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-800">IT QUIZ certificate (L.D college of Engineering)</p>
            <a href="https://drive.google.com/file/d/1ttNMEPUatfCOpQ1Oa3zJ9xob-aCjTJQE/view?usp=drivesdk" 
               className="text-blue-600 hover:text-blue-800" 
               target="_blank" 
               rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-800">Oracle Cloud Infrastructure 2024 Generative AI Certified Professional</p>
            <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=AE55051DB9C4BF7E47283FA868379D5578EFEA9A6DE814429C84330E7B96E091" 
               className="text-blue-600 hover:text-blue-800" 
               target="_blank" 
               rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
