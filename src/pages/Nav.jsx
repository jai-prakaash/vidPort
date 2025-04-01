import React from "react";

function Nav() {
  return (
    <nav className="bg-inherit flex justify-between p-1">
   
   <div className="ml-[1%] flex w-[70px] h-[70px] rounded-full  text-xl text-white justify-center items-center neon-shadow ">
  SamVfx
</div>


     
      <div className="flex justify-around mr-[1%] w-1/4 justify-center items-center">
        <button className="text-slate-700 hover:neon-shadow px-5 py-1 rounded-full  ">Portfolio</button>
        <button className="text-slate-700 px-5 py-1 rounded-full ">About</button>
        <button className=" text-slate-700 px-5 py-1 rounded-full ">Contact</button>
      </div>
    </nav>
  );
}

export default Nav;
