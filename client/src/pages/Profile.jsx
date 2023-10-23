import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { CiLogout } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import LogoutHandler from '../functions/LogoutHandler';
import UserFetchHandler from './../functions/UserFetchHandller';
import { LuCamera } from 'react-icons/lu';
import followSvg from '../assets/icons/follow.svg'
import messageSvg from '../assets/icons/message.svg'

const Profile = () => {
  const [formData, setFormData] = useState({
    displayName: "",
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
      skills: ["github","react","node"],
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


      // setFormData((prevFormData) => ({
      //   ...prevFormData,
      //   displayName: user.displayName,
      //   details: { ...user.details },
      // }));

    };

    GetUserDataHandler();
  }, []);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    const nestedFields = name.split('.');

    if (nestedFields.length > 1) {
      setFormData({
        ...formData,
        details: {
          ...formData.details,
          [nestedFields[1]]: Array.isArray(formData.details[nestedFields[1]])
            ? [value]
            : value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };




  return (
    <>
      {
        user == null ? (
          <>
            loading
          </>)
          : (
            <>
              <nav className='bg-white drop-shadow-lg w-full h-14 flex items-center justify-around mb-5  '>
                <Link onClick={LogoutHandler} to={"/auth/login"} className='text-red-500 text-2xl cursor-pointer p-2 hover:text-red-600 bg-white rounded-full'><CiLogout /></Link>
                <Link to={'/'} className='h-full'><img src="/assets/logo.png" className='h-full  object-contain mx-auto' alt="" /></Link>
              </nav>


              <main className='flex flex-col items-center gap-10 md:w-[80%] mx-auto  bg-white  mb-20' >

                <section className='  w-full  p-5 rounded-b-md   '>

                  <div className='relative w-full h-[400px] '>
                    <img src={formData?.details?.cover || "/assets/galaxy.jpg" || "https://picsum.photos/1500"} className=' rounded w-full md:h-full object-cover drop-shadow-md' alt="" />
                    <img src={formData?.details?.picture  || "/assets/profile.jpeg"} alt="" className='rounded-full md:h-60 h-40 md:w-60 w-40 absolute md:-bottom-20 bottom-16 right-1/2 transform translate-x-[50%] border-2 border-primary drop-shadow-md' />
                  </div>
                  <div className='md:h-32  w-full'></div>

                  <div className='mx-auto  flex flex-col items-center text-gray-700'>
                    <h1 className='text-3xl font-semibold capitalize'>{formData?.displayName || "الاسم"}</h1>
                    <h2 className='text-2xl font-semibold capitalize  mt-2'>{formData?.details?.job || "المهنة"}</h2>
                  </div>

                  <div className='flex items-center justify-around lg:w-[50%] w-[80%] mx-auto mt-5'>
                    <Link target='_blank' to={formData?.details?.email} className='p-2 md:px-14 px-5 rounded-md bg-white border border-gray-700 text-gray-700 flex items-center gap-1 hover:bg-gray-700 hover:text-white transition-all  font-semibold'><img src={messageSvg} alt="" /> <h3>مراسلة</h3></Link>
                    <Link target='_blank' to={formData?.details?.followLink} className='p-2 md:px-14 px-5 rounded-md bg-primary text-white flex items-center gap-1 hover:bg-darkgreen transition-all  font-semibold'><img src={followSvg} alt="" /> <h3>متابعه</h3></Link>
                  </div>


                  <form className='flex md:flex-row-reverse flex-col flex-wrap  items-center xl:justify-start  justify-center mt-14 lg:gap-x-16 gap-5 w-full'>

                    <div className='flex flex-col gap-2 '>
                      <label htmlFor="displayName" className='text-xl text-primary'>الاسم</label>
                      <input onChange={handleInputs} type="text" name="displayName" id="displayName" value={formData?.displayName} className='bg-[#EEEEEE] px-2 p-2 rounded-lg outline-none lg:w-[400px] w-80 capitalize ' />
                    </div>

                    <div className='flex flex-col gap-2 '>
                      <label htmlFor="job" className='text-xl text-primary'>المهنة</label>
                      <input onChange={handleInputs} type="text" name="details.job" id="job" value={formData?.details?.job} className='bg-[#EEEEEE] px-2  p-2 rounded-lg  outline-none lg:w-[400px] w-80 capitalize ' />
                    </div>

                    <div className='flex flex-col gap-2 '>
                      <label htmlFor="followLink" className='text-xl text-primary'>لينك المتابعة</label>
                      <input onChange={handleInputs} type="text" name="details.followLink" id="followLink" value={formData?.details?.followLink} className='bg-[#EEEEEE] px-2  p-2 rounded-lg  outline-none lg:w-[400px] w-80 capitalize ' />
                    </div>

                    <div className='flex flex-col gap-2 '>
                      <label htmlFor="email" className='text-xl text-primary'>لينك المراسلة : <span className='text-base'>الايميل</span></label>
                      <input onChange={handleInputs} type="text" name="details.email" id="email" value={formData?.details?.email} className='bg-[#EEEEEE] px-2  p-2 rounded-lg  outline-none lg:w-[400px] w-80 capitalize ' />
                    </div>

                  </form>



                  <div>
                    <h1 className='text-3xl font-semibold text-primary my-10 mx-auto w-max p-2 px-7 rounded bg-white drop-shadow'>عني</h1>
                    <div className=' w-[80%] h-[300px] overflow-x-auto mx-auto'>
                      <textarea className='bg-[#EEEEEE] p-2 rounded-lg outline-none w-full h-full text-gray-700 ' onChange={handleInputs} name="details.about" id="about" value={formData?.details?.about} placeholder='عنك' style={{
                        textAlign: formData?.details?.about && formData.details.about.match(/[\u0600-\u06FF]/) ? "right" : "left",
                      }} ></textarea>
                    </div>

                  </div>


                  <div>
                  <h1 className='text-3xl font-semibold text-primary my-10 mx-auto w-max p-2 px-7 rounded bg-white drop-shadow'>مهاراتي</h1>
                  
                  
                    <div className='w-[80%]  mx-auto'>
                      <ul className=' flex flex-col gap-4'>
                        {/* {formData?.details?.skills?.map((skill, index) => (

                            <li className='text-gray-700' key={index}>{skill}</li>                          
                            )
                        )}  */}


                        <li className='w-full h-10 flex flex-row-reverse items-center justify-around gap-3 '><h1 className='text-2xl font-semibold capitalize'>react</h1>
                         <div className='relative  bg-primary bg-opacity-25 lg:w-[60%]  w-full h-full  rounded-l-xl overflow-hidden' ><span className='absolute right-0 top-0 bg-darkgreen h-full  rounded-l-xl text-center text-white pt-2' style={{ width: "75%" }}>75%</span></div>
                         </li>
                        <li className='w-full h-10 flex flex-row-reverse items-center justify-around gap-3 '><h1 className='text-2xl font-semibold capitalize'>react</h1>
                         <div className='relative  bg-primary bg-opacity-25 lg:w-[60%]  w-full h-full  rounded-l-xl overflow-hidden' ><span className='absolute right-0 top-0 bg-darkgreen h-full  rounded-l-xl text-center text-white pt-2' style={{ width: "75%" }}>75%</span></div>
                         </li>
                      </ul>
                    </div>
                  </div>




                </section>








              </main>
            </>
          )
      }


    </>
  );
}

export default Profile;


