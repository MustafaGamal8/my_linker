import { useState } from "react";
import {BsCheckLg, BsLink45Deg} from "react-icons/bs"
import {HiEye, HiEyeOff, HiLockClosed, HiOutlineMail} from "react-icons/hi"
import { Link, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";



const Auth = () => {
  const {mood} = useParams() || "login"

  return (
    <section className="w-full md:h-full lg:overflow-hidden"> 
      <nav className="bg-white drop-shadow-lg w-full h-16 rounded-b flex items-center justify-center">
          <img
            src="/assets/logo.png"
            className="h-full object-contain"
            alt=""
          />
         
      </nav>
      
    <div  className="relative w-full h-full flex flex-col-reverse  md:flex-row items-center justify-between    gap-5 mt-5 md:mt-0">
      
      <div className="w-full md:w-[40%]  h-32 md:h-full flex  flex-col items-center justify-around    bg-gradient-to-b from-primary">
        <h1 className="text-blue-400 bg-white drop-shadow-md p-3 text-3xl font-semibold w-full text-center hidden md:block">{mood === "login"? "تسجيل الدخول":"إنشاء حساب"}</h1>
        <img className="w-[40%] md:w-[80%] " src="/assets/security.svg" alt="" />
      </div>
      
      {
        mood === "login"?
        <LoginForm />
        :  
        <SignUp />

      }
    </div>
    </section>
  );
}
export default Auth;






const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleInputs = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formValiditon = ()=>{
    const {email,password} = formData
    if(email === "" || password === ""){
      toast.error("يرجي ادخال البريد الالكتروني وكلمة المرور")
      return false
    }

    if (!email.includes("@")) {
      toast.error("البريد الإلكتروني غير صالح (@)");
      return false;
    }

    if (password.length < 6) {
      toast.error("كلمة المرور يجب أن تحتوي على ما لا يقل عن 6 أحرف");
      return false;
    }

    return true
  }

  const handleLogin = async () => {
    const response = await formValiditon()

    if (response){
      toast.success("مرحبا")
      Navigate("/profile");
    }

  };

  return (
    <div className="relative bg-primary p-3 rounded-md w-[90%] md:w-[50%] lg:w-[30%] m-auto">
      <div className="gap-5 bg-white drop-shadow-2xl text-secondary p-5 rounded-md flex flex-col items-center justify-center w-full capitalize">
        <div className="absolute top-4 right-3 bg-primary p-2 md:px-5 rounded-lg"></div>
        <div className="absolute bottom-4 left-3 bg-primary p-2 md:px-5 rounded-lg"></div>

        <div className="w-[50%]">
          <img
            src="/assets/logo.png"
            className="w-full object-contain"
            alt=""
          />
        </div>

        <div className="text-center mt-5 flex flex-col  gap-y-2 ">
          <h1 className="font-semibold text-2xl">! مرحبًا</h1>
          <p className="text-gray-400 text-sm ">
            قم بإدخال اسم المستخدم وكلمة المرور <br /> ولنبدأ الرحلة معًا
          </p>
        </div>

        <form className="flex flex-col items-center border border-gray-400 rounded w-[80%] p-1">
          <div className="flex items-center p-1 w-full">
            <HiOutlineMail className="text-xl text-blue-500" />
            <input
              type="text"
              placeholder="البريد الإلكتروني"
              name="email"
              onChange={handleInputs}
              className="bg-transparent p-2 outline-none border-none w-full placeholder:text-base text-xl"
            />
          </div>

          <div className="flex items-center p-1 border-t border-gray-400 w-full">
            <HiLockClosed className="text-xl text-blue-500" />
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="كلمة المرور"
              name="password"
              onChange={handleInputs}
              className="bg-transparent p-2 outline-none border-none w-full placeholder:text-base text-xl"
            />
            {isPasswordVisible ? (
              <HiEyeOff className="text-xl text-blue-500 cursor-pointer hover:scale-105" onClick={togglePasswordVisible} />
            ) : (
              <HiEye className="text-xl text-blue-500 cursor-pointer hover:scale-105" onClick={togglePasswordVisible} />
            )}
          </div>
        </form>
        <Link to={"/auth/signup"} className="cursor-pointer hover:text-primary">
          أو انضم
        </Link>

        <button onClick={handleLogin} className="flex items-center justify-center gap-2 bg-primary p-3 w-[80%] rounded-md hover:bg-[#24a59c] mt-10 text-white">
          <BsCheckLg className="text-xl" /> تسجيل الدخول
        </button>
      </div>
    </div>
  );
};

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleInputs = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const formValiditon = ()=>{
    const {email,password} = formData
    if(email === "" || password === ""){
      toast.error("يرجي ادخال البريد الالكتروني وكلمة المرور")
      return false
    }

    if (!email.includes("@")) {
      toast.error("البريد الإلكتروني غير صالح (@)");
      return false;
    }

    if (password.length < 6) {
      toast.error("كلمة المرور يجب أن تحتوي على ما لا يقل عن 6 أحرف");
      return false;
    }

    return true
  }


  const handleSignUp = async() => {
    const response = await formValiditon()

    if (response){
      toast.success("مرحبا")
      Navigate("/profile");
    }
  };

  return (
    <div className="relative bg-primary p-3 rounded-md w-[90%] md:w-[50%] lg:w-[30%] m-auto">
      <div className="gap-5 bg-white drop-shadow-2xl text-secondary p-5 rounded-md flex flex-col items-center justify-center w-full capitalize">
        <div className="absolute top-4 right-3 bg-primary p-2 md:px-5 rounded-lg"></div>
        <div className="absolute bottom-4 left-3 bg-primary p-2 md:px-5 rounded-lg"></div>

        <div className="w-[50%]">
          <img
            src="/assets/logo.png"
            className="w-full object-contain"
            alt=""
          />
        </div>

        <div className="text-center mt-5 flex flex-col  gap-y-2 ">
          <h1 className="font-semibold text-2xl">! مرحبًا</h1>
          <p className="text-gray-400 text-sm ">
            قم بإدخال اسم المستخدم وكلمة المرور <br /> ولنبدأ الرحلة معًا
          </p>
        </div>

        <form className="flex flex-col items-center border border-gray-400 rounded w-[80%] p-1">
          <div className="flex items-center p-1 w-full">
            <HiOutlineMail className="text-xl text-blue-500" />
            <input
              type="text"
              placeholder="البريد الإلكتروني"
              name="email"
              onChange={handleInputs}
              className="bg-transparent p-2 outline-none border-none w-full placeholder:text-base text-xl"
            />
          </div>

          <div className="flex items-center p-1 border-t border-gray-400 w-full">
            <HiLockClosed className="text-xl text-blue-500" />
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="كلمة المرور"
              name="password"
              onChange={handleInputs}
              className="bg-transparent p-2 outline-none border-none w-full placeholder:text-base text-xl"
            />
            {isPasswordVisible ? (
              <HiEyeOff className="text-xl text-blue-500 cursor-pointer hover:scale-105" onClick={togglePasswordVisible} />
            ) : (
              <HiEye className="text-xl text-blue-500 cursor-pointer hover:scale-105" onClick={togglePasswordVisible} />
            )}
          </div>
        </form>
        <Link to={"/auth/login"} className="cursor-pointer hover:text-primary">
          أو تسجيل الدخول
        </Link>

        <button onClick={handleSignUp} className="flex items-center justify-center gap-2 bg-primary p-3 w-[80%] rounded-md hover:bg-[#24a59c] mt-10 text-white">
          <BsCheckLg className="text-xl" /> انشاء الحساب
        </button>
      </div>
    </div>
  );
};
