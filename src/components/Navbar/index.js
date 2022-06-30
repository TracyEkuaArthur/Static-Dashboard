import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

const index = () => {
  return (
    <div className="border-2 w-full h-18 flex justify-between ">
     <div className="flex">
     <div className="border-2 w-9 h-9 rounded-full my-0 ml-20 mt-10 bg-sky-400">
        <AiFillStar color="white" size={20} className="mx-1 mt-1" />
      </div>
      <div className="w-20 font-bold text-lg mt-12 ml-2">Boardto</div>{" "}
      <div className=" h-9 mt-12 ml-24 flex">
        <BiSearch size={25} className="mt-1" />{" "}
        <span className="ml-8">Search...</span>
      </div>
     </div>
      <div className=" mr-72 mt-10 flex h-14 w-96 justify-between">
        <IoMdNotificationsOutline size={30} />
        <div className="w-14 h-14 rounded-ful ml-20">
          <img
            src="/images/vill.jpg"
            className=" w-10 h-10 rounded-full"
            alt=""
          />
        </div>
        <div className=" h-10 w-32">
          <p className="font-bold">Augusta Ryn</p>{" "}
          <span className="text-xm">Director</span>
        </div>
      </div>
    </div>
  );
};

export default index;
