import React from 'react';
import { CiHome, CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.svg';
import t1 from '../assets/templates/t1.png';
import t3 from '../assets/templates/t3.png';
import t4 from '../assets/templates/t4.png';
import { MdContentCopy } from 'react-icons/md';
import  Cookies  from 'universal-cookie';
import { toast } from 'react-toastify';
import { LuExternalLink } from 'react-icons/lu';
import grow from '../assets/grow.svg';
import { GoHome } from 'react-icons/go';

const Templates = () => {
  const templateData = [
    { img: t1, title: 'one' },
    { img: t3, title: 'three' },
    { img: t4, title: 'four' },
  ];

  const handleCopyClick = (title) => {
    const cookies = new Cookies();
    const token = cookies.get('token');

    if (!token) {
      return toast.error('يجب تسجيل الدخول اولا' );     
    }

    const {email,_id} =  JSON.parse(localStorage.getItem('user'))
    
    const userId = (email.split("@")[0] ) || _id;

    const link  = `https://mylinker.vercel.app/temp/${title}/${userId}` ;

    navigator.clipboard.writeText(link);

    toast.success('تم نسخ الرابط بنجاح');
  };

  const handleOpenClick = (title) => {
    const cookies = new Cookies();
    const token = cookies.get('token');

    if (!token) {
      return toast.error('يجب تسجيل الدخول اولا' );
    }


    const {email,_id} =  JSON.parse(localStorage.getItem('user'))
    
    const userId = (email.split("@")[0] ) || _id;

    const link  = `https://mylinker.vercel.app/temp/${title}/${userId}` ;


    window.open(link, '_blank');


  }


  return (
    <section className='h-[100vh]' >
      <nav className='bg-white drop-shadow-lg w-full h-14 flex items-center justify-around '>
        <Link to={'/profile'} className='flex items-center gap-2 hover:text-primary transition-all '><CiUser />الملف الشخصي</Link>
        <Link to={'/'} className='h-full'><img src="/assets/logo.png" className='h-full object-contain mx-auto' alt="" /></Link>
        <Link to={'/'} className='flex items-center gap-2 hover:text-primary transition-all '><GoHome />الصفحة الرئيسية</Link>
      </nav>


      

        <section className='w-full flex items-start justify-between bg-white p-2 pb-24' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}> 

        <div className='md:w-[50%] mx-auto mt-10 flex flex-col items-center p-1'>
          <h1 className='text-black text-right text-4xl drop-shadow'>نجعلك تنمو</h1>
          <h1 className='text-primary text-right  text-4xl drop-shadow' >معنا</h1>
            

          <img className='w-[200px]' src={grow} alt="" />
          <div className='flex  items-start'>
          <p className='text-right text-lg text-sec md:drop-shadow-none drop-shadow'>يقدم موقعنا الإلكتروني مجموعة واسعة من التصميمات والقوالب الجاهزة التي تم تصميمها بعناية لتلبية الاحتياجات والتفضيلات الفريدة لعملائنا. تعمل هذه التصميمات كأساس لإنشاء مواقع ويب مذهلة تعكس أسلوبهم ورؤيتهم الفردية. عندما يزور العملاء موقعنا، تتاح لهم الفرصة لاستكشاف مجموعة واسعة من القوالب المصممة مسبقًا، كل منها يتميز بتصميمه المميز ونظام الألوان والطباعة والجمالية</p>
          </div>

          <div className='bg-gradient-to-r from-secondary to-primary text-center text-white p-2 w-[50%] rounded-lg  mt-5 '>ابدأ الان</div>
        </div>

        </section>
        <div className='h-16'><svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ScrollUp"><path fill="#4285f4" d="M12 19.5a.997.997 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 17.086l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A.997.997 0 0 1 12 19.5zm3-9a.997.997 0 0 1-.707-.293L12 7.914l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 10.5z" class="color6563ff svgShape"></path></svg></div>




      <section className='md:w-[80%] mx-auto flex flex-col flex-wrap items-center gap-10 p-5 pb-52 mt-14'>
        {templateData.map((template, index) => (
          <Template
            key={index}
            img={template.img}
            title={template.title}
            handleCopyClick={() => handleCopyClick(template.title)}
            handleOpenClick={() => handleOpenClick(template.title)}
          />
        ))}
      </section>

      <footer className='absolute bottom-0 w-full p-2 flex items-center justify-center gap-3 mt-10 bg-primary text-white h-16'>
        <h1><Link to={'/'}>MyLinker</Link> © {new Date().getFullYear()} جميع الحقوق محفوظة </h1>
      </footer>
    </section>
  );
};

export default Templates;

function Template({ img, title, handleCopyClick,handleOpenClick }) {
  return (
    <div
      className="w-full sm:w-[100%] md:w-[70%] lg:w-[50%] h-[400px] rounded-lg overflow-hidden relative md:hover:-translate-y-4 transition-all group drop-shadow-lg"
      
    >
      <img
        className="w-full h-full object-cover md:group-hover:scale-110 transition-all"
        src={img}
        alt=""
        loading="lazy"
      />
      <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center w-full text-white text-xl z-[2] font-semibold">
        {title}
      </h1>
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center w-full bg-black h-[15%] opacity-25 "
      ></div>

      <div  className='absolute md:top-0 top-4 md:left-0  left-5 md:w-full md:h-full flex md:group-hover:flex items-center justify-center gap-10  md:hidden  md:bg-black md:bg-opacity-25'>
      <MdContentCopy onClick={handleCopyClick}   className='text-4xl text-secondary cursor-pointer'/>
      <LuExternalLink onClick={handleOpenClick} className='text-4xl text-secondary cursor-pointer' />
      </div>
    </div>
  );
}
