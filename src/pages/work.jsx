import React from "react";

function Works() {
  return (
    <>
      <div>
        <h2>My Video</h2>
        <video width="200" controls autoPlay  className="rounded-2xl">
        <source src="https://jai-prakaash.github.io/vidPort/videos/b.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Works;
