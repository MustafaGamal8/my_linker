

import React from 'react';
import NavBar from './../components/NavBar';
import { Link } from 'react-router-dom';
import NotFoundSvg from '../assets/notFound.webp';

const NotFound = () => {
  return (
    <div>
      <nav className='bg-primary w-full h-16'>
        <Link to={'/'}><img src="/assets/logo.png" className='h-full  object-contain mx-auto' alt="" /></Link>
      </nav>
      
      <div className='container mx-auto mt-20  flex flex-col md:flex-row items-center justify-center p-3'>

        <img src={NotFoundSvg} className='h-96' alt="" />


        <div>
          
        <h1 className=' text-3xl font-semibold my-10'>يبدو انك قد توجهت الي <span className='text-darkblue'>صفحة غير موجودة</span></h1>
        <h1 className='text-3xl font-semibold my-10'>الرجاء الانتقال الى الصفحة الرئيسيه </h1>
         <Link to={'/'} className='bg-primary p-2 rounded-xl text-white '>الصفحة الرئيسية</Link>

        </div>
      </div>

    </div>
  );
}

export default NotFound;
