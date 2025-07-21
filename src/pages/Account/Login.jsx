import { memo, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Google from "../../assets/img/1.webp";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useIsLogin } from "../../context/loginContext";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
function Login() {
  const { setIsLogin } = useIsLogin();
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const { isLogin } = useIsLogin();
  //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (isLogin) {
      navigate("/bazrafkan-store/UserInformation");
    }
  }, [isLogin]);
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

      <div className="Login flex justify-center items-center">
        <div className="flex flex-col items-center  p-2 mb-4 bg-[#e4f0fd]   w-[80%] ">
          <button
            onClick={handleLogin}
            className=" bg-white    rounded-sm flex justify-center items-center gap-1 px-5 py-.5 font-[600]"
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
          <form
            action="#"
            className="flex flex-col  gap-2 justify-center items-center w-[90%] py-3 "
          >
            <input
              ref={nameRef}
              className="placeholder:text-gray-300 text-[80%] w-[70%]  bg-white    rounded-sm p-1 px-2"
              type="text"
              name="name"
              placeholder="نام کاربری"
              required
            />
            <input
              ref={passwordRef}
              className="placeholder:text-gray-300 text-[80%] w-[70%]   bg-white     rounded-sm p-1 px-2"
              type="password"
              name="password"
              placeholder="رمز عبور"
              required
              maxLength="8"
              minLength="8"
            />

            <div className="flex gap-1 w-[100%] pt-1 ">
              <button
                className="bg-blue-400  font-bold w-[45%] rounded-sm"
                type="button"
                onClick={handleLogin}
              >
                ورورد
              </button>
              <a
                href="#"
                className=" text-center flex justify-center items-center text-[95%] font-[500] bg-blue-400 w-[55%] rounded-sm"
              >
                فراموشی رمز عبور؟
              </a>
            </div>
          </form>

          <NavLink
            to="/bazrafkan-store/Account"
            className="flex justify-center"
          >
            <p>قبلا حساب کاربری نداشته اید؟</p>
            <span className="text-[90%] px-1.5  text-[#0a57b0]">ساخت حساب</span>
          </NavLink>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default memo(Login);
