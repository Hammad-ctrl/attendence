import React from 'react'
import Navbar from '../components/Navbar'
import { IoMdTime } from "react-icons/io";
import { MdOutlineAvTimer } from "react-icons/md";


const Home = () => {
   
  return (
    <div className="home relative min-h-[100vh] bg-gray-100">
      <Navbar/>
      <div className="home-content pt-6 w-full">
        <div className="hero-section w-full">
          <div className="classes p-4">
            <h4 className="heading text-center popins text-xl font-semibold drop-shadow-lg ">Total Classes</h4>
            <div className="classes-container pt-3 flex  gap-4 justify-center flex-col md:flex-row">
              <div className="class cursor-pointer shadow-sm shadow-green-400 rounded-md md:w-96 popins px-4 py-2 flex flex-col gap-6 bg-green-300">
                <div className="top-class-info flex items-center justify-between">
                <h4 className='md:text-lg text-md font-semibold'>Python Programming</h4>
                <p className='md:text-md text-sm font-semibold flex items-center'><IoMdTime />40 min</p>
                </div>
                 <div className="bottom-class-info flex justify-between">
                  <p className='md:text-lg text-md border-[1px] border-green-400 px-2 rounded-md font-medium shadow-md shadow-green-500'>Salam sir</p>
                  <p className='md:text-md text-sm font-semibold flex items-center'><MdOutlineAvTimer />10:40 AM</p>
                 </div>
              </div>
              <div className="class cursor-pointer shadow-sm shadow-green-400 rounded-md md:w-96 popins px-4 py-2 flex flex-col gap-6 bg-green-300">
                <div className="top-class-info flex items-center justify-between">
                <h4 className='md:text-lg text-md font-semibold'>Computer Graphics</h4>
                <p className='md:text-md text-sm font-semibold flex items-center'><IoMdTime />40 min</p>
                </div>
                 <div className="bottom-class-info flex justify-between">
                  <p className='md:text-lg text-md border-[1px] border-green-400 px-2 rounded-md font-medium shadow-md shadow-green-500'>Saba mam</p>
                  <p className='md:text-md text-sm font-semibold flex items-center'><MdOutlineAvTimer />11:20 AM</p>
                 </div>
              </div>
              <div className="class cursor-pointer shadow-sm shadow-green-400 rounded-md md:w-96 popins px-4 py-2 flex flex-col gap-6 bg-green-300">
                <div className="top-class-info flex items-center justify-between">
                <h4 className='md:text-lg text-md font-semibold'>Internet technology</h4>
                <p className='md:text-md text-sm font-semibold flex items-center'><IoMdTime />40 min</p>
                </div>
                 <div className="bottom-class-info flex justify-between">
                  <p className='md:text-lg text-md border-[1px] border-green-400 px-2 rounded-md font-medium shadow-md shadow-green-500'>Nisar Sir</p>
                  <p className='md:text-md text-sm font-semibold flex items-center'><MdOutlineAvTimer />12:00 PM</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
