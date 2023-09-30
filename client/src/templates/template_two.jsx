
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbWorldWww } from 'react-icons/tb';
import { CiShare1 } from 'react-icons/ci';
import SocialSlider from './../components/socialSlider';

const TemplateTwo = () => {
  const [mood, setMood] = useState("about")


  const theme = {
    primary: "#242936",
    secondary: "#2563eb",
  }
  const details = {
    name: "مصطفي جمال",
    jop: "مبرمج مواقع",
    email: "mustafagamal51112@gmail.com",
    followLink: "https://github.com/mustafagamal51112",
    web: "https://github.com/mustafagamal51112",
    about: 'مرحبًا، أنا مصطفى، مبرمج مواقع وتطبيقات ويب متخصص. لدي خبرة واسعة في تطوير المواقع والتطبيقات باستخدام مجموعة متنوعة من التقنيات والأطر العمل. أعمل بشغف في مجال تطوير الويب وأسعى دائمًا لتقديم حلاً تقنيًا مبتكرًا لاحتياجات العملاء. أسعد بالعمل على مشاريع تقنية مثيرة والمساهمة في نجاح الأعمال عبر الإنترنت.',
    socialLinks: [
      {
        site: "facebook",
        link: "https://www.facebook.com",
      },
      {
        site: "twitter",
        link: "https://www.twitter.com",
      },
      {
        site: "whatsapp",
        link: "https://www.whatsapp.com",
      },
      {
        site: "github",
        link: "https://www.github.com",
      },
      {
        site: "behance",
        link: "https://www.behance.com",
      }
    ],
    Skills: [
      "github",
      "html",
      "css",
      "javascript"
    ],
    projects: [
      {
        title: "khair",
        link: "http://khair-ten.vercel.app/",
        img: "https://mustafagamal51112.github.io/mustafagamal51112/db/khair.png",
      },
      {
        title: "ktaby",
        link: "http://ktaby.vercel.app/",
        img: "https://mustafagamal51112.github.io/mustafagamal51112/db/ktaby.png"
      },
      {
        title: "zaman",
        link: "https://zaman-web.vercel.app/",
        img: "https://mustafagamal51112.github.io/mustafagamal51112/db/zaman.png"
      },
      {
        title: "we-School",
        link: "https://we-school.vercel.app/",
        img: "https://mustafagamal51112.github.io/mustafagamal51112/db/we-school.png"
      }
    ]
  }








  return (
    <section className='relative'  >
      <img src="/assets/covers/man.jpg" alt="" className='  absolute top-0 left-0 w-full h-52 md:h-80 object-cover drop-shadow-lg' />
      <div className='h-32 md:h-52'></div> 



      <div className='flex flex-col lg:items-start lg:flex-row-reverse '>

        <div className='lg:w-[20%] bg-white-500  flex flex-col items-center justify-center   p-2 pb-20 rounded-md   bg-white'>
          <img src="/assets/profile.jpeg" alt="" className='bg-white drop-shadow-lg p-1 rounded-full   md:w-52 md:h-52  w-36 h-36' />
          <h1 className='text-2xl font-semibold ' style={{ color: theme.primary }}>{details.name}</h1>
          <p className='text-lg font-semibold' style={{ color: theme.secondary }}>{details.jop}</p>
          <Link to={details.followLink} target='_blank' className='p-3  px-8 text-white rounded  mt-4' style={{ background: theme.secondary }}>متابعة</Link>
          <Link to={details.web} target='_blank' className='flex items-center gap-1 underline my-5'><TbWorldWww className='text-xl' style={{ color: theme.secondary }} />{details.web}</Link>



          <div className='w-full'><SocialSlider slides={details.socialLinks} color={theme.secondary} /></div>
        </div>



        <div className=' md:w-[80%] w-full m-auto  p-2 pb-20 rounded-md     lg:mt-36 '>
          <div className=' w-full h-10 flex flex-row-reverse items-center  p-2 gap-5'>
            {
              details.about &&
              <button onClick={() => setMood("about")} className='p-2 px-4 rounded-full text-white  hover:scale-95 transition-all' style={{ background: theme.secondary }}>عني</button>
            }
            {
              details.Skills &&
              <button onClick={() => setMood("skills")} className='p-2 px-4 rounded-full text-white  hover:scale-95 transition-all' style={{ background: theme.secondary }}>المهارات</button>
            }
            {
              details.projects &&
              <button onClick={() => setMood("projects")} className='p-2 px-4 rounded-full text-white  hover:scale-95 transition-all' style={{ background: theme.secondary }}>المشاريع</button>
            }
          </div>

          <div className='lg:w-[90%]  mt-10 drop-shadow-md m-auto'>


          <div className='lg:w-[80%] m-auto'>
              {mood === "about" && details.about && (
                <h1 className="text-xl text-center text-white py-4 rounded-lg shadow-lg select-text" style={{background:theme.secondary}}>
                  {details.about}
                </h1>
              )}
            </div>


            <div className='flex   items-center w-full  flex-wrap lg:justify-start justify-center  gap-5  p-2 ' >
              {
                mood == "projects" && details.projects && details.projects.map(project => (
                  <div className='w-96 bg-white drop-shadow-lg rounded-xl  flex flex-col justify-center gap-3 '>
                    <img className=' w-full object-cover rounded-xl drop-shadow' src={project.img} alt="" />
                    <h1 className=' text-xl font-semibold text-center uppercase' style={{ color: theme.primary }}>{project.title}</h1>

                    <Link to={project.link} target='_blank' className='w-full flex items-center justify-center p-1 text-white hover:translate-y-1 transition-all  text-xl' style={{ background: theme.secondary }} ><CiShare1 /></Link>


                  </div>
                ))
              }
            </div>



            



            <div className='flex flex-col w-full gap-5'>
            {mood === "skills" && details.Skills && details.Skills.map(skill=>(
              
              <h1 className='text-2xl  p-2 rounded  w-[50%] m-auto text-center capitalize hover:-translate-y-2 transition-all text-white' style={{background:theme.secondary}}>{skill}</h1>
            )) }
            </div>



          </div>




        </div>


      </div>

    </section>
  );
}

export default TemplateTwo;
