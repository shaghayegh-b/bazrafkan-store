import { memo, useEffect, useState } from "react";
import "./Meno.css";
import { mymeno } from "../Navbar/Navbar";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAxios } from "../../context/AxiosContaext";
import { useIsLogin } from "../../context/loginContext";
function Meno() {
  const { funcAxios } = useAxios();
  const { isLogin, logout } = useIsLogin();
  const navigate = useNavigate();
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
        className={`Meno h-[100vh]    transition-all duration-300 ease-in-out ${
          meno ? "w-[85vw]" : "w-[0]"
        } `}
      >
        <div className="overflow-y-scroll h-[inherit]">
          {isLogin && (
            <Link
              to="/bazrafkan-store/Login"
              className="Meno1 bg-white w-[100%] flex flex-row p-3 py-8 gap-3 items-center"
            >
              <div className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center">
                <i className="fa fa-user rounded-full user  text-[120%]"></i>
              </div>
              <div className="w-[70%]">
                <p>{isLogin.given_name}</p>
                <p dir="ltr" className="overflow-auto">
                  {isLogin.email}
                </p>
              </div>
              <span className="relative w-[7%] ">
                <i className="fa fa-chevron-circle-left text-[#1974ba] absolute bottom-[-0.7rem] left-[-0.6rem] font-bold text-icon text-[120%] "></i>
              </span>
            </Link>
          )}
          <div>
            <div className="Meno2 flex flex-col gap-2">
              <ul className="flex flex-col gap-3">
                <li
                  onClick={() => {
                    setMeno(false);
                    funcAxios(
                      "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products"
                    );
                  }}
                >
                  <i className="fa fa-home text-[#1974ba]"></i>
                  <span className="font-[600]">همه محصولات</span>
                </li>
                <li
                  className={`relative ${grouping ? "grouping" : ""}`}
                  onClick={() => setGrouping(!grouping)}
                >
                  <i className="fas fa-store text-[#1974ba]"></i>
                  <span className="font-[600]">دسته بندی</span>
                  <i
                    className={`fa fa-chevron-up absolute left-0 top-[7px] transition-all duration-300 ease-in-out ${
                      grouping ? "rotate-[180deg]" : ""
                    }`}
                  ></i>
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
                          setMeno(false);
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=مانتو"
                          );
                        }}
                      >
                        <p className=" tracking-tighter  p-1 pr-2">مانتو</p>
                      </li>
                      <li
                        onClick={() => {
                          setMeno(false);
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=شلوار"
                          );
                        }}
                      >
                        <p className=" tracking-tighter  p-1 pr-2">
                          شلوار{"\u2009"}و{"\u2009"}دامن
                        </p>
                      </li>
                      <li
                        onClick={() => {
                          setMeno(false);
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=ست"
                          );
                        }}
                      >
                        <p className=" tracking-tighter  p-1 pr-2">ست</p>
                      </li>
                      <li
                        onClick={() => {
                          setMeno(false);
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=خونگی"
                          );
                        }}
                      >
                        <p className=" tracking-tighter  p-1 pr-2">
                          تو{"\u2009"}خونه{"\u200A"}ای
                        </p>
                      </li>
                      <li
                        onClick={() => {
                          setMeno(false);
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=ارایشی"
                          );
                        }}
                      >
                        <p className=" tracking-tighter  p-1 pr-2">
                          ارایشی{"\u2009"}بهداشتی
                        </p>
                      </li>
                      <li
                        onClick={() => {
                          setMeno(false);
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=زمستونه"
                          );
                        }}
                      >
                        <p className=" tracking-tighter  p-1 pr-2">
                          لباس{"\u200A"}گرم
                        </p>
                      </li>
                      <li
                        onClick={() => {
                          setMeno(false);
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=کیف"
                          );
                        }}
                      >
                        <p className=" tracking-tighter  p-1 pr-2">
                          کیف{"\u2009"}و{"\u2009"}کفش
                        </p>
                      </li>
                      <li
                        onClick={() => {
                          setMeno(false);
                          funcAxios(
                            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=اکسسوری"
                          );
                        }}
                      >
                        <p className=" tracking-tighter  p-1 pr-2">اکسسوری</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  onClick={() => {
                    setMeno(false);
                  }}
                >
                  <Link to="/bazrafkan-store/FavProduct">
                    <i className="fa fa-star text-[#1974ba]"></i>
                    <span className="font-[600]">محصولات مورد علاقه</span>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setMeno(false);
                  }}
                >
                  <NavLink to="/bazrafkan-store/AskedQuestion">
                    <i className="fas fa-comments text-[#1974ba]"></i>
                    <span className="font-[600]">سوالات متداول</span>
                  </NavLink>
                </li>
                {/* <li
                                onClick={() => {
                          setMeno(false);
                        }}>
                  <a href="">
                    <i className="fa fa-bell text-[#1974ba]"></i>
                    <span className="font-[600]">اعلانات</span>
                  </a>
                </li> */}
                <li
                  onClick={() => {
                    setMeno(false);
                  }}
                >
                  <NavLink to="/bazrafkan-store/ContactUs">
                    <i className="fa fa-link text-[#1974ba]"></i>
                    <span className="font-[600]">ارتباط با ما</span>
                  </NavLink>
                </li>
              </ul>

              <hr className=" border-gray-500" />
              <ul className="flex flex-col gap-3">
                <li
                  title="Change Theme Mode"
                  onClick={() => setIsDark(!isDark)}
                >
                  <button type="submit" className="">
                    <i
                      className={`text-[#1974ba] fas ${
                        isDark ? "fa-sun" : "fa-moon"
                      }`}
                    ></i>
                    <span className="font-[600]">
                      {isDark ? "حالت روز" : "حالت شب "}
                    </span>
                  </button>
                </li>

                {isLogin ? (
                  <li
                    onClick={() => {
                      logout(navigate);
                      setMeno(false);
                    }}
                  >
                    <Link to="/bazrafkan-store/" className="font-[600]">
                      <i className="fa fa-sign-out-alt text-[#1974ba]"></i>
                      خروج از حساب کاربری
                    </Link>
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      setMeno(false);
                    }}
                  >
                    <i className="fa fa-user-plus text-[#1974ba]"></i>
                    <Link to="/bazrafkan-store/Login">ساخت حساب کاربری</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(Meno);
