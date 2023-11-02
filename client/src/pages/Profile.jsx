import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { CiLogout } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import LogoutHandler from '../functions/LogoutHandler';
import UserFetchHandler from './../functions/UserFetchHandller';
import { LuCamera } from 'react-icons/lu';
import followSvg from '../assets/icons/follow.svg'
import messageSvg from '../assets/icons/message.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import bg from '../assets/bg2.svg'
const Profile = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    details: {
      pictureUrl: "",
      coverUrl: "",
      pictureFile: "",
      coverFile: "",
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
      skills: [
        {
          name: "js",
          percentage: "80",
        },
        {
          name: "ts",
          percentage: "40",
        },
        {
          name: "react",
          percentage: "96",
        },
      ],

      projects: [
        {
          title: "khair",
          link: "http://khair-ten.vercel.app/",
          imgUrl: "https://mustafagamal51112.github.io/mustafagamal51112/db/khair.png",
        },
        {
          title: "ktaby",
          link: "http://ktaby.vercel.app/",
          imgUrl: "https://mustafagamal51112.github.io/mustafagamal51112/db/ktaby.png",
        }
      ],
    },
  });


  const [user, setUser] = useState(null);
  const cookies = new Cookies();

  const navigate = useNavigate()
  const token = cookies.get('token');

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



  // info handlers
  const handleInputs = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData };
      const nestedFields = name.split('.');
      let target = updatedData;

      for (let i = 0; i < nestedFields.length - 1; i++) {
        target = target[nestedFields[i]];
      }

      target[nestedFields[nestedFields.length - 1]] = value;

      return updatedData;
    });
  };
  const handleImages = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const nameUrl = e.target.name + "Url"; 
    const nameFile = e.target.name + "File"; 
  
    reader.onload = (event) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        details: {
          ...prevFormData.details,
          [nameUrl]: event.target.result, 
          [nameFile]: file, 
        },
      }));
    };
    reader.readAsDataURL(file);
  };
  
  // _______________________________



  // Skills Handlers
  const handleSkillsInputs = (e) => {
    const { name, value } = e.target;
    const index = parseInt(name, 10);
    const updatedSkills = [...formData.details.skills];
    updatedSkills[index].name = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        skills: updatedSkills,
      },
    }));
  };

  const handlePercentageChange = (e) => {
    const { name, value } = e.target;
    const index = parseInt(name, 10);
    const updatedSkills = [...formData.details.skills];
    updatedSkills[index].percentage = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        skills: updatedSkills,
      },
    }));
  };


  const handleAddSkill = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        skills: [
          ...prevFormData.details.skills,
          {
            name: "skill",
            percentage: Math.floor(Math.random() * 100),
          },
        ],
      },
    }))
  }
  // _______________________________


  // Projects Handlers
  const handleProjectImage = (imgFile, imgUrl, index) => {
    const updatedProjects = [...formData.details.projects];
    updatedProjects[index].imgUrl = imgUrl;
    updatedProjects[index].imgFile = imgFile

    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        projects: updatedProjects,
      },
    }));

  };

  const handleProjectInputs = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.details.projects];
    updatedProjects[index][name] = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        projects: updatedProjects,
      },
    }));
  };



  const handleAddProject = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        projects: [
          ...prevFormData.details.projects,
          {
            title: "",
            link: "",
            imgUrl: "https://picsum.photos/1500",
          },
        ],
      },
    }))
  }
  // _______________________________





  const handleSubmit = async () => {
    console.log(formData)

  }



  return (
    <>
      {
        user == null ? (
          <>
            loading
          </>)
          : (
            <main >
              <nav className='bg-white drop-shadow-lg w-full h-14 flex items-center justify-around mb-5  '>
                <Link onClick={LogoutHandler} to={"/auth/login"} className='text-red-500 text-2xl cursor-pointer p-2 hover:text-red-600 bg-white rounded-full'><CiLogout /></Link>
                <Link to={'/'} className='h-full'><img src="/assets/logo.png" className='h-full  object-contain mx-auto' alt="" /></Link>
              </nav>



                <section className='  flex flex-col  gap-10 md:w-[80%] mx-auto  bg-white  mb-20   p-5    drop-shadow-xl'  >
                  <CoverAndProfilePicture formData={formData} handleImages={handleImages} />

                  <div className='md:h-32 w-full'></div>
                  <section >
                    <div className='mx-auto  flex flex-col items-center text-gray-700'>
                      <h1 className='text-3xl font-semibold capitalize'>{formData?.displayName || "الاسم"}</h1>
                      <h2 className='text-2xl font-semibold capitalize  mt-2'>{formData?.details?.job || "المهنة"}</h2>
                    </div>

                    <div className='flex items-center justify-around lg:w-[50%] w-[80%] mx-auto mt-5'>
                      <Link target='_blank' to={formData?.details?.email} className='p-2 md:px-14 px-5 rounded-md bg-white border border-gray-700 text-gray-700 flex items-center gap-1 hover:bg-gray-700 hover:text-white transition-all  font-semibold'><img src={messageSvg} alt="" /> <h3>مراسلة</h3></Link>
                      <Link target='_blank' to={formData?.details?.followLink} className='p-2 md:px-14 px-5 rounded-md bg-primary text-white flex items-center gap-1 hover:bg-darkgreen transition-all  font-semibold'><img src={followSvg} alt="" /> <h3>متابعه</h3></Link>
                    </div>
                  </section>

                  <ProfileInfoSection formData={formData} handleInputs={handleInputs} />



                  <AboutSection formData={formData} handleInputs={handleInputs} />


                  <SkillsSection formData={formData} handleSkillsInputs={handleSkillsInputs} handlePercentageChange={handlePercentageChange} handleAddSkill={handleAddSkill} />

                  <ProjectsSection formData={formData} handleProjectInputs={handleProjectInputs} handleProjectImage={handleProjectImage} handleAddProject={handleAddProject} />


                </section>


                <button className='bg-darkgreen text-white p-2 px-5 rounded-lg' onClick={handleSubmit}>حفظ</button>
                
                <div className='absolute  w-full h-[250px]'  style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>


              </main>
          )
      }


    </>
  );
}

export default Profile;





const CoverAndProfilePicture = ({ formData, handleImages }) => {
  return (
    <form className="relative w-full h-[400px] ">
      <input
        type="file"
        name="cover"
        className="hidden"
        accept="image/*"
        id="cover-input"
        onChange={handleImages}
      />
      
      <label htmlFor="cover-input" className="w-full h-full ">
      <img
        src={formData?.details?.coverUrl || "/assets/galaxy.jpg" || "https://picsum.photos/1500"}
        className="rounded w-full md:h-full h-72 object-cover drop-shadow-md overflow-hidden"
        alt=""
      />
      </label>


      <input
        type="file"
        name="picture"
        className="hidden"
        accept="image/*"
        id="picture-input"
        onChange={handleImages}
      />
      <label htmlFor="picture-input">
        <img
          src={formData?.details?.pictureUrl || "/assets/profile.jpeg"}
          alt=""
          className="rounded-full md:h-60 h-40 md:w-60 w-40 absolute md:-bottom-20 bottom-16 right-1/2 transform translate-x-[50%] border-2 border-primary drop-shadow-md"
        />
      </label>
    </form>
  );
};


const ProfileInfoSection = ({ formData, handleInputs }) => {
  return (
    <section >
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
    </section>

  );
};


const AboutSection = ({ formData, handleInputs }) => {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-primary my-10 mx-auto w-max p-2 px-7 rounded bg-white drop-shadow border-t-2 border-darkgreen">
        عني
      </h1>
      <div className="w-[80%] h-[300px] overflow-x-auto mx-auto">
        <textarea
          className="bg-[#EEEEEE] p-2 rounded-lg outline-none w-full h-[90%] text-gray-700 placeholder:text-right"
          onChange={handleInputs}
          name="details.about"
          id="about"
          value={formData?.details?.about}
          placeholder="عنك"
          style={{
            textAlign: formData?.details?.about && formData.details.about.match(/[\u0600-\u06FF]/) ? "right" : "left",
          }}
        ></textarea>
      </div>
    </section>
  );
};


const SkillsSection = ({ formData, handleSkillsInputs, handlePercentageChange, handleAddSkill }) => {
  return (
    <section className='w-[80%]  mx-auto  '>

      <h1 className='text-3xl font-semibold text-primary my-10 mx-auto w-max p-2 px-7 rounded bg-white drop-shadow border-t-2 border-darkgreen'>مهاراتي</h1>

      <ul className=' flex flex-col gap-4 gap-y-10 mx-auto'>
        {formData?.details?.skills?.map((skill, index) => (
          <li key={index} className='relative w-full md:h-10 h-[100px] flex flex-col md:flex-row-reverse items-center justify-around gap-3'>
            <input
              className='text-2xl  font-semibold capitalize text-center p-2 outline-none border rounded text-primary bg-[#EEEEEE] '
              name={index}
              value={skill.name}
              onChange={handleSkillsInputs}
            />
            <div className='relative bg-primary bg-opacity-25 w-[85%] h-[90%] rounded-l-xl '>
              <input
                type='range'
                dir='rtl'
                min='10'
                max='100'
                step='1'
                name={index}
                value={skill.percentage}
                className='absolute left-0 -bottom-4  w-full rounded-l-xl '
                onChange={handlePercentageChange}

              />
              <div className='absolute right-0 top-0 bg-darkgreen h-full rounded-l-xl text-center text-white text-lg pt-2' style={{ width: skill.percentage + '%' }}>
                {skill.percentage + '%'}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className='mx-auto mt-5 w-max flex justify-center  text-primary hover:scale-105 transition-all cursor-pointer' onClick={handleAddSkill}>
        <AiOutlinePlusCircle className='text-4xl' />
      </div>

    </section>
  )
}


const ProjectsSection = ({ formData, handleProjectImage, handleProjectInputs,handleAddProject }) => {
  const handleImageChange = (e, index) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // Pass the index to handleProjectImage
        handleProjectImage(file, event.target.result, index);
      };
      reader.readAsDataURL(file);
    }
  };



  return (
    <section className='w-[80%]  mx-auto  '>
      <h1 className='text-3xl font-semibold text-primary my-10 mx-auto w-max p-2 px-7 rounded bg-white drop-shadow border-t-2 border-darkgreen'>
        مشاريعي
      </h1>

      {formData?.details?.projects?.map((project, index) => (
        <div key={index} className="p-4 bg-white drop-shadow-xl rounded-lg my-5 lg:w-[60%] mx-auto">
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              id={`file-input-${index}`} 
              name={index}
              onChange={(e) => handleImageChange(e, index)} 
              className="hidden"
            />
            <label htmlFor={`file-input-${index}`}>
              <div className="bg-gradient-to-r from-blue-300 to-green-300 p-1 rounded-lg cursor-pointer">
                <img
                  src={project.imgUrl || 'placeholder-image-url.jpg'}
                  alt="Selected"
                  className="w-full md:h-80 h-60 object-cover rounded-lg"
                />
              </div>
            </label>
          </div>

          <div className='w-[65%] mx-auto'>
            <input
              type="text"
              value={project.title}
              name={'title'} 
              className="bg-[#EEEEEE] text-gray-800 px-2 py-2 rounded-lg outline-none w-full my-4 placeholder:text-right"
              placeholder="اسم المشروع"
              onChange={ (e) => handleProjectInputs(e, index)}
            />
            <input
              type="text"
              value={project.link}
              name={'link'} 
              className="bg-[#EEEEEE] text-gray-800 px-2 py-2 rounded-lg outline-none w-full my-4 placeholder:text-right"
              placeholder="رابط المشروع"
              onChange={(e) => handleProjectInputs(e, index)}
            />
          </div>
        </div>
      ))}



<div className='mx-auto mt-5 w-max flex justify-center  text-primary hover:scale-105 transition-all cursor-pointer' onClick={handleAddProject}>
        <AiOutlinePlusCircle className='text-4xl' />
      </div>
    </section>
  );
};
