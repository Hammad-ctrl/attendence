import React,{useRef} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineReport } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { GoReport } from "react-icons/go";

const Navbar = () => {
    const SideNavbar = useRef();
   const OpenNavbar =useRef();
  const HideHamburger=()=>{
    SideNavbar.current.classList.add("left-[-500px]");
    OpenNavbar.current.classList.remove("hidden")
  }
  const ShowNavbar = ()=>{
    SideNavbar.current.classList.remove("left-[-500px]");
    SideNavbar.current.classList.add("left-0");
    OpenNavbar.current.classList.add("hidden")
  }
  const NavigatePerson=()=>{
    HideHamburger();
  }
  return (
    <div className="header-info ">
      <div className='  absolute top-3 p-3 left-3 transition-all' ref={OpenNavbar}>
        <FaArrowAltCircleRight className='text-3xl cursor-pointer' onClick={ShowNavbar}/>
      </div>
      <div className="side-nav w-96 z-40 bg-white shadow-sm shadow-gray-200 pt-6 px-2 pb-8 absolute left-[-500px] top-0 transition-all flex  flex-col gap-10" ref={SideNavbar}>
        <div className="top-heading flex items-center  justify-between">
          <h3 className=' font-bold text-xl popins text-center'>AttendX</h3>
          <GiHamburgerMenu onClick={HideHamburger} className=' text-xl cursor-pointer'/>
        </div>
        <nav className='h-[80vh] flex flex-col gap-14 justify-between'>
          <div className='w-full flex flex-col gap-4'>
          <Link to={'/'} onClick={NavigatePerson}>
          <div className='flex popins items-center justify-between active:bg-green-600 active:scale-90 transition-all p-3 px-8 bg-gray-200 rounded-md'>
            <FaHome className=' text-2xl'/>
            <p className=' font-bold'>Home</p>
          </div>
          </Link>
          <Link to={'/'} onClick={NavigatePerson}>
          <div className='flex popins items-center justify-between p-3 active:bg-green-600 active:scale-90 transition-all px-8 bg-gray-200 rounded-md'>
            <IoIosAddCircle className=' text-2xl'/>
            <p className=' font-bold'>Add Student</p>
          </div>
          </Link>
          <Link to={'/'} onClick={NavigatePerson}>
          <div className='flex popins items-center justify-between p-3  active:bg-green-600 active:scale-90 transition-all px-8 bg-gray-200 rounded-md'>
          <CiCalendar className=' text-2xl'/>
            <p className=' font-bold'>Mark Attendence</p>
          </div>
          </Link>
          <Link to={'/'} onClick={NavigatePerson}>
          <div className='flex popins items-center justify-between p-3 px-8 bg-gray-200 active:bg-green-600 active:scale-90 transition-all rounded-md'>
          <MdOutlineReport className=' text-2xl'/>
            <p className=' font-bold'>Attendence Report</p>
          </div>
          </Link>
          <Link to={'/'} onClick={NavigatePerson}>
          <div className='flex popins items-center justify-between p-3 px-8 bg-gray-200 rounded-md active:bg-green-600 active:scale-90 transition-all'>
          <SiGoogleclassroom className=' text-2xl'/>
            <p className=' font-bold'>Add Class</p>
          </div>
          </Link>
          </div>
          <div className='flex items-center justify-around'>
          <Link to={'/'} onClick={NavigatePerson}>
          <div className='flex popins items-center justify-between p-3 px-8 bg-red-500 rounded-md'>
          <IoMdLogOut className=' text-2xl'/>
            <p className=' font-bold'>Logout</p>
          </div>
          </Link>
          <Link to={'/'} onClick={NavigatePerson}>
          <div className='flex text-white popins items-center justify-between p-3 px-8 bg-gray-900 rounded-md'>
          <GoReport className=' text-2xl'/>
            <p className=' font-bold'>Feedback</p>
          </div>
          </Link>
          </div>
        </nav>
      </div>
      </div>
  )
}

export default Navbar
