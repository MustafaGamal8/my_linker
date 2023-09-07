import React from 'react';
import {CiLogout} from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <section className='h-full'>
      <nav className=" w-full h-16 rounded-b flex items-center justify-between  bg-white px-5">
        <Link to={'/'} className='text-red-500 text-2xl cursor-pointer p-1 hover:text-red-600'><CiLogout /></Link>

          <img
            src="/assets/logo.png"
            className="h-full w-max object-contain"
            alt=""
          />

          <div></div>
         
      </nav>

      <section className='p-5 w-full h-full flex  flex-col gap-5'>



        
        <div className='flex flex-col items-center'>


        <div className='relative w-full  lg:h-96 md:h-72 h-52    overflow-hidden drop-shadow-lg'>
          <img src="/assets/profile.jpeg" alt=""  className=' absolute bottom-0 left-1/2 transform -translate-x-1/2  bg-primary p-2 rounded-full   lg:w-72 lg:h-72 md:w-52 md:h-52   w-36 h-36 ' />
           <img src="/assets/cover.jpeg" alt=""  className=' w-full xl:w-[60%] m-auto lg:h-80 md:h-60 h-40  object-cover  rounded '  />
        </div>


        <h1 className='text-3xl font-semibold' >مصطفي جمال السيد</h1>
        <p className='text-primary text-2xl  font-semibold'>مبرمج مواقع</p>



        </div>


        
        <hr className='bg-primary w-full h-[2px] ' />





        

      </section>

    </section>
  );
}

export default Profile;




        {/* style 2 */}

        <div className='flex items-start justify-between gap-2 '>

          <div className='w-[30%] flex flex-col items-center gap-4  p-3 '>
          <img src="/assets/profile.jpeg" alt="" className='bg-white p-2 rounded-full     lg:w-72 lg:h-72 md:w-52 md:h-52   w-36 h-36 ' />
            <h1 className='text-2xl font-semibold' >مصطفي جمال السيد</h1>
            <p className='text-primary text-xl '>مبرمج مواقع</p>
          </div>

          <img src="/assets/cover.jpeg" alt="" className=' w-[70%] lg:h-80 md:h-60 h-40 object-cover p-2 bg-primary rounded' />

        </div>