import { memo, useEffect, useRef } from "react";
import {  NavLink, useNavigate } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {  useIsLogin } from "../../context/loginContext";
function Login() {
    const nameRef=useRef(null)
    const passwordRef=useRef(null)
    const navigate =useNavigate()
    const { isLogin}=useIsLogin()
  //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(()=>{
    if (isLogin) {
        navigate("/bazrafkan-store/UserInformation")
    }
  },[isLogin])

  const handleLogin=()=>{

    const nameValue = nameRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (nameValue === isLogin.name && passwordValue === "12345678") {
      navigate("/bazrafkan-store/UserInformation");
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  }
  return (
    <>
      <Header>حساب کاربری</Header>

        <div className="Login flex justify-center items-center">
          <div className="flex flex-col items-center  p-2 mb-4 bg-gray-700 w-[80%] ">

            <form
              action="#"
              className="flex flex-col  gap-2 justify-center items-center w-[90%] py-3 "
            >
              <input
              ref={nameRef}
                className="placeholder:text-gray-300 text-[80%] w-[70%] bg-gray-600 rounded-sm p-1 px-2"
                type="text"
                name="name"
                placeholder="نام کاربری"
                required
              />
              <input
              ref={passwordRef}
                className="placeholder:text-gray-300 text-[80%] w-[70%] bg-gray-600 rounded-sm p-1 px-2"
                type="password"
                name="password"
                placeholder="رمز عبور"
                required
                maxLength="8"
                minLength="8"
              />

              <div className="flex gap-1 w-[100%] pt-1 text-gray-800">
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
              className="flex justify-center text-gray-200"
            >
              <p>قبلا حساب کاربری نداشته اید؟</p>
              <span className="text-blue-800 text-[90%] px-1.5">ساخت حساب</span>
            </NavLink>
          </div>
        </div>


      <Footer></Footer>
    </>
  );
}
export default memo(Login);
