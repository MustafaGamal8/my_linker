import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { CiLogout } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import LogoutHandler from '../functions/LogoutHandler';
import UserFetchHandler from '../functions/UserFetchHandler';
import { LuCamera } from 'react-icons/lu';
import followSvg from '../assets/icons/follow.svg'
import messageSvg from '../assets/icons/message.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import bg from '../assets/bg.svg'
import { MdPerson, MdCamera, MdLink, MdInfoOutline } from 'react-icons/md'
import { BsBriefcaseFill } from 'react-icons/bs'
import { FiTrash } from 'react-icons/fi'
import UserDataHandler from '../functions/UserDataUpdateHandler';
import UserInitalizeHandler from '../functions/UserInitalizeHandler.js';
import { toast } from 'react-toastify';
import {CgTemplate} from 'react-icons/cg'

const Profile = () => {
  const [formData, setFormData] = useState({
    details: {
      name: "",
      pictureId: '',
      coverId: '',
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
          name: "",
          percentage: "",
        },
      ],

      projects: [
        {
          name: "",
          link: "",
          imgId:"",
        }
      ],
    },
  });


  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const cookies = new Cookies();
  const navigate = useNavigate()
  const token = cookies.get('token');

  useEffect(() => {
    const GetUserDataHandler = async () => {
      if (!token) {
        navigate('/auth/login')
      }

      if (!user) {
        await UserFetchHandler(token);
        setUser(JSON.parse(localStorage.getItem('user')));
      }
      if (!user.details) {
        await UserInitalizeHandler(token)
        setUser(JSON.parse(localStorage.getItem('user')));
     }

      let newData = { ...formData }

      await Object.keys(newData.details).map((key) => {
        if (user.details && user.details[key]) {
          newData.details[key] = user.details[key]
        }
      })
      
      setFormData(newData)

    };

    GetUserDataHandler();
  }, []);



  // info handlers
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        [name]: value,
      },
    }));
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


  // social links handlers
  const handleAddSocialLink = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        socialLinks: [
          ...prevFormData.details.socialLinks,
          {
            site: "",
            link: "",
          },
        ],
      },
    }));
  };
  const handelDeleteSocialLink = (index) => {
    const updatedSocialLinks = [...formData.details.socialLinks];
    updatedSocialLinks.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        socialLinks: updatedSocialLinks,
      },
    }));
  };
  const handleSocialLinksInputs = (e, index) => {
    const { name, value } = e.target;
    const updatedSocialLinks = [...formData.details.socialLinks];
    updatedSocialLinks[index][name] = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        socialLinks: updatedSocialLinks,
      },
    }));
  };
  // ____________________________


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
            name: "",
            percentage: Math.floor(Math.random() * 100),
          },
        ],
      },
    }))
  };
  const handelDeleteSkill = (index) => {
    const updatedSkills = [...formData.details.skills];
    updatedSkills.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        skills: updatedSkills,
      },
    }));
  }
  // _______________________________


  // Projects Handlers
  const handleProjectImage = (imgFile, imgUrl, index) => {
    const updatedProjects = [...formData.details.projects];
    updatedProjects[index].imgUrl = imgUrl;
    updatedProjects[index].imgFile = imgFile;
    console.log(updatedProjects[index])

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
  };
  const handelDeleteProject = (index) => {
    const updatedProjects = [...formData.details.projects];
    updatedProjects.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        projects: updatedProjects,
      },
    }));
  };
  // _______________________________

  const handleSubmit = async () => {
    const updatedData = {
      details: {
      }
    };

  

    const formKeys = Object.keys(formData.details);
    const exludedKeys = ['pictureUrl', 'coverUrl'];
    for (const key of formKeys) {
      if (!exludedKeys.includes(key)) {
        if (formData.details[key] != "") {
          updatedData.details[key] = formData.details[key];
          
        }
      }
    }     
    
    await UserDataHandler(updatedData, token);

  }



  return (
    <>
      {
        user == null ? (
          <>
            loading
          </>)
          : (
            < >
              <nav className='bg-white drop-shadow-lg w-full h-14 flex items-center justify-around mb-5  '>
                <Link onClick={LogoutHandler} to={"/auth/login"} className='flex items-center gap-2 hover:text-red-400 transition-all '><CiLogout />تسجيل الخروج</Link>
                <Link to={'/'} className='h-full'><img src="/assets/logo.png" className='h-full  object-contain mx-auto' alt="" /></Link>
                <Link to={'/templates'} className='flex items-center gap-2 hover:text-red-400 transition-all '><CgTemplate />القوالب</Link>
              </nav>
              <div className='bg-primary w-full h-[300px]  absolute top-0 z-[-1] left-0'></div>


              <main className='  flex flex-col  gap-2 xl:w-[60%] lg:w-[70%] md:w-[80%] mx-auto  bg-white  mb-20  mt-10  p-5    drop-shadow-xl' >
                <CoverAndProfilePicture details={formData.details} handleImages={handleImages} />
                <div className='md:h-14 w-full '></div>



                <ProfileInfoSection formData={formData} handleInputs={handleInputs} />
                <AboutSection formData={formData} handleInputs={handleInputs} />
                <SocialLinksSection socialLinks={formData.details.socialLinks} handleSocialLinksInputs={handleSocialLinksInputs} handleAddSocialLink={handleAddSocialLink} handelDeleteSocialLink={handelDeleteSocialLink} />
                <SkillsSection skills={formData.details.skills} handleSkillsInputs={handleSkillsInputs} handlePercentageChange={handlePercentageChange} handleAddSkill={handleAddSkill} handelDeleteSkill={handelDeleteSkill} />
                <ProjectsSection projects={formData.details.projects} handleProjectInputs={handleProjectInputs} handleProjectImage={handleProjectImage} handleAddProject={handleAddProject} handelDeleteProject={handelDeleteProject} />

                <button className='bg-darkgreen hover:bg-primary text-white p-2 px-5 rounded-lg w-[50%] mx-auto mt-10  transition-all ' onClick={handleSubmit}>حفظ</button>
              </main>
            </>
          )
      }
    </>
  );
}

export default Profile;





const CoverAndProfilePicture = ({ details, handleImages}) => {
  const { pictureId, pictureUrl,coverId,coverUrl } = details
  return (
    <form className="relative w-full h-[350px]  ">

      <div className='relative w-full  md:h-80 h-72 group '>
        <img
          src={  coverUrl ||(coverId?  "https://mylinker-server.vercel.app/images/"+coverId: null)  || '/assets/galaxy.jpg'}
          className="w-full h-full object-cover drop-shadow-md"
          alt="Cover"
        />
        <input
          type="file"
          name="cover"
          className="hidden"
          accept="image/*"
          id="cover-input"
          onChange={handleImages}
        />

        <label
          htmlFor="cover-input"
          className="absolute  md:bottom-[55%] bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2  md:opacity-0  group-hover:opacity-100 transition-all  cursor-pointer"
        >
          <MdCamera color='white' size={50} />
        </label>

      </div>

      <div className='relative w-full  group '>
        <img
          src={ pictureUrl ||(pictureId?  "https://mylinker-server.vercel.app/images/"+pictureId: null) || "/assets/profile.jpeg"}
          alt="Profile"
          className="rounded-full lg:h-52 md:h-60 h-40 lg:w-52 md:w-60 w-40 absolute bottom-8 right-1/2 transform translate-x-1/2 translate-y-1/2 border-2 border-primary drop-shadow-md "
        />
        <input
          type="file"
          name="picture"
          className="hidden"
          accept="image/*"
          id="picture-input"
          onChange={handleImages}
        />

        <label htmlFor="picture-input"
          className="absolute  bottom-0 right-1/2 transform translate-x-1/2  md:opacity-0  group-hover:opacity-100 transition-all  z-50 cursor-pointer"
        >
          <MdCamera color='white' size={50} />
        </label>

      </div>

    </form>

  );
};


const ProfileInfoSection = ({ formData, handleInputs }) => {
  return (
    <section>

      <section >
        <div className='mx-auto  flex flex-col items-center text-gray-700'>
          <h1 className='text-3xl font-semibold capitalize inline-flex  items-center '><MdPerson />{formData?.details.name || "الاسم"} </h1>

          <h2 className='text-2xl font-semibold capitalize mt-2 inline-flex items-center gap-2'><BsBriefcaseFill />{formData?.details?.job || "المهنة"} </h2>
        </div>

        <div className='flex items-center justify-around lg:w-[60%] w-[95%] mx-auto mt-8'>
          <Link target='_blank' to={'mailto:' +formData?.details?.email} className='p-2 md:px-14 px-5 rounded-md bg-white border border-gray-700 text-gray-700 flex items-center gap-1 hover:bg-gray-700 hover:text-white transition-all  font-semibold'><img src={messageSvg} alt="" /> <h3>مراسلة</h3></Link>
          <Link target='_blank' to={formData?.details?.followLink} className='p-2 md:px-14 px-5 rounded-md bg-primary text-white flex items-center gap-1 hover:bg-darkgreen transition-all  font-semibold'><img src={followSvg} alt="" /> <h3>متابعه</h3></Link>
        </div>
      </section>

      <form className='flex md:flex-row-reverse flex-col flex-wrap p-5  justify-center md:items-center gap-5  w-full mx-auto'>

        <div className='flex flex-col gap-2 md:w-[45%] '>
          <label htmlFor="name" className='text-xl text-primary'>الاسم</label>
          <input onChange={handleInputs} type="text" name="name" id="name" value={formData?.details?.name} className='bg-[#EEEEEE] px-2 p-2 rounded-lg outline-none w-full capitalize ' />
        </div>

        <div className='flex flex-col gap-2 md:w-[45%] '>
          <label htmlFor="job" className='text-xl text-primary'>المهنة</label>
          <input onChange={handleInputs} type="text" name="job" id="job" value={formData?.details?.job} className='bg-[#EEEEEE] px-2  p-2 rounded-lg  outline-none w-full capitalize ' />
        </div>

        <div className='flex flex-col gap-2 md:w-[45%]'>
          <label htmlFor="followLink" className='text-xl text-primary'>لينك المتابعة</label>
          <input onChange={handleInputs} type="text" name="followLink" id="followLink" value={formData?.details?.followLink} className='bg-[#EEEEEE] px-2  p-2 rounded-lg  outline-none w-full capitalize ' />
        </div>

        <div className='flex flex-col gap-2 md:w-[45%]'>
          <label htmlFor="email" className='text-xl text-primary'>لينك المراسلة : <span className='text-base'>الايميل</span></label>
          <input onChange={handleInputs} type="text" name="email" id="email" value={formData?.details?.email} className='bg-[#EEEEEE] px-2  p-2 rounded-lg  outline-none w-full ' />
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
          name="about"
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

const SocialLinksSection = ({ socialLinks, handleSocialLinksInputs, handleAddSocialLink, handelDeleteSocialLink }) => {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-primary my-10 mx-auto w-max p-2 px-7 rounded bg-white drop-shadow border-t-2 border-darkgreen">
        التواصل
      </h1>



      <div className='w-[70%] mx-auto gap-4 flex flex-col'>

        {
          socialLinks?.map((socialLink, index) => (
            <div key={index} className='bg-white drop-shadow w-full  flex flex-col gap-3 p-2 rounded border-y-2 border-primary'>

              <FiTrash className='absolute right-2 top-2 text-red-400 cursor-pointer text-lg' onClick={() => handelDeleteSocialLink(index)} />
              <MdLink size={30} className='mx-auto text-darkgreen' />
              <div className='flex items-center md:w-[60%] mx-auto bg-[#EEEEEE] rounded'>

                <div className=' group relative cursor-pointer '>
                  <MdInfoOutline className='m-2 text-xl' />
                  <h1 className='absolute -top-8 left-0 p-1 md:w-72 w-56  bg-primary text-white rounded opacity-0 group-hover:opacity-100 transition-all md:text-sm text-xs '>يفضل ادخال اسم الموقع باللغة الانجليزية</h1>

                </div>
                <input type="text" name='site' value={socialLink.site} placeholder={"موقع التواصل"} className='bg-[#EEEEEE]  p-2 placeholder:text-right outline-none rounded w-full' onChange={(e) => handleSocialLinksInputs(e, index)} />
              </div>
              <input type="text" name='link' value={socialLink.link} placeholder={" لينك"} className='bg-[#EEEEEE] placeholder:text-right p-1 outline-none rounded' onChange={(e) => handleSocialLinksInputs(e, index)} />
            </div>
          ))
        }







        <div className='mx-auto mt-5 w-max flex justify-center  text-primary hover:scale-105 transition-all cursor-pointer' onClick={handleAddSocialLink} >
          <AiOutlinePlusCircle className='text-4xl' />
        </div>

      </div>
    </section>
  )
}

const SkillsSection = ({ skills, handleSkillsInputs, handlePercentageChange, handleAddSkill, handelDeleteSkill }) => {
  return (
    <section className='w-[90%]  mx-auto  '>

      <h1 className='text-3xl font-semibold text-primary my-10 mx-auto w-max p-2 px-7 rounded bg-white drop-shadow border-t-2 border-darkgreen'>مهاراتي</h1>

      <ul className=' flex flex-col gap-4 gap-y-10 mx-auto'>
        {skills?.map((skill, index) => (
          <li key={index} className='relative w-full md:h-10 h-[130px] flex flex-col md:flex-row-reverse items-center justify-around gap-3'>
            <FiTrash className=' text-red-400 cursor-pointer  w-10 md:h-5 h-14' onClick={() => handelDeleteSkill(index)} />
            <input
              className='text-2xl  font-semibold capitalize text-center p-2 outline-none border rounded text-primary bg-[#EEEEEE] '
              name={index}
              value={skill.name}
              onChange={handleSkillsInputs}
              placeholder='مهارة'
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

const ProjectsSection = ({ projects, handleProjectImage, handleProjectInputs, handleAddProject, handelDeleteProject }) => {
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

      {projects?.map((project, index) => (
        <div key={index} className="p-1 bg-white drop-shadow-xl rounded-lg my-5 lg:w-[80%] mx-auto">

          <FiTrash className='absolute right-4 top-4 text-red-400 cursor-pointer text-3xl z-10 bg-white p-1  rounded-full' onClick={() => handelDeleteProject(index)} />

          <div className="relative bg-gradient-to-r from-blue-300 to-green-300 p-1 rounded-lg  group">

            <img
              src={project.imgUrl || (project.imgId ?  "https://mylinker-server.vercel.app/images/"+project.imgId: '/assets/galaxy.jpg')}

              className="w-full md:h-80 h-40 object-cover rounded-lg"
            />

            <input
              type="file"
              accept="image/*"
              id={`file-input-${index}`}
              name={index}
              onChange={(e) => handleImageChange(e, index)}
              className="hidden"
            />

            <label htmlFor={`file-input-${index}`}
              className="absolute   bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2  md:opacity-0  group-hover:opacity-100 transition-all  cursor-pointer">

              <MdCamera color='black' size={50} />
            </label>

          </div>

          <div className='md:w-[65%] w-[85%] mx-auto'>
            <input
              type="text"
              value={project.name}
              name={'name'}
              className="bg-[#EEEEEE] text-gray-800 px-2 py-2 rounded-lg outline-none w-full my-4 placeholder:text-right"
              placeholder="اسم المشروع"
              onChange={(e) => handleProjectInputs(e, index)}
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
