import React from 'react'
import Navbar from '../components/Navbar';
import { CgProfile } from "react-icons/cg";
import { MdOutlineReviews } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";


const Home = () => {
   
  return (
    <div className="home relative min-h-[100vh] bg-gray-100">
      <Navbar/>
      <div className="home-content pt-6 w-full">
        <div className="home-nav w-[80%] pt-9 mx-auto flex items-center justify-between">
          <h2 className='font-bold text-2xl popins text-blue-600 '>AttendX</h2>
          <div className="logo">
            <CgProfile size={29} className=' cursor-pointer'/>
          </div>
        </div>
        <div className="hero-section w-[90%] mx-auto">
          <div className="hero-left pt-14 flex flex-col gap-5">
             <div className=" flex items-center">
             <p className="moto popins text-gray-700 text-sm font-semibold">Mark your Attendence with AttendX</p>
             <div className='w-20 h-[0.5px] bg-gray-700'></div>
             </div>
             <div>
              <h3 className='text-xl popins font-bold w-64'>Attendence Manager for GDC Kulgam</h3>
              <p className='p-7 popins font-semibold flex items-center gap-2 cursor-pointer'><MdOutlineReviews className='bg-green-700 rounded-full p-1 text-white text-sm' size={28}/>Review Classes</p>
             </div>
             <div className='p-10 '>
                <h4 className=' font-semibold flex items-center gap-3 text-xl'>Top Attender <BsGraphUpArrow size={38} className='bg-green-700 rounded-full p-2 w-11 h-11 text-white text-sm'/></h4>
                <div className=' w-80 flex items-center border-2 p-3 rounded-lg gap-2'>
                <CgProfile size={49} className='bg-blue-700 rounded-full  text-white w-16 cursor-pointer'/>
                <div className='flex flex-col'>
                  <div className="name-n-updated flex items-center justify-between popins">
                    <p className='text-sm font-semibold'>Hazim Bhat</p>
                    <p className='text-[11px]'>Updated: <span>1 day ago</span></p>
                  </div>
                  <div>
                    <p className='text-sm font-bold text-gray-600'>This student has the most no of days attended</p>
                  </div>
                </div>
                </div>
             </div>
          </div>
          <div className="hero-right">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
