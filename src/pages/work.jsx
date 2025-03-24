import React from "react";

const Works = () => {
  return (
    <div>
      <video width="320" controls>
        <source src={`${import.meta.env.BASE_URL}/videos/b.webm`} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Works;

