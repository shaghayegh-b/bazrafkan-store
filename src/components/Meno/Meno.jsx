import { memo, useEffect, useState } from "react";
import "./Meno.css";
import { mymeno } from "../Navbar/Navbar";
import { useContext } from "react";
import { dataCategory } from "../Category/dataCategory";
import { NavLink } from "react-router-dom";
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
        className={`Meno h-[100vh] bg-gray-700 overflow-y-scroll  transition-all duration-300 ease-in-out ${
          meno ? "w-[85vw]" : "w-[0]"
        } `}
      >
        <div className="Meno1 bg-blue-500 w-[100%] flex flex-row p-3 gap-3 items-center">
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
<div >
<div className="Meno2 bg-gray-700 flex flex-col gap-2">
          <ul className="flex flex-col gap-3">
            <li>
              <NavLink to="/bazrafkan-store/">
                <i className="fa fa-home text-blue-300"></i><span className="font-[600]">همه محصولات</span>
              </NavLink>
            </li>
            <li className="relative" onClick={() => setGrouping(!grouping)}>
              <button href="">
                <i className="fas fa-store"></i><span className="font-[600]">دسته بندی</span>
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
                <i className="fa fa-star"></i><span className="font-[600]">محصولات مورد علاقه</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-bookmark"></i><span className="font-[600]">محصولات ذخیره شده</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fas fa-comments"></i><span className="font-[600]">سوالات متداول</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-bell"></i><span className="font-[600]">اعلانات</span>
              </a>
            </li>
          </ul>
          <hr className=" border-gray-500" />
          <ul className="flex flex-col gap-3">
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
                ></i><span className="font-[600]">حالت شب</span>
              </a>
            </li>
            <li>
              <NavLink to="/bazrafkan-store/ContactUs">
                <i className="fa fa-link"></i><span className="font-[600]">ارتباط با ما</span>
              </NavLink>
            </li>
            <li>
              <a href="">
                <i className="fa fa-gear"></i><span className="font-[600]">تنظیمات</span>
              </a>
            </li>
          </ul>
          <hr className=" border-gray-500" />
          <ul className="flex flex-col gap-3">
            <li>
              <a href="">
                <i className="fa fa-share-square"></i><span className="font-[600]">خروج از حساب کاربری</span>
              </a>
            </li>
          </ul>
        </div>
</div>
      </div>
    </>
  );
}
export default memo(Meno);
