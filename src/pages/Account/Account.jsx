import { memo } from "react";
import "./Account.css";
import Google from "../../assets/img/1.png";
import Facebook from "../../assets/img/2.jpeg";
import Github from "../../assets/img/3.png";
import x from "../../assets/img/4.png";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
function Account() {
  return (
    <>
    <Navbar></Navbar>
    <Support></Support>
     <div className="h-12"></div>
      <div className=" flex justify-center items-center  ">
        <div className="flex flex-col items-center  mt-3 p-2 bg-gray-700">
          <div className="grid grid-cols-2 grid-rows-2 gap-x-1.5 gap-y-1.5 p-1 ">
            <a
              href="#"
              className="bg-gray-400 text-gray-900 rounded-sm flex justify-center items-center gap-1 px-5 py-.5"
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
              className="bg-gray-400 text-gray-900 rounded-sm flex justify-center items-center gap-1 px-5 py-.5"
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
              className="bg-gray-400 text-gray-900 rounded-sm flex justify-center items-center gap-1 px-5 py-.5"
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
              className="bg-gray-400 text-gray-900 rounded-sm flex justify-center items-center gap-1 px-5 py-.5"
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
              className="placeholder:text-gray-300 text-[80%] w-[70%] bg-gray-500 rounded-sm p-1 px-2"
              type="text"
              name="name"
              placeholder="نام کاربری"
              required
            />
            <input
              class="placeholder:text-gray-300 text-[80%] w-[70%] bg-gray-500 rounded-sm p-1 px-2"
              type="text"
              name="lastname"
              placeholder="شماره تماس"
              required
            />
            <input
              class="placeholder:text-gray-300 text-[80%] w-[70%] bg-gray-500 rounded-sm p-1 px-2"
              type="email"
              name="email"
              placeholder="ایمیل"
              required
            />
            <input
              class="placeholder:text-gray-300 text-[80%] w-[70%] bg-gray-500 rounded-sm p-1 px-2"
              type="password"
              name="password"
              placeholder="رمز عبور (با 8 کاراکتر)"
              required
              maxlength="8"
              minlength="8"
            />
            <button class="bg-blue-400 w-[30%] rounded-sm mt-1" type="submit">
              ثبت نام
            </button>
          </form>
          <NavLink
            to="/bazrafkan-store/Login"
            className="flex justify-center text-gray-300"
          >
            <p>قبلا حساب کاربری داشته اید؟</p>
            <span class="text-blue-400 text-[90%]">ورود</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default memo(Account);
//
