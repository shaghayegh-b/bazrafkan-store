import { memo, useEffect, useState } from "react";
import "./Meno.css";
import imgporo from "../../assets/img/111.png";
function Meno() {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("theme"))
    );
  });
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <>
      <div className="Meno w-[85vw] fixed top-0 right-0 z-2  text-gray-200">
        <div className="Meno1 bg-blue-500 w-[100%] text-white flex flex-row p-3 gap-3 items-center">
          <div className="w-[2rem] h-[2rem] bg-red-400 rounded-full">
            <img
              src={imgporo}
              alt="profile"
              className="w-[2rem] h-[2rem] bg-red-400 rounded-full"
            />
          </div>
          <div className="">
            <p>نام کاربری</p>
            <p>09399619640</p>
          </div>
          <span className="relative w-[33%] ">
            <i className="absolute bottom-[-0.7rem] left-[-0.6rem] font-bold">
              &gt;
            </i>
          </span>
        </div>
        <div className="Meno2 bg-gray-700">
          <ul>
            <li>
              <a href="">
                <i className="fa fa-home"></i>همه محصولات
              </a>
            </li>
            <li>
              <a href="">
                <i className=" fab fa-Category"></i>دسته بندی
              </a>
            </li>
            <li>
              <a href="">
                <i className=""></i>محصولات مورد علاقه
              </a>
            </li>
            <li>
              <a href="">
                <i className=""></i>محصولات ذخیره شده
              </a>
            </li>
            <li>
              <a href="">
                <i className=""></i>چت های من
              </a>
            </li>
            <li>
              <a href="">
                <i className=""></i>پرداخت های من
              </a>
            </li>
            <li>
              <a href="">
                <i className=""></i>اعلانات
              </a>
            </li>
          </ul>
          <hr className=" border-gray-500" />
          <ul>
            <li title="Change Theme Mode" onClick={() => setIsDark(!isDark)}>
              <a
                href=""
                className="w-[100%] h-[21px] md:h-[17px] m-auto transition-all duration-300
                 hover:rotate-180 ease-in-out"
              >
                <i
                  className={`fas ${
                    isDark ? "fa-sun" : "fa-moon"
                  } text-[100%] transition-transform duration-500`}
                ></i>
                حالت شب
              </a>
            </li>
            <li>
              <a href="">
                <i className=""></i>تنظیمات
              </a>
            </li>
            <li>
              <a href="">
                <i className=""></i>پشتیبانی
              </a>
            </li>
          </ul>
          <hr className=" border-gray-500" />
          <ul>
            <li>
              <a href="">
                <i className=""></i>خروج از حساب کاربری
              </a>
            </li>
          </ul>
        </div>
        <div className="Meno3 bg-gray-800 p-[.1rem] text-center">
          app version 6.8.1
        </div>
      </div>
    </>
  );
}
export default memo(Meno);
