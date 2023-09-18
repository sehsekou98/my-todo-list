"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div 
        className="absolute top-0 left-0 w-full h-96
        bg-gradient-to-r from-[#38BDF8] to-[#FBBC05]
        rounded-md filter blur-3xl
        opacity-50 -z-50"
         />
        {/**Logo */}
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 justify-end w-full ">
          {/**Search box */}
          <form
            className="flex items-center space-x-5
            bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/**Avatar*/}
          <Avatar name="Sekou S." round size="50" color="#0055D1" />
        </div>
      </div>
      <div className="flex items-center justify-center py-5 md:py-5">
        <p
          className="flex items-center px-5 py-2 text-sm font-light pr-5 shadow-xl rounded-xl
        w-fit bg-white italic max-w-3xl text-[#0055D1]"
        >
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055d1] mr-1" />
          Hello Sekou. you get some work to do....
        </p>
      </div>
    </header>
  );
};

export default Header;
