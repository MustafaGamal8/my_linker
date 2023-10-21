import { useState } from "react";
import { BsCheckLg, BsLink45Deg } from "react-icons/bs"
import { HiEye, HiEyeOff, HiLockClosed, HiOutlineMail } from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../assets/bg.svg"
import { Link } from "react-router-dom";
import  LoginHandler  from "../functions/LoginHandler";

const Login = () => {
  return (
    <div className="flex justify-center items-center  h-[100vh]" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}>

      <section className="bg-white drop-shadow-xl p-2 md:p-10 rounded lg:w-[35%] md:w-[50%] w-[90%] ">
        <Link to={"/"}><img src="/assets/logo.png" className='h-36 m-auto' alt="" /></Link>
        <h1 className="text-3xl font-semibold">...مرحبا بك في</h1>
        <h1 className="text-3xl font-bold text-darkgreen mt-2">منصتنا</h1>

        <section className='w-full md:w-[80%] lg:w-[60%] m-auto'>
          <Link to={"https://mylinker-server.vercel.app/auth/google"} className='flex items-center justify-center w-full p-3 gap-3 bg-white drop-shadow-md m-auto cursor-pointer rounded-lg mt-4 hover:bg-gray-50 transition-all'>
            <svg width={32} height={25} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_24_797)">
                <path d="M7.09188 19.3378L5.978 23.4961L1.90681 23.5822C0.690125 21.3255 0 18.7436 0 15.9999C0 13.3467 0.64525 10.8447 1.789 8.6416H1.78988L5.41437 9.3061L7.00212 12.9089C6.66981 13.8777 6.48869 14.9177 6.48869 15.9999C6.48881 17.1743 6.70156 18.2997 7.09188 19.3378Z" fill="#FBBB00" />
                <path d="M31.7207 13.0107C31.9045 13.9786 32.0003 14.9782 32.0003 15.9997C32.0003 17.1452 31.8799 18.2626 31.6504 19.3404C30.8716 23.0081 28.8364 26.2107 26.0171 28.4771L26.0162 28.4762L21.4509 28.2433L20.8048 24.2099C22.6756 23.1127 24.1376 21.3958 24.9077 19.3404H16.3521V13.0107H25.0325H31.7207Z" fill="#518EF8" />
                <path d="M26.0157 28.4763L26.0166 28.4772C23.2747 30.6811 19.7915 31.9998 15.9999 31.9998C9.90674 31.9998 4.60918 28.5941 1.90674 23.5823L7.0918 19.3379C8.44299 22.944 11.9217 25.5111 15.9999 25.5111C17.7529 25.5111 19.3951 25.0372 20.8043 24.21L26.0157 28.4763Z" fill="#28B446" />
                <path d="M26.2128 3.6835L21.0295 7.927C19.5711 7.01538 17.8471 6.48875 16.0001 6.48875C11.8295 6.48875 8.28575 9.17356 7.00225 12.909L1.78994 8.64175H1.78906C4.45194 3.50769 9.81631 0 16.0001 0C19.8822 0 23.4418 1.38287 26.2128 3.6835Z" fill="#F14336" />
              </g>
              <defs>
                <clipPath id="clip0_24_797">
                  <rect width={32} height={32} fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h1 className='text-md'>التسجيل بواسطة جوجل</h1>
          </Link>

          <Link to={"https://mylinker-server.vercel.app/auth/facebook"} className='flex items-center justify-center w-full p-3 gap-3 bg-white drop-shadow-md m-auto cursor-pointer rounded-lg mt-4 hover:bg-gray-50 transition-all'>
            <svg width={16} height={25} viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0789 5.31333H16V0.225333C15.496 0.156 13.7629 0 11.7444 0C2.50246 0 5.01692 10.4667 4.64895 12H0V17.688H4.64761V32H10.3458V17.6893H14.8054L15.5134 12.0013H10.3445C10.5951 8.236 9.32989 5.31333 13.0789 5.31333Z" fill="#3B5999" />
            </svg>


            <h1 className='text-md'>التسجيل بواسطة فيسبوك</h1>

          </Link>
        </section>


        <div className="flex items-center justify-center my-8">
          <div className="w-2/5 border-t-2 border-gray-400"></div>
          <div className="mx-3 text-gray-500">او</div>
          <div className="w-2/5 border-t-2 border-gray-400"></div>
        </div>

        <LoginForm />



        <div className="flex items-center justify-center  gap-1 mt-7 text-sm font-semibold">
          <Link to={"/auth/signup"}  className="text-darkgreen">إنشاء حساب</Link>
          <h1>لا تملك حساب ؟</h1>
        </div>


      </section>

    </div>
  );
}

export default Login;





const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleInputs = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formValiditon = () => {
    const { email, password } = formData
    if (email === "" || password === "") {
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

  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await formValiditon()

    if (response) {
       LoginHandler(formData.email, formData.password)
    }

  };

  return (

    <form className="flex flex-col items-center  md:w-[80%] p-1 m-auto">
      <div className="flex items-center p-1 w-full border-b border-gray-400">
        <input
          type="text"
          placeholder="البريد الإلكتروني"
          name="email"
          onChange={handleInputs}
          className="bg-transparent p-2 outline-none  w-full placeholder:text-base  placeholder:text-right  focus:placeholder:text-primary text-lg"
        />
        <HiOutlineMail className="text-xl text-gray-400" />

      </div>

      <div className="flex items-center p-1  w-full">
        {isPasswordVisible ? (
          <HiEyeOff className="text-xl text-gray-500 cursor-pointer hover:scale-105" onClick={togglePasswordVisible} />
        ) : (
          <HiEye className="text-xl text-gray-400 cursor-pointer hover:scale-105" onClick={togglePasswordVisible} />
        )}

        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="كلمة المرور"
          name="password"
          onChange={handleInputs}
          className="bg-transparent p-2 outline-none border-none w-full placeholder:text-base  placeholder:text-right focus:placeholder:text-primary text-lg"
        />
        <HiLockClosed className="text-xl text-gray-400" />


      </div>


      <button onClick={handleLogin} className="flex items-center justify-center gap-2 bg-darkgreen p-3 w-[80%] rounded-md hover:bg-primary mt-10 text-white">
        <BsCheckLg className="text-xl" />  تسجيل الدخول
      </button>
    </form>
  );
};
