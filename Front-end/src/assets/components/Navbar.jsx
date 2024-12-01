import React from "react";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between h-16">
      {/* Left Section */}
      <div className="flex items-center gap-10 px-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="p-2 hover:bg-gray-300 rounded-full text-gray-700">
            <RxHamburgerMenu size="24px" />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="Gmail-logo"
          />
          <h1 className="text-2xl text-gray-500">Gmail</h1>
        </div>
      </div>

      {/* Search Section */}
      <div className="w-[50%] mr-60">
        <div className="flex items-center bg-[#eaf1fb] px-2 py-2 rounded-full">
          <IoIosSearch size="24px" className="text-gray-700" />
          <input
            type="text"
            placeholder="Search mail"
            className="rounded-full bg-transparent outline-none px-2"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center p-2">
        <div className="p-3 rounded-full hover:bg-gray-300 text-gray-700 cursor-pointer">
          <GoQuestion size="24px" />
        </div>
        <div className="p-3 rounded-full hover:bg-gray-300 text-gray-700 cursor-pointer">
          <IoSettingsOutline size="24px" />
        </div>
        <div className="p-3 rounded-full hover:bg-gray-300 text-gray-700 cursor-pointer">
          <TbGridDots size="24px" />
        </div>
        {/* Avatar */}
        <Avatar
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          size="40"
          round={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
