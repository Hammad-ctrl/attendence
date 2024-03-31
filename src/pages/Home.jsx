import React from 'react'
import Navbar from '../components/Navbar';
import { CgProfile } from "react-icons/cg";
import { MdOutlineReviews } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";


const Home = () => {
   
  return (
    <div className="home relative min-h-[100vh] bg-gray-100">
      <Navbar/>
      <div className="home-content pt-6 w-full">
        <div className="home-na2 w-[70%] pt-9 mx-auto flex items-center justify-between">
          <h2 className='font-bold text-2xl popins text-blue-600 '>AttendX</h2>
          <div className="logo">
            <CgProfile size={29} className=' cursor-pointer'/>
          </div>
        </div>
        <div className="hero-section w-[90%] mx-auto flex items-center">
          <div className="hero-left pt-14 flex flex-col gap-5">
             <div className=" flex items-center">
             <p className="moto popins text-gray-700 text-sm font-semibold">Mark your Attendence with AttendX</p>
             <div className='w-20 h-[0.5px] bg-gray-700'></div>
             </div>
             <div>
              <h3 className='text-xl popins font-bold w-64'>Attendence Manager for GDC Kulgam</h3>
              <p className='p-7 popins font-semibold flex items-center gap-2 cursor-pointer w-max'><MdOutlineReviews className='bg-green-700 rounded-full p-1 text-white text-sm' size={28}/>Review Classes</p>
             </div>
             <div className='p-10 '>
                <h4 className=' font-semibold flex items-center gap-3 text-xl'>Top Attender <BsGraphUpArrow size={38} className='bg-green-700 rounded-full p-2 w-11 h-11 text-white text-sm'/></h4>
                <div className=' w-80 flex items-center border-2 p-3 rounded-lg gap-2 mt-2 shadow-sm'>
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
          <div className="hero-right flex items-center gap-14 justify-around w-full">
                  <div className='attendence-graph w-96  flex-col  bg-white rounded-md h-96 flex items-center justify-center'>
                    <p className=' font-bold popins flex items-center gap-2'>Attendence Graph <VscGraph size={34} className='bg-green-700 rounded-full p-2 text-white text-sm'/></p>
                      <div className='border-b-2 border-l-2 border-black w-[90%] h-[90%] flex gap-4 items-end'>
                            <div className='bg-green-600 ml-3 w-5 h-[78%] relative'>
                            <p className='popins text-[11px] font-bold absolute top-[-17px] left-[-4px]'>78%</p>
                              <p className='popins text-[11px] font-bold absolute bottom-[-17px] left-[-4px]'>MON</p>
                            </div>
                            <div className='bg-blue-600 w-5 h-[75%] relative'>
                            <p className='popins text-[11px] font-bold absolute top-[-17px] left-[-4px]'>75%</p>
                            <p className='popins text-[11px] font-bold absolute bottom-[-17px] left-[-4px]'>TUE</p>
                            </div>
                            <div className='bg-purple-600 w-5 h-[60%] relative'>
                            <p className='popins text-[11px] font-bold absolute top-[-17px] left-[-4px]'>60%</p>
                            <p className='popins text-[11px] font-bold absolute bottom-[-17px] left-[-4px]'>WED</p>
                            </div>
                            <div className='bg-yellow-600 w-5 h-[50%] relative'>
                            <p className='popins text-[11px] font-bold absolute top-[-17px] left-[-4px]'>50%</p>
                            <p className='popins text-[11px] font-bold absolute bottom-[-17px] left-[-4px]'>THU</p>
                            </div>
                            <div className='bg-orange-600 w-5 h-[30%] relative'>
                            <p className='popins text-[11px] font-bold absolute top-[-17px] left-[-4px]'>30%</p>
                            <p className='popins text-[11px] font-bold absolute bottom-[-17px] left-[-4px]'>FRI</p>
                            </div>
                            <div className='bg-gray-600 w-5 h-[40%] relative'>
                            <p className='popins text-[11px] font-bold absolute top-[-17px] left-[-4px]'>40%</p>
                            <p className='popins text-[11px] font-bold absolute bottom-[-17px] left-[-4px]'>SAT</p>
                            </div>
                            <div className='bg-red-600 w-5 h-[1%] relative'>
                            <p className='popins text-[11px] font-bold absolute top-[-17px] left-[-4px]'>0%</p>
                            <p className='popins text-[11px] font-bold absolute bottom-[-17px] left-[-4px]'>SUN</p>
                            </div>

                      </div>

                  </div>
                  <div className='w-96 h-72 bg-white rounded-md'>
                     
                  </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
