import React from "react";
import api from "../assets/portfolio/api.png";

const Project = () => {
  const project = [
    {
      id: 1,
      src: api,
      link: "https://todo-app-mu-weld.vercel.app/",
      repo: 'https://github.com/waghmode02/todoApp'
    },
    {
      id: 1,
      src: api,
      link: "https://todo-app-mu-weld.vercel.app/",
      repo: 'https://github.com/waghmode02/todoApp'
    },{
      id: 1,
      src: api,
      link: "https://todo-app-mu-weld.vercel.app/",
      repo: 'https://github.com/waghmode02/todoApp'
    },{
      id: 1,
      src: api,
      link: "https://todo-app-mu-weld.vercel.app/",
      repo: 'https://github.com/waghmode02/todoApp'
    },{
      id: 1,
      src: api,
      link: "https://todo-app-mu-weld.vercel.app/",
      repo: 'https://github.com/waghmode02/todoApp'
    },{
      id: 1,
      src: api,
      link: "https://todo-app-mu-weld.vercel.app/",
      repo: 'https://github.com/waghmode02/todoApp'
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Recent Top <strong>Works </strong>
          </p>
          <p className="py-6">Here are a few projects I've worked on recently.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {project.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 w-full h-auto p-2"
              />
              <p className="text-xl ml-1 p-2">
              TodoApp is a simple web application for managing your daily tasks 
              </p>
              <div className="flex items-center justify-center">
          
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
