import React from "react";

function Hero(){

    return(

<>
<div className="hero-container relative flex justify-center items-center">
  <img
    src={`${import.meta.env.BASE_URL}images/uwp4705937.jpeg`}
    alt="heroimg"
    className="hero-img object-cover w-full h-screen filter blur-sm "
  />
  <p className="absolute text-6xl text-amber-300 font-bold z-10 text-center px-4 font-custom text-stroke" style={{ lineHeight: '1.5' }}>
    Sameer Khan <br /> Maksad Nahi Bhulna
  </p>
</div>


</>

    )

}

export default Hero;