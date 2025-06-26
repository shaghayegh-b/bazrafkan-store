import { memo } from "react";
import "./Account.css";
import Google from "https://raw.githubusercontent.com/shaghayegh-b/bazrafkan-store/refs/heads/main/src/assets/imag/1.webp";
import Facebook from "https://raw.githubusercontent.com/shaghayegh-b/bazrafkan-store/refs/heads/main/src/assets/imag/2.webp";
import Github from "https://raw.githubusercontent.com/shaghayegh-b/bazrafkan-store/refs/heads/main/src/assets/imag/3.webp";
import x from "https://raw.githubusercontent.com/shaghayegh-b/bazrafkan-store/refs/heads/main/src/assets/imag/4.webp";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";

function Login() {
  return (
    <>
        <Navbar></Navbar>
    <Support></Support>
     <div className="h-12"></div>
      <div className=" flex justify-center items-center">
        <div className="flex flex-col items-center  mt-3 p-2 bg-gray-700">
          <div className="grid grid-cols-2 grid-rows-2 gap-x-1.5 gap-y-1.5 p-1 ">
            <a
              href="#"
              className="bg-gray-400 text-gray-900 rounded-sm flex justify-center items-center gap-1 px-5 py-.5 font-[600]"
            >
              Google
              <span className="w-[20px] h-[20px]">
                <img
                  src={Google}
                  alt="Google"
                  className="rounded-full w-[20px] h-[20px]"
                />
              </span>
            </a>
            <a
              href="#"
              className="bg-gray-400 text-gray-900 rounded-sm flex justify-center items-center gap-1 px-5 py-.5 font-[600]"
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
              className="bg-gray-400 text-gray-900 rounded-sm flex justify-center items-center gap-1 px-5 py-.5 font-[600]"
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
              className="bg-gray-400 text-gray-900 rounded-sm flex justify-center items-center gap-1 px-5 py-.5 font-[600]"
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
              className="placeholder:text-gray-300 text-[80%] w-[70%] bg-gray-600 rounded-sm p-1 px-2"
              type="text"
              name="name"
              placeholder="نام کاربری"
              required
            />
            <input
              className="placeholder:text-gray-300 text-[80%] w-[70%] bg-gray-600 rounded-sm p-1 px-2"
              type="password"
              name="password"
              placeholder="رمز عبور"
              required
              maxlength="8"
              minlength="8"
            />

            <div className="flex gap-1 w-[100%] pt-1 text-gray-800">
           <button class="bg-blue-400  text-[120%] font-bold w-[50%] rounded-sm" type="submit">
              ثبت نام
            </button>
              <a href="" className=" text-center flex justify-center items-center text-[95%] font-[500] bg-blue-400 w-[50%] rounded-sm">
                فراموشی رمز عبور؟
              </a>
            </div>
          </form>

          <NavLink
            to="/bazrafkan-store/Account"
            className="flex justify-center text-gray-200"
          >
            <p>قبلا حساب کاربری نداشته اید؟</p>
            <span class="text-blue-800 text-[90%] px-1.5">ورورد</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default memo(Login);
