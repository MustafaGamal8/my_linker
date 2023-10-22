import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { CiLogout } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import LogoutHandler from '../functions/LogoutHandler';
import UserFetchHandler from './../functions/UserFetchHandller';
import { LuCamera } from 'react-icons/lu';

const Profile = () => {
  const [formData, setFormData] = useState({
    displayName:"",
    details: {
      picture: "",
      cover: "",
      email: "",
      job: "",
      followLink: "",
      about: "",
      socialLinks: [
        {
          site: "",
          link: "",
        },
      ],
      skills: [""],
      projects: [
        {
          title: "",
          link: "",
          img: "",
        },
      ],
    },
  });


const [user, setUser] = useState(null);
const cookies = new Cookies();
const token = cookies.get('token');

const navigate = useNavigate()

useEffect(() => {
  const GetUserDataHandler = async () => {
    if (!token) {
      navigate('/auth/login')
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      await UserFetchHandler(token);
    }
    setUser(JSON.parse(localStorage.getItem('user')));

    
    setFormData((prevFormData) => ({
      ...prevFormData,
      displayName:  user.displayName ,
      details: { ...user.details },
    }));
    
  };

  GetUserDataHandler();
  
  
}, []);

const handleInputs = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
  console.log(formData)
};








  return (
    <>
    {
      user == null ? (
        <>
        loading
        </>)
      :(
        <section className='h-full'>
      <nav className='bg-white drop-shadow-lg w-full h-14 flex items-center justify-around mb-5  '>
        <Link onClick={LogoutHandler} to={"/auth/login"} className='text-red-500 text-2xl cursor-pointer p-2 hover:text-red-600 bg-white rounded-full'><CiLogout /></Link>
        <Link to={'/'} className='h-full'><img src="/assets/logo.png" className='h-full  object-contain mx-auto' alt="" /></Link>
      </nav>


      <section className='flex flex-col items-center gap-10 md:w-[80%] mx-auto ' >

        <section className='w-full  p-5 rounded-b-md '>

          <div className='rlative w-full h-[400px] '>
            <img src={user?.details?.cover || "https://picsum.photos/1500"} className=' rounded w-full h-full object-cover' alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 cursor-pointer'>
              <LuCamera size={40} />
            </div>
          </div>


          <div className='flex items-center justify-end gap-2'>

            <div className='flex flex-col items-end gap-2'>
            <input onChange={handleInputs} name='displayName' className='text-2xl font-semibold  capitalize border border-primary rounded  outline-none p-2 ' value={formData?.displayName} placeholder={"اسم المستخدم"} />
            <input onChange={handleInputs} name='job' className='text-2xl font-semibold  capitalize border border-primary rounded  outline-none p-2 ' value={formData?.details?.job} placeholder={"الوظيفة"} />


              
            </div>
            
            <div className='relative'>
            <img src={formData?.details?.picture || "/assets/profile.png"} alt="" className='rounded-full w-28 h-28 object-cover  scale-[1.7] mx-10' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 cursor-pointer'>
              <LuCamera size={40} />
            </div>

            </div>
          </div>

        </section>


      </section>



    </section>
      )
    }


    </>
    );
}

export default Profile;


