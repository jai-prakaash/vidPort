import React from "react";

const Works = () => {
  return (
    <div> 
      My video
      <video width="200" controls autoPlay className=" rounded-2xl" >
        <source src={`${import.meta.env.BASE_URL}/videos/b.webm`} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Works;

