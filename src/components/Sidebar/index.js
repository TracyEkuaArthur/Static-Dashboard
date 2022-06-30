import React from 'react'
import {BsFillGridFill} from "react-icons/bs";
import {BsCalendar2Minus} from "react-icons/bs";
import {BsFileEarmarkMedical} from "react-icons/bs";
import {BiMessageDetail} from "react-icons/bi";
import {BiSitemap} from "react-icons/bi";
import {TiWorldOutline} from "react-icons/ti";
import {MdQrCodeScanner} from "react-icons/md";
import {RiListSettingsLine} from "react-icons/ri";
import {HiOutlineLogout} from "react-icons/hi";
import Main from "../../components/Main";

const index = () => {
  return (
    <div className=' w-screen h-screen flex justify-between'>
        <div className=' w-60 h-screen mt-10 ml-14'>
            <div className=' flex'>
                <BsFillGridFill color='gray' size={20}/> <span className='ml-5 text-xm text-gray-700'>Board</span>
            </div>
            <div className=' w-60 h-10 flex mt-10'>
                <BsCalendar2Minus color='gray' size={20}/> <span className='ml-5 text-gray-700'> Plan Schedule</span>
            </div>
            <div className='mt-10 h-10 w-60 bg-cyan-500 rounded flex'>
                <BsFileEarmarkMedical color='white' size={20} className="ml-14 mt-2"/> <span className='ml-5 mt-2 text-gray-600'>Reporting</span>
            </div>
            <div className=' h-10 w-60 mt-10 flex'>
                <BiMessageDetail color='gray' size={30}/> <span className='ml-5 text-gray-700'>Messages</span>
            </div>
            <div className='h-10 w-60 mt-10 flex'>
                <BiSitemap color='gray' size={30}/> <span className='ml-5 text-gray-700'>Team member</span>
            </div>
            <div className='h-10 w-60 mt-10 flex'>
                <TiWorldOutline color='gray' size={30}/> <span className='ml-5 text-gray-700'>Tools plugin</span>
            </div>
            <div className='h-10 w-60 mt-10 flex'>
                <MdQrCodeScanner color='gray' size={30}/> <span className='ml-5 text-gray-700'>Roadmap</span>
            </div>
            <div className='h-10 w-60 mt-10 flex'>
                <RiListSettingsLine color='gray' size={30}/> <span className='ml-5 text-gray-700'>Roadmap</span>
            </div>
            <div className='flex mt-16'>
                <HiOutlineLogout color='gray' size={25}/> <span className='ml-16 text-gray-700'>Logout</span>
            </div>
        </div>
        <div className=' w-3/4 h-screen mt-10 rounded-tl-3xl bg-gray-100'>
           <Main/>
        </div>
    </div>
  )
}

export default index;