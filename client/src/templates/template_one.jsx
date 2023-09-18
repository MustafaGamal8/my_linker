
import React, { useEffect }  from 'react';
import { BiLogoTelegram } from 'react-icons/bi';
import { BsCommand } from 'react-icons/bs';
import SocialSlider from '../components/socialSlider';
import { Link } from 'react-router-dom';
import CustomSlider from '../components/customSlider';


const TemplateOne = () => {

  const  theme ={
    primary: "#171717",
    secondary: "#f89f5b",
  }
  const details = {
    name: "مصطفي جمال",
    jop:"مبرمج مواقع",
    email:"mustafagamal51112@gmail.com",
    followLink:"'https://github.com/mustafagamal51112'",
    about : 'مرحبًا، أنا مصطفى، مبرمج مواقع وتطبيقات ويب متخصص. لدي خبرة واسعة في تطوير المواقع والتطبيقات باستخدام مجموعة متنوعة من التقنيات والأطر العمل. أعمل بشغف في مجال تطوير الويب وأسعى دائمًا لتقديم حلاً تقنيًا مبتكرًا لاحتياجات العملاء. أسعد بالعمل على مشاريع تقنية مثيرة والمساهمة في نجاح الأعمال عبر الإنترنت.',
    socialLinks : [
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
    Skills : [
      "github",
      "html",
      "css",
      "javascript"
    ],
    projects : [
      {
        title: "khair",
        link:"http://khair-ten.vercel.app/",
        img: "https://mustafagamal51112.github.io/mustafagamal51112/db/khair.png",
      },
      {
        title: "ktaby",
        link:"http://ktaby.vercel.app/",
        img: "https://mustafagamal51112.github.io/mustafagamal51112/db/ktaby.png"
      },
      {
        title: "zaman",
        link:"https://zaman-web.vercel.app/",
        img: "https://mustafagamal51112.github.io/mustafagamal51112/db/zaman.png"
      },
      {
        title: "weSchool",
        link:"https://we-school.vercel.app/",
        img: "https://mustafagamal51112.github.io/mustafagamal51112/db/we-school.png"
      }
    ]
  }
  
  return (
    <section className='relative flex flex-col gap-5 items-center w-full capitalize' style={{color:theme.primary}}>

      <img src="/assets/covers/galaxy.jpg" alt="" className=' absolute top-0 left-0 w-full h-52 md:h-80 object-cover' />
      <div className=' h-20 md:h-60'></div>

      <div className='relative bg-white w-[80%] md:w-[50%]  text-center  p-4 rounded-md drop-shadow-md'>
        <img src="/assets/profile.jpeg" alt="" className='absolute left-1/2 -top-20 transform -translate-x-1/2 bg-white drop-shadow-md p-2 rounded-full  w-36 h-36' />
        <div className='h-16'></div>
        <h1 className='font-semibold text-2xl'>{details.name}</h1>
        <p className='text-xl mt-2'>{details.jop}</p>

        <div className='flex items-center gap-2  mt-5 justify-around md:justify-center'>
          { details.followLink && <Link to={details.followLink} target='_blank' rel='noreferrer' className='text-white group-:bg-secondary  p-3 rounded-lg w-[80%] md:w-80 text-xl' style={{background:theme.secondary}}>متابعة</Link>}
          { details.email &&<Link to={`mailto:${details.email}`} target='_blank'><BiLogoTelegram className='text-2xl cursor-pointer' style={{color:theme.secondary}} /></Link>}
        </div>
      </div>

      {details.socialLinks && details.socialLinks.length > 0 && (
        <div className='lg:w-[60%] w-[90%] h-20 '>
          <SocialSlider slides={details.socialLinks} color={theme.secondary} />
        </div>

      )}



      {details.about && (
        <div className='bg-white custom-animation  lg:w-[60%] w-[90%]  mt-10 rounded-lg drop-shadow-lg text-right p-4'>
          <h1 className='text-2xl font-semibold  p-4' style={{color:theme.secondary}}>عني</h1>
          <p className='p-1 text-xl  mt-4' >{details.about}</p>

        </div>

      )}





      {
        details.Skills && details.Skills.length > 0 &&
        (<div className='bg-white custom-animation  lg:w-[60%] w-[90%]  mt-10 rounded-lg drop-shadow-lg text-right p-4 '>
          <h1 className='text-2xl font-semibold    p-4 ' style={{color:theme.secondary}}>مهاراتي</h1>

          <div className='flex flex-col  gap-y-2'>
            {details.Skills.map((skill,index) => (
              <div key={index} className={`flex w-max  items-center gap-5  group relative `} >
                <div className='absolute  -bottom-1 left-0  rounded w-[10%] h-1 group-hover:w-full    transition-all ' style={{background:theme.secondary}}></div>
                <BsCommand className={`text-xl   `}  style={{color:theme.secondary}}/>
                <h1 className='text-2xl '>{skill}</h1>

              </div>
            ))}
          </div>
        </div>
        )}



      {
        details.projects && details.projects.length > 0 && (
          <div className='bg-white custom-animation  lg:w-[60%] w-[90%]  mt-10 rounded-lg drop-shadow-lg text-right p-4 mb-5'>
            <h1 className='text-2xl font-semibold p-4' style={{color:theme.secondary}}>مشاريعي</h1>

            <div className='md:p-7 mb-5 '><CustomSlider slides={details.projects}  color={theme.secondary}/></div>
          </div>
        )
      }





    </section>
  );
}

export default TemplateOne;
