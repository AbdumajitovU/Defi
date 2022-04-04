import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const menuFunction = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff]">DEFI</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center cursor-pointer">
            <li className="hover:text-[#00d8ff]">Platform</li>
            <li className="hover:text-[#00d8ff]">Developers</li>
            <li className="hover:text-[#00d8ff]">Community</li>
            <li className="hover:text-[#00d8ff]">About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>
        {/* hamburger icon */}
        <div onClick={menuFunction} className="block md:hidden">
          {isMenu ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* mobile menu */}
        {isMenu && (
          <div className="w-full bg-black text-white text-center absolute top-[90px] left-0 flex justify-center">
            <ul>
              <li className="text-2xl">Platform</li>
              <li className="text-2xl">Developers</li>
              <li className="text-2xl">Community</li>
              <li className="text-2xl">About</li>
              <button className="m-8">Use Defi</button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
