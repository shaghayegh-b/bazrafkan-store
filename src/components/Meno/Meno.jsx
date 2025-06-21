import { memo, useEffect, useState } from "react";
import "./Meno.css";
import { mymeno } from "../Navbar/Navbar";
import { useContext } from "react";
import { dataCategory } from "../Category/dataCategory";
function Meno() {
  const [grouping, setGrouping] = useState(false);
  const meno = useContext(mymeno);
  console.log(meno);

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
      <div
        className={`Meno h-[100vh]  overflow-y-scroll text-gray-200  transition-all duration-300 ease-in-out ${
          meno ? "w-[85vw]" : "w-[0]"
        } `}
      >
        <div className="Meno1 bg-blue-500 w-[100%] text-white flex flex-row p-3 gap-3 items-center">
          <div className="w-[2rem] h-[2rem] bg-gray-600 rounded-full flex justify-center items-center">
            <i className="fa fa-user text-[120%]"></i>
          </div>
          <div className="">
            <p>نام کاربری</p>
            <p>09399619640</p>
          </div>
          <span className="relative w-[33%] ">
            <i className="fa fa-chevron-circle-left absolute bottom-[-0.7rem] left-[-0.6rem] font-bold"></i>
          </span>
        </div>
        <div className="Meno2 bg-gray-700">
          <ul>
            <li>
              <a href="">
                <i className="fa fa-home text-blue-300"></i>همه محصولات
              </a>
            </li>
            <li className="relative" onClick={() => setGrouping(!grouping)}>
              <button href="">
                <i className="fas fa-store"></i>دسته بندی
                <i
                  className={`fa fa-chevron-up absolute left-0 top-[7px] transition-all duration-300 ease-in-out ${
                    grouping ? "rotate-[180deg]" : ""
                  }`}
                ></i>
              </button>
              <div
                className={`transition-all duration-1000 ease-in-out ${
                  grouping ? "" : "hidden"
                }`}
              >
                <ul
                  className={`transition-all duration-1000 ease-in-out ${
                    grouping ? "" : "h-0"
                  }`}
                >
                  {dataCategory.map((oneCategory) => (
                    <li>
                      <a href="">{oneCategory.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <a href="">
                <i className="fa fa-star"></i>محصولات مورد علاقه
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-bookmark"></i>محصولات ذخیره شده
              </a>
            </li>
            <li>
              <a href="">
                <i className="fas fa-comments"></i>چت های من
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-bell"></i>اعلانات
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
                <i className="fa fa-link"></i>ارتباط با ما
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-gear"></i>تنظیمات
              </a>
            </li>
          </ul>
          <hr className=" border-gray-500" />
          <ul>
            <li>
              <a href="">
                <i className="fa fa-share-square"></i>خروج از حساب کاربری
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
