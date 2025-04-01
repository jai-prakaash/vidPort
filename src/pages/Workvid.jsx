import React from "react";

const WorksVid = () => {
  return (
    
    <div className=" flex justify-center items-center" >



{/* <img  
    src={`${import.meta.env.BASE_URL}images/uwp4705937.jpeg`}
    alt="heroimg"
    className="hero-img object-cover w-full h-screen filter blur-sm "
  /> */}

{/* <div className="absolute items-center w-screen "> */}

<div className=" items-center w-screen ">

<h1 className=" text-center font-bold text-7xl text-slate-700 " >Recent Video Works</h1>

<div className=" flex justify-around  " >



<div className="flex flex-col items-center">
  My video1
  <video width="200" controls autoPlay muted className="rounded-2xl" controlsList="nodownload  noremoteplayback">
  <source src={`${import.meta.env.BASE_URL}/videos/b.webm`} type="video/webm" />
  Your browser does not support the video tag.
</video>




</div>



    <div className="flex flex-col items-center">
  My video2
  <video width="200" controls autoPlay muted className="rounded-2xl">
    <source src={`${import.meta.env.BASE_URL}/videos/b.webm`} type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div>



    <div className="flex flex-col items-center">
  My video3
  <video width="200" controls autoPlay muted className="rounded-2xl">
    <source src={`${import.meta.env.BASE_URL}/videos/b.webm`} type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div>



    </div>












    <div className=" flex justify-around mt-[4%]" >

    <div className="flex flex-col items-center">
  My video4
  <video width="200" controls autoPlay muted className="rounded-2xl">
    <source src={`${import.meta.env.BASE_URL}/videos/b.webm`} type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div>


    <div className="flex flex-col items-center">
  My video5
  <video width="200" controls autoPlay muted className="rounded-2xl">
    <source src={`${import.meta.env.BASE_URL}/videos/b.webm`} type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div>


    <div className="flex flex-col items-center">
  My video6
  <video width="200" controls autoPlay muted className="rounded-2xl">
    <source src={`${import.meta.env.BASE_URL}/videos/b.webm`} type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div>


    </div >




    </div>

  

    </div>
  );
};

export default WorksVid;

