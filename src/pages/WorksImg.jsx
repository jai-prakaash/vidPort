import React from "react";

const WorksImg = () => {
  return (
    
    <div className=" relative flex w-full h-screen justify-center items-center" >



{/* <img  
    src={`${import.meta.env.BASE_URL}images/aaa.jpeg`}
    alt="doodleimg"
    className="hero-img object-cover w-full h-screen filter blur-sm "
  /> */}


{/* <div className="absolute items-center w-screen "> */}

<div className=" items-center w-screen ">

<h1 className=" text-center font-bold text-7xl text-slate-700 " >Recent Grahics Works</h1>



<div className=" flex justify-around  " >

<div className="flex flex-col items-center  hover:motion-safe:animate-spin ">
  My Photo1
  <img 
    src={`${import.meta.env.BASE_URL}/images/aab.jpeg`} 
    alt="Your Photo" 
    width="200" 
    className="rounded-2xl" 
  />
</div>



<div className="flex flex-col items-center  ">
  My Photo2
  <img 
    src={`${import.meta.env.BASE_URL}/images/aab.jpeg`} 
    alt="Your Photo" 
    width="200" 
    className="rounded-2xl hover:animate-pulse " 
  />
</div>



<div className="flex flex-col items-center ">
  My Photo3
  <img 
    src={`${import.meta.env.BASE_URL}/images/aab.jpeg`} 
    alt="Your Photo" 
    width="200" 
    className="rounded-2xl" 
  />
</div>



    </div>












    <div className=" flex justify-around mt-[10%]" >

    <div className="flex flex-col items-center hover:animate-bounce">
  My Photo4
  <img 
    src={`${import.meta.env.BASE_URL}/images/aab.jpeg`} 
    alt="Your Photo" 
    width="200" 
    className="rounded-2xl " 
  />
</div>


<div className="flex flex-col items-center hover:scale-125 transition-transform duration-300">

  My Photo5
  <img 
    src={`${import.meta.env.BASE_URL}/images/aab.jpeg`} 
    alt="Your Photo" 
    width="200" 
    className="rounded-2xl" 
  />
</div>


<div className="flex flex-col items-center">
  My Photo6
  <img 
    src={`${import.meta.env.BASE_URL}/images/aab.jpeg`} 
    alt="Your Photo" 
    width="200" 
    className="rounded-2xl" 
  />
</div>


    </div >



    </div>

    </div>
  );
};

export default WorksImg;

