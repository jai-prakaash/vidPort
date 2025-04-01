import React from "react";


function Hero(){

    return(

<>
<div className="hero-container w-full h-screen relative flex justify-center items-center">
  {/* <img
    src={`${import.meta.env.BASE_URL}images/uwp4705937.jpeg`}
    alt="heroimg"
    className="hero-img object-cover w-full h-screen  "
  /> */}



  <p className="  text-6xl text-amber-300 font-bold z-10 text-center px-4 font-custom text-stroke" style={{ lineHeight: '1.5' }}>
    Sameer Khan <br />    Maksad Nahi Bhulna

    <br />Professional Video Editor | Storyteller | Creator
  </p>
</div>


</>

    )

}

export default Hero;