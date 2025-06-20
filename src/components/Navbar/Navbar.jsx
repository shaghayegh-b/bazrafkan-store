import { createContext, memo, useState } from "react";
import "./Navbar.css";
import Meno from "../Meno/Meno";
export const mymeno = createContext();
function Navbar() {
  const [fSearch, setFSearch] = useState(false);
  const [meno, setMeno] = useState(false);
  return (
    <>
      {/* نوبار */}
      <div className={`Navbar w-[100%] fixed top-0 z-1 h-9`}>
        <div className="Navbarchild p-1.5 bg-gray-800 gap-0.5 text-gray-300 flex flex-row ">
          <div className={` ${fSearch ? "hidden" : "flex"} gap-1`}>
            <div className="taskbar w-[95%] bg-gray-700 rounded">
              <div className="w-[100%] gap-1 flex">
                <button
                  onClick={() => setMeno(true)}
                  className="p-1 flex justify-center items-center"
                >
                  <i className="fas fa-bars px-1"></i>
                </button>
                <form
                  action="#"
                  className="p-1 flex w-19 "
                  onFocus={() => setFSearch(true)}
                >
                  <label
                    htmlFor="search"
                    className="mx-1 flex justify-center items-center"
                  >
                    <i className="fa fa-search"></i>
                  </label>
                  <input
                    name="search"
                    className="w-[100%]"
                    type="text"
                    placeholder="جستجو"
                  />
                </form>
                <div className="w-32 py-1">
                  <h1 className="text-white text-center text-[120%] bg-indigo-900">
                    شقایق
                  </h1>
                </div>
                <a className=" p-1 px-2 flex">
                  <i className="fa fa-shopping-cart self-center px-1 relative">
                    <span className=" absolute bottom-0 right-[-7px] py-[3px] px-[4px] rounded-full text-[45%] bg-blue-800 ">0</span>
                  </i>
                </a>
              </div>
            </div>
            <div className="message p-1 flex  items-center">
              <i className="fa fa-user"></i>
            </div>
          </div>
          {/* اگه روی فرم سرچ کلیک شد تمام نوبار به فرم سرچ تبدیل میشه */}
          <div
            className={`w-[100%] rounded-sm bg-gray-700 border-2 border-gray-500 ${
              fSearch ? "" : "hidden"
            }`}
          >
            <form
              action="#"
              className="p-1 flex  justify-between w-[100%]"
              dir="ltr"
            >
              <input
                dir="rtl"
                className="pl-2 w-[87%] placeholder:text-gray-300"
                type="text"
                placeholder="جستجو"
                onFocus={() => setFSearch(true)}
              />
              <button
                type="button"
                className="w-6.5 h-6 flex justify-center items-center"
              >
                <i className="fa fa-search"></i>
              </button>
              <button
                onClick={() => setFSearch(false)}
                type="button"
                className="w-6.5 h-6  flex justify-center items-center"
              >
                <i className="fa fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* منو باز بشه اگر روی ایکون منو کلیک بشه */}
      <div
        className={`fixed z-2 top-0 h-[100vh] bg-[#0000005c]  ${
          meno ? "w-[100vw]" : "w-[0]"
        }`}
      >
        <mymeno.Provider value={meno}>
          <Meno></Meno>
        </mymeno.Provider>
        <div
          className={`h-[100vh] fixed top-0 left-0 z-2  flex items-start justify-end
            `}
          onClick={() => setMeno(false)}
        >
          <button
            className={`rounded-full w-6 h-6 m-1 shadow flex justify-center items-center
                        ${meno ? "" : "hidden"}`}
          >
            <i className="fa fa-times text-center"></i>
          </button>
        </div>
      </div>
    </>
  );
}
export default memo(Navbar);
