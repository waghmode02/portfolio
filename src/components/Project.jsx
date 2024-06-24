import React, { useState, useEffect } from "react";
import { Oval } from 'react-loader-spinner'; 

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch("https://portfolio-adminn.onrender.com/api/getproject")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false); 
      });
  }, []); 

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Recent Top <strong>Works</strong>
          </p>
          <p className="py-6">Here are a few projects I've worked on recently.</p>
        </div>

        {loading ? ( 
          <div className="flex justify-center items-center h-full">
          <h3 className="mr-10 p-2">Loading projects, please wait...   </h3>
            <Oval
              color="#00BFFF"
              height={40}
              width={40}
              ariaLabel='loading'
            />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, imagePath, description, demoPath, githubPath }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={imagePath}
                  alt="projects"
                  className="rounded-md duration-200 hover:scale-105 w-full h-auto p-2"
                />
                <p className="text-xl ml-1 p-2">{description}</p>
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(demoPath, "_blank")}
                  >
                    Demo
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(githubPath, "_blank")}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
