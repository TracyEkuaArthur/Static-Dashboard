import React from "react";
import { maindata } from "./Data";
import { BsSliders } from "react-icons/bs";
import { BiBorderAll } from "react-icons/bi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { FcPhoneAndroid } from "react-icons/fc";
import { SiTimescale } from "react-icons/si";
import { GiAlarmClock } from "react-icons/gi";

const main = () => {
  return (
    <div>
      <div className=" mt-10 ml-10 flex justify-between">
        <div className="w-60">
          <p>Reporting</p>{" "}
          <span className="text-xs">All project in current month</span>
        </div>
        <div className=" h-9 w-10 mr-10 rounded bg-cyan-500 mt-5">
          <p className="px-3 font-extrabold text-lg text-white">+</p>
        </div>
      </div>
      <div className="w-11/12 ml-10 mt-10">
        <hr />
      </div>
      <div className=" w-full">
        <div className="flex mx-8 mt-8">
          <p className="mx-3">All</p>
          <div className="w-7 h-8 border-2 rounded border-cyan-400">
            <p className="text-xs py-1 px-1 mb-2 text-cyan-400">50</p>
          </div>
          <div className="flex mr-6">
            <p className="mx-3">Started</p>
            <div className="w-7 h-7 rounded bg-white">
              <p className="text-xs py-1 px-1 ">20</p>
            </div>
          </div>
          <div className="flex mr-6">
            <p className="mx-3">Approval</p>
            <div className="w-7 h-7 rounded bg-white">
              <p className="text-xs py-1 px-1 ">15</p>
            </div>
          </div>
          <div className="flex mr-6 justify-between">
            <p className="mx-3">Complated</p>
            <div className="w-7 h-7 rounded bg-white">
              <p className="text-xs py-1 px-1 ">20</p>
            </div>
          </div>
          <div className="mx-96 flex">
            <div className="w-24 h-8 rounded flex bg-white">
              <BsSliders color="gray" className="mx-4 mt-2" />{" "}
              <span className="text-xs mt-2">More</span>
            </div>
            <div className="w-8 h-8  mx-4 rounded bg-white">
              <BiBorderAll color="gray" className="mx-1 mt-2" />
            </div>
            <div className="w-8 h-8 border-2 rounded bg-white border-cyan-400">
              <AiOutlineAlignLeft color="gray" className="mx-1 mt-2" />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-14 w-full mh-screen flex flex-wrap">
        {maindata.map((main, idx) => (
          <div className=" h-52 w-60 rounded-xl relative bg-white my-5 mx-10">
            <div className={`${main.css}`}>{main.icon}</div>
            <div className=" mx-6 mt-7 font-medium ">{main.heading}</div>
            <div className="flex">
              <SiTimescale className=" mx-6 mt-2" />{" "}
              <span className="text-xs mt-2 mr-5 font-light">
                Marketing Team
              </span>
            </div>
            <div className="flex">
              <GiAlarmClock className="mx-6 mt-2" />{" "}
              <span className="text-xs font-light mt-2 mr-5">1 week left</span>
            </div>
            <div className="mx-8 mt-5">
              <hr className="w-32" />
            </div>
            <div className="flex mt-4">
              <p className="text-xs font-bold mx-7">Team Member</p>{" "}
              <span className="text-xs font-bold">Progress</span>
            </div>
            <div className="flex justify-between">
              <div className="flex ml-8 mt-3">
               <div className="h-6 w-6 rounded-full border-2">
                <img src="/images/mother.jpg" className="rounded-full" alt=""/>
               </div>
               <div className="h-6 w-6 rounded-full border-2">
                <img src="/images/auntie.jpg" className="rounded-full" alt=""/>
               </div>
               <div className="h-6 w-6 rounded-full border-2">
                <img src="/images/ekua.jpg" className="rounded-full" alt="" />
               </div>
                <div className="font-medium text-xs mt-1 ml-4 text-gray-500">
                  +
                </div>
              </div>

              <div className="mr-16">
                <p className="font-light text-sm mt-3 text-gray-500">
                  {main.percentage}
                </p>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default main;
