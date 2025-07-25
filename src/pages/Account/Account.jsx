import { memo, useEffect } from "react";
import Google from "../../assets/img/1.webp";
import Facebook from "../../assets/img/2.webp";
import Github from "../../assets/img/3.webp";
import x from "../../assets/img/4.webp";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useIsLogin } from "../../context/loginContext";

function Account() {
  const { setIsLogin } = useIsLogin();
  const navigate = useNavigate();

  //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLogin = useGoogleLogin({
    // ورود موفق جواب رو بصورتresponseبگیر
    onSuccess: async (response) => {
      // گرفتن اطلاعات کاربر
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            // اضافه کردن توکن به هدر برای احراز هویت
            Authorization: `Bearer ${response.access_token}`,
          },
        }
      );
      setIsLogin(res.data);
      navigate("/bazrafkan-store/UserInformation");
    },
    onError: () => {
      console.log("ورود ناموفق!");
    },
  });
  return (
    <>
      <Header>حساب کاربری</Header>

      <div className="Account flex justify-center items-center min-h-screen flex-col">
        <div className=" flex-1 flex flex-col justify-center items-center p-2 mb-4 bg-[#e4f0fd] w-[80%]">
          <div className="grid grid-cols-2 grid-rows-2 gap-x-1.5 gap-y-1.5 p-1 ">
            <button
              onClick={handleLogin}
              className=" bg-white   rounded-sm flex justify-center items-center gap-1 px-5 py-.5 font-[600]"
            >
              Google
              <span className="w-[20px] h-[20px]">
                <img
                  src={Google}
                  alt="Google"
                  className="rounded-full w-[20px] h-[20px]"
                />
              </span>
            </button>
            <a
              href="#"
              className=" bg-white     rounded-sm flex justify-center items-center gap-1 px-5 py-.5 font-[600]"
            >
              Facebook
              <span className="w-[20px] h-[20px]">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="rounded-full w-[20px] h-[20px]"
                />
              </span>
            </a>
            <a
              href="#"
              className="  bg-white    rounded-sm flex justify-center items-center gap-1 px-5 py-.5 font-[600]"
            >
              Github
              <span className="w-[20px] h-[20px]">
                <img
                  src={Github}
                  alt="Github"
                  className="rounded-full w-[20px] h-[20px]"
                />
              </span>
            </a>
            <a
              href="#"
              className="   bg-white   rounded-sm flex justify-center items-center gap-1 px-5 py-.5 font-[600]"
            >
              X
              <span className="w-[20px] h-[20px]">
                <img
                  src={x}
                  alt="X"
                  className="rounded-full w-[20px] h-[20px]"
                />
              </span>
            </a>
          </div>
          <form
            action="#"
            className="flex flex-col  gap-2 justify-center items-center w-[100%] py-3 "
          >
            <input
              className="placeholder:text-gray-300 text-[80%] w-[70%]   bg-white   rounded-sm p-1 px-2"
              type="text"
              name="name"
              placeholder="نام کاربری"
              required
            />
            <input
              className="placeholder:text-gray-300 text-[80%] w-[70%]    bg-white     rounded-sm p-1 px-2"
              type="text"
              name="lastname"
              placeholder="شماره تماس"
              required
            />
            <input
              className="placeholder:text-gray-300 text-[80%] w-[70%]   bg-white     rounded-sm p-1 px-2"
              type="email"
              name="email"
              placeholder="ایمیل"
              required
            />
            <input
              className="placeholder:text-gray-300 text-[80%] w-[70%]  bg-white      rounded-sm p-1 px-2"
              type="password"
              name="password"
              placeholder="رمز عبور (با 8 کاراکتر)"
              required
              maxlength="8"
              minlength="8"
            />
            <button
              class=" text-[120%] bg-blue-400 font-bold px-10 rounded-sm mt-1"
              type="submit"
            >
              ثبت نام
            </button>
          </form>
          <NavLink to="/bazrafkan-store/Login" className="flex justify-center">
            <p>قبلا حساب کاربری داشته اید؟</p>
            <span class=" text-[90%]  text-[#0a57b0]">ورود</span>
          </NavLink>
        </div>
              <Footer></Footer>
      </div>

    </>
  );
}
export default memo(Account);
//
