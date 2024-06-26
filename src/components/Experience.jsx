import React, { useState, useEffect } from "react";
import { Oval } from 'react-loader-spinner'; 

const Experience = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://portfolio-adminn.onrender.com/api/getskill")
      .then((response) => response.json())
      .then((data) => {
        setTechs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching techs:", error);
        setLoading(false);
      });
  }, []); 

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-full">
  
          <h3 className="mr-10 p-2">Loading technologies, please wait...   </h3>
            <Oval
              color="#00BFFF"
              height={40}
              width={40}
              ariaLabel='loading'
            />
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ _id, imageScr, title, style }) => (
              <div
                key={_id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={imageScr} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
