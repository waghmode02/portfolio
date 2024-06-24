import React, { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); 
    setIsLoading(true);

    const formData = new FormData(e.target);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    fetch("https://portfolio-adminn.onrender.com/api/addcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
    
          setToastMsg("Message sent successfully!");
          setIsSuccess(true);
          setTimeout(() => {
            e.target.reset();
            setToastMsg("");
            setIsSuccess(false);
          }, 3000);
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setToastMsg("Failed to send message. Please try again.");
        setIsSuccess(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-8 text-xl mt-5">🚀 If you're interested in hiring me, I'm always open to new opportunities and exciting projects! Feel free to reach out for any inquiries or questions regarding web development. Let's create something exceptional together! 🌟</p>
        </div>
        
        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className={`text-white bg-gradient-to-b ${isSuccess ? 'from-green-400 to-green-600' : 'from-cyan-500 to-blue-500'} px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300`} disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        {toastMsg && (
          <div className="fixed bottom-0 left-0 right-0 p-4 text-center">
            <span className={`${isSuccess ? 'text-green-500' : 'text-red-500'}`}>{toastMsg}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
