import { useEffect, useState } from "react";

import HomeIcon from '../assets/icons/Home.svg';
import ProfileIcon from '../assets/icons/Profile.svg';
import PartenersIcon from '../assets/icons/Parteners.svg';
import SectionsIcon from '../assets/icons/Sections.svg';
import CallIcon from '../assets/icons/Call.svg';

import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import LogoutHandler from "../functions/LogoutHandler";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserExists, setIsUserExists] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setIsUserExists(true)      
    }
    
  })


  return (
    <nav className='relative flex  justify-around flex-row-reverse  bg-primary h-[75px] w-full    '>
      <Link to={'/'}><img className='h-full w-max object-contain' src="/assets/logo.png" alt="" /></Link>

      <div className=' hidden lg:flex  items-center justify-between gap-5 whitespace-nowrap '>
        <Link to={'/profile'} className='Nav_Item'><h1>الملف الشخصي</h1> <img src={ProfileIcon} alt="" /></Link>
        <a href="/#footer" className='Nav_Item'><h1>تواصل معنا</h1> <img src={CallIcon} alt="" /></a>
        <a href='#recommendation' className='Nav_Item'><h1>التوصيات</h1>  <img src={PartenersIcon} alt="" /> </a>
        <a href='#templates' className='Nav_Item'><h1>القوالب</h1> <img src={SectionsIcon} alt="" /></a>
        <a href='/#header' className='Nav_Item'><h1>الصفحة الرئيسية</h1> <img src={HomeIcon} alt="" /></a>
      </div>


      
      <div className='flex items-center justify-around gap-3'>
      {
        isUserExists == false ? (
          <>
        <Link to={'/auth/signup'} className='bg-primary p-2 rounded-xl text-white border border-white'>إنشاء حساب</Link>
        <Link to={'/auth/login'} className='p-2 rounded-xl bg-white  text-primary'>تسجيل الدخول</Link>
          </>
      )
      :(
        <>
        <div onClick={LogoutHandler} className='p-2 rounded-xl text-white  bg-red-400 flex items-center gap-2 cursor-pointer'><CiLogout /> تسجيل الخروج   </div>        
        </>
      )
      }
      </div>


      <div className=' items-center  lg:hidden flex'><HiMenuAlt1 className='text-2xl text-white cursor-pointer' onClick={toggleSidebar} /></div>




      {/* sideBar */}

      {
        isSidebarOpen && (
          <aside className='fixed top-0 left-0 h-[100vh] w-[250px] bg-primary flex flex-col  items-center justify-around z-[50]  '>

            <div className='flex items-center  '><HiMenuAlt1 className='text-2xl text-white cursor-pointer' onClick={toggleSidebar} /></div>

            <div className=' flex flex-col-reverse  items-center justify-between gap-8 whitespace-nowrap '>
              <Link to={'/profile'} className='Side_Item'><h1>الملف الشخصي</h1> <img src={ProfileIcon} alt="" /></Link>
              <a href="#footer" className='Side_Item'><h1>تواصل معنا</h1> <img src={CallIcon} alt="" /></a>
              <a href='#recommendation' className='Side_Item'><h1>التوصيات</h1>  <img src={PartenersIcon} alt="" /></a>
              <a href='#templates' className='Side_Item'><h1>القوالب</h1> <img src={SectionsIcon} alt="" /></a>
              <a href='#header' className='Side_Item'><h1>الصفحة الرئيسية</h1> <img src={HomeIcon} alt="" /></a>
            </div>


            <div></div>

          </aside>
        )
      }
      <div className='absolute bottom-0 left-0 w-full  h-[1px] bg-white'></div>


    </nav>
  )

}


export default NavBar;