import { memo, useEffect, useState } from "react";
import "./Meno.css";
import { mymeno } from "../Navbar/Navbar";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAxios } from "../../context/AxiosContaext";
function Meno() {
  const { funcAxios } = useAxios();

  const [grouping, setGrouping] = useState(false);
  const { meno, setMeno } = useContext(mymeno);

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
        className={`Meno h-[100vh] bg-gray-700 transition-all duration-300 ease-in-out ${
          meno ? "w-[85vw]" : "w-[0]"
        } `}
      >
        <div className="overflow-y-scroll h-[inherit]">
          <div className="Meno1 bg-blue-500 w-[100%] flex flex-row p-3 py-8 gap-3 items-center">
            <div className="w-[2rem] h-[2rem] bg-gray-600 rounded-full flex justify-center items-center">
              <i className="fa fa-user text-[120%]"></i>
            </div>
            <div className="">
              <p>نام کاربری</p>
              <p>09399619640</p>
            </div>
            <span className="relative w-[33%] ">
              <i className="fa fa-chevron-circle-left absolute bottom-[-0.7rem] left-[-0.6rem] font-bold text-icon text-[120%] "></i>
            </span>
          </div>
          <div>
            <div className="Meno2 bg-gray-700 flex flex-col gap-2">
              <ul className="flex flex-col gap-3">
                <li>
                  <NavLink to="/bazrafkan-store/">
                    <i className="fa fa-home"></i>
                    <span className="font-[600]">همه محصولات</span>
                  </NavLink>
                </li>
                <li
                  className={`relative ${grouping ? "grouping" : ""}`}
                  onClick={() => setGrouping(!grouping)}
                >
                  <button>
                    <i className="fas fa-store"></i>
                    <span className="font-[600]">دسته بندی</span>
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
                      <li
                        onClick={() => {
                            setMeno(false)
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=مانتو"
                        );
                        }}
                      >
                        <p className=" tracking-tighter">مانتو</p>
                      </li>
                      <li
                       onClick={() => {
                            setMeno(false)
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=شلوار"
                        );
                        }}
                      >
                        <p className=" tracking-tighter">شلوار{"\u2009"}و{"\u2009"}دامن</p>
                      </li>
                      <li
                       onClick={() => {
                            setMeno(false)
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=ست"
                        );
                        }}
                      >
                        <p className=" tracking-tighter">ست</p>
                      </li>
                      <li
                       onClick={() => {
                            setMeno(false)
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=خونگی"
                        );
                        }}
                      >
                        <p className=" tracking-tighter"> تو{"\u2009"}خونه{"\u200A"}ای</p>
                      </li>
                      <li
                       onClick={() => {
                            setMeno(false)
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=ارایشی"
                        );
                        }}
                      >
                        <p className=" tracking-tighter">ارایشی{"\u2009"}بهداشتی</p>
                      </li>
                      <li
                       onClick={() => {
                            setMeno(false)
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=زمستونه"
                        );
                        }}
                      >
                        <p className=" tracking-tighter">لباس{"\u200A"}گرم</p>
                      </li>
                      <li
                       onClick={() => {
                            setMeno(false)
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=کیف"
                        );
                        }}
                      >
                        <p className=" tracking-tighter">کیف{"\u2009"}و{"\u2009"}کفش</p>
                      </li>
                      <li
                       onClick={() => {
                            setMeno(false)
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=اکسسوری"
                        );
                        }}
                      >
                        <p className=" tracking-tighter">اکسسوری</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/bazrafkan-store/FavProduct">
                    <i className="fa fa-star"></i>
                    <span className="font-[600]">محصولات مورد علاقه</span>
                  </Link>
                </li>
                <li>
                  <NavLink to="/bazrafkan-store/AskedQuestion">
                    <i className="fas fa-comments"></i>
                    <span className="font-[600]">سوالات متداول</span>
                  </NavLink>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-bell"></i>
                    <span className="font-[600]">اعلانات</span>
                  </a>
                </li>
              </ul>
              <hr className=" border-gray-500" />
              <ul className="flex flex-col gap-3">
                <li
                  title="Change Theme Mode"
                  onClick={() => setIsDark(!isDark)}
                >
                  <button type="submit" className="">
                    <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`}></i>
                    <span className="font-[600]">
                      {isDark ? "حالت روز" : "حالت شب "}
                    </span>
                  </button>
                </li>
                <li>
                  <NavLink to="/bazrafkan-store/ContactUs">
                    <i className="fa fa-link"></i>
                    <span className="font-[600]">ارتباط با ما</span>
                  </NavLink>
                </li>
              </ul>
              <hr className=" border-gray-500" />
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="">
                    <i className="fa fa-share-square"></i>
                    <span className="font-[600]">خروج از حساب کاربری</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(Meno);
