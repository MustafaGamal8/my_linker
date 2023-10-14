import React, { useState } from 'react';

import HomeIcon from '../assets/icons/Home.svg';
import ProfileIcon from '../assets/icons/Profile.svg';
import PartenersIcon from '../assets/icons/Parteners.svg';
import SectionsIcon from '../assets/icons/Sections.svg';
import CallIcon from '../assets/icons/Call.svg';

import WomenSVG from '../assets/women.svg';
import Man from '../assets/man.svg';

import Share from '../assets/icons/Share.svg';
import World from '../assets/icons/World.svg';
import Key from '../assets/icons/Key.svg';
import Daily from '../assets/icons/Daily.svg';
import Arrow from '../assets/icons/Arrow.svg';
import SmailyFace from '../assets/icons/SmailyFace.svg';



import { HiMenuAlt1, HiArrowLeft } from 'react-icons/hi';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  return (
    <main>

      <header className='bg-primary   drop-shadow-xl pb-2'>
        <NavBar />


        <section className='flex md:flex-row flex-col justify-around items-center mt-16'>

          <img className='drop-shadow-xl ' src={WomenSVG} alt="" />



          <div className='flex flex-col gap-y-4 items-end'>
            <h1 className='text-white font-semibold text-5xl text-right'>
              جرب الان اكثر من 10 قالب <span className='text-purple70 font-bold'>جاهز للمشاركة</span>
            </h1>

            <p className='text-white'>
اكتشف مجموعتنا المبتكرة من القوالب والصفحات الشخصية.
شكل ملفك الشخصي بأفضل القوالب الجاهزة.
ابدأ رحلة إبداعية مع تصاميمنا الاحترافية.</p>


            <button className='bg-purple70 text-white p-3 rounded-xl font-semibold '>احصل علي تجربة مجانية</button>
          </div>

        </section>

      </header>



      <section className='my-24 bg-white w-[80%] md:h-24 m-auto rounded-md flex md:flex-row-reverse flex-col justify-center   whitespace-nowrap lg:text-base text-sm drop-shadow-xl '>

        <div className='advantage_item'>
          <img className='h-7 ' src={Share} alt="" />
          <h1>شارك اعمالك بسهولة</h1>
        </div>

        <div className='advantage_item'>
          <img className='h-7 ' src={World} alt="" />
          <h1>تجربة فريدة وجديدة</h1>
        </div>

        <div className='advantage_item'>
          <img className='h-7 ' src={Daily} alt="" />
          <h1>إضافات يوميه</h1>
        </div>

        <div className='advantage_item'>
          <img className='h-7 ' src={Key} alt="" />
          <h1>خصوصية فائقة</h1>
        </div>

      </section>



      <section className=' relative text-center mb-24'>

        <h1 className='text-[#333333] text-5xl '><span className='text-purple70'>مكتبة</span> القوالب الجاهزه</h1>
        <p>اختر القالب الذي يعكس ذوقك الفريد ويمثل رؤيتك بأبهى شكل , اجعل التصميم يعكس هوية مشروعك بكل أناقة واحترافية.</p>
        <img className=' lg:ml-[200px] mb-2' src={Arrow} alt="" />



        <div className='text-white text-center flex items-center w-[90%] justify-center m-auto gap-4  gap-y-7 flex-wrap '>
          <Templates img={"https://mustafagamal51112.github.io/mustafagamal51112/db/khair.png"} title="موقع خير" />
          <Templates img={"https://mustafagamal51112.github.io/mustafagamal51112/db/ktaby.png"} title="موقع كتابي" />
          <Templates img={"https://mustafagamal51112.github.io/mustafagamal51112/db/zaman.png"} title="موقع زمن" />
          <Templates img={"https://mustafagamal51112.github.io/mustafagamal51112/db/we-school.png"} title="موقع وي" />
          <Templates img={"https://mustafagamal51112.github.io/mustafagamal51112/db/khair.png"} title="موقع خير" />
          <Templates img={"https://mustafagamal51112.github.io/mustafagamal51112/db/ktaby.png"} title="موقع كتابي" />
          <Templates img={"https://mustafagamal51112.github.io/mustafagamal51112/db/zaman.png"} title="موقع زمن" />
          <Templates img={"https://mustafagamal51112.github.io/mustafagamal51112/db/we-school.png"} title="موقع وي" />

        </div>

        <button className='flex flex-row-reverse items-center gap-2 m-auto  text-xl mt-10'> <h1>شاهد المزيد </h1> <HiArrowLeft /></button>


      </section>




      <section className='mt-10'>
        <h1 className='text-4xl text-primary text-center font-semibold'>التوصيات</h1>


        <div className='flex flex-col md:flex-row gap-y-20 items-center justify-center w-[90%] mt-16 mx-auto gap-5'>

          <Recommendation img={Man} name={"مصطفي جمال"} p={"موقع رائع وجميل وانصح به بشدة . لقد اذهلني جدا . موقع رائع وجميل وانصح به بشدة . لقد اذهلني جداموقع رائع وجميل وانصح به بشدة . لقد اذهلني جدا"} />
          <Recommendation img={Man} name={"مصطفي جمال"} p={"موقع رائع وجميل وانصح به بشدة . لقد اذهلني جدا . موقع رائع وجميل وانصح به بشدة . لقد اذهلني جداموقع رائع وجميل وانصح به بشدة . لقد اذهلني جدا"} />
          <Recommendation img={Man} name={"مصطفي جمال"} p={"موقع رائع وجميل وانصح به بشدة . لقد اذهلني جدا . موقع رائع وجميل وانصح به بشدة . لقد اذهلني جداموقع رائع وجميل وانصح به بشدة . لقد اذهلني جدا"} />



        </div>

      </section>




      <Footer />




    </main>
  );
}

export default Home;





function NavBar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <nav className='relative flex  justify-around flex-row-reverse  bg-primary h-[75px] w-full    '>
      <img className='h-full w-max object-contain' src="/assets/logo.png" alt="" />


      <div className=' hidden lg:flex  items-center justify-between gap-5 whitespace-nowrap '>
        <div className='Nav_Item'><h1>تواصل معنا</h1> <img src={CallIcon} alt="" /></div>
        <div className='Nav_Item'><h1>شركاؤنا</h1> <img src={PartenersIcon} alt="" /></div>
        <div className='Nav_Item'><h1>الاقسام</h1> <img src={SectionsIcon} alt="" /></div>
        <div className='Nav_Item'><h1>الملف الشخصي</h1> <img src={ProfileIcon} alt="" /></div>
        <div className='Nav_Item'><h1>الصفحة الرئيسية</h1> <img src={HomeIcon} alt="" /></div>
      </div>

      <div className='flex items-center justify-around gap-3'>
        <Link to={'/auth/signup'} className='bg-primary p-2 rounded-xl text-white border border-white'>إنشاء حساب</Link>
        <Link to={'/auth/login'} className='p-2 rounded-xl bg-white  text-primary'>تسجيل الدخول</Link>
      </div>


      <div className=' items-center  lg:hidden flex'><HiMenuAlt1 className='text-2xl text-white cursor-pointer' onClick={toggleSidebar} /></div>




      {/* sideBar */}

      {
        isSidebarOpen && (
          <aside className='absolute top-0 left-0 h-screen w-[250px] bg-primary flex flex-col  items-center justify-around z-[50]'>

            <div className='flex items-center  '><HiMenuAlt1 className='text-2xl text-white cursor-pointer' onClick={toggleSidebar} /></div>

            <div className=' flex flex-col-reverse  items-center justify-between gap-8 whitespace-nowrap '>
              <div className='Side_Item'><h1>تواصل معنا</h1> <img src={CallIcon} alt="" /></div>
              <div className='Side_Item'><h1>شركاؤنا</h1> <img src={PartenersIcon} alt="" /></div>
              <div className='Side_Item'><h1>الاقسام</h1> <img src={SectionsIcon} alt="" /></div>
              <div className='Side_Item'><h1>الملف الشخصي</h1> <img src={ProfileIcon} alt="" /></div>
              <div className='Side_Item'><h1>الصفحة الرئيسية</h1> <img src={HomeIcon} alt="" /></div>
            </div>


            <div></div>

          </aside>
        )
      }









      <div className='absolute bottom-0 left-0 w-full  h-[1px] bg-white'></div>


    </nav>
  )

}



function Templates({ img, title }) {

  return (
    <div className='w-[400px] h-[250px] rounded-lg overflow-hidden relative hover:-translate-y-4 transition-all    cursor-pointer group  drop-shadow-lg'>
      <img className='w-full h-full object-cover group-hover:scale-110 transition-all ' src={img} alt="" />
      <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center w-full text-white text-xl z-[2]'>{title}</h1>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center w-full bg-black h-[15%] opacity-25 group-hover:h-full  transition-all'></div>

    </div>
  )


}



function Recommendation({ img, p, name }) {
  return (
    <div className=' relative  w-[430px] h-[230px]   bg-primary hover:bg-purple70 hover:-translate-y-5 p-2 rounded transition-all text-white '>
      <img className='m-auto mt-5 red' src={SmailyFace} alt="" />
      <p className='text-center mt-5 '>{p}</p>

      <div className='absolute -bottom-7  left-1/2 transform -translate-x-1/2  rounded-full w-20 h-20 bg-white'>
        <img src={img} alt="" />
        <h1 className='text-black  text-center'>{name}</h1>
      </div>

    </div>
  )

}



function Footer() {
  return (
    <footer className='w-full  flex md:items-start pt-14 pb-5 md:flex-row-reverse flex-col items-center justify-around gap-4 mt-28 text-right  bg-gradient-to-r from-[#43CFC6] to-[#C8ADEF] '>


      <section className='flex flex-col gap-4 text-white text-center'>
        <h1 className='font-semibold text-3xl'>تواصل معنا</h1>
        <Link to="tel:+201276071829" className='flex items-center justify-end gap-4'>
          <img src={CallIcon} alt="" />
          <h2>+201276071829</h2>
        </Link>
        <Link to="mailto:mustafagamal51112@gmail.com">Mustafagamal51112@gmail.com</Link>
        
        <div className="flex items-center justify-end gap-4">
          <Link to="https://www.facebook.com/mustafa.gamal.9231712/" target='_blank' className="flex items-center">
            <FaFacebook />
          </Link>
          <Link to="https://github.com/mustafagamal51112" target='_blank' className="flex items-center">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/mustafa-gamal-ba48a7243/" target='_blank' className="flex items-center">
            <FaLinkedin />
          </Link>
        </div>
      </section>



      
      <section className='flex flex-col gap-4 text-white md:text-right  text-center  md:mt-0  mt-6'>
        
      <h1 className='font-semibold text-3xl'>المشاريع السابقة</h1>

      <Link to={'https://we-school.vercel.app'}  className='text-xl  '>وي</Link>
      <Link to={'https://ktaby.vercel.app'}  className='text-xl  '>كتابي</Link>
      <Link to={'https://zaman-web.vercel.app'}  className='text-xl  '>زمن</Link>
      <Link to={'https://khair-ten.vercel.app'}  className='text-xl  '>خير</Link>


      </section>
      


      <section  className='flex flex-col gap-4  text-white  text-center md:mt-0  mt-6'>
      <h1 className='font-semibold text-3xl'>قل مرحبا</h1>

      <ContactForm />

      </section>



    </footer>
  )

}



function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name === '' || email === '' || message === '') {
      toast.error('يرجي تعبئة جميع الحقول');
      
    }else{
      const mailtoLink = `mailto:Mustafagamal51112@gmail.com?subject=New Inquiry&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto  text-purple70">
      <input
        type="text"
        name="name"
        placeholder="الاسم"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md text-right  outline-none "
      />
      <input
        type="email"
        name="email"
        placeholder="البريد الإلكتروني"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md text-right  outline-none "
      />
      <input
        name="message"
        placeholder="الرسالة"
        value={formData.message}
        onChange={handleChange}
        className="border border-gray-300  p-2 h-36 w-72 rounded-md  text-right  outline-none "
      />
      <button onClick={handleSubmit} className="bg-purple70 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        ارسال
      </button>
    </form>
  );
}
