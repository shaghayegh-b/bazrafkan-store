import { createContext, memo, useState } from "react";
import Meno from "../Meno/Meno";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
export const mymeno = createContext();
function Navbar() {
  const [fSearch, setFSearch] = useState(false);
  const [meno, setMeno] = useState(false);
  const [account, setAccount] = useState(false);
  const { cartItems } = useCart();
  const totalQuantity = cartItems?.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  return (
    <>
      {/* نوبار */}
      <div className={`Navbar w-[100%] fixed top-0 z-20 h-9`}>
        <div className="Navbarchild   flex items-center justify-between w-full p-2">
          <div
            className={` justify-between w-[100%] gap-1 ${
              fSearch ? "hidden" : "flex"
            } `}
          >
            <button
              onClick={() => setMeno(true)}
              className=" flex justify-center p-1 rounded-sm items-center"
            >
              <i className="font-bold fas fa-bars"></i>
            </button>
            <div className="taskbar min-w-[80%] rounded-sm">
              <div className="w-[100%] gap-1 flex justify-evenly">
                <button
                  onFocus={() => setFSearch(true)}
                  className="p-1 flex justify-center items-center"
                >
                  <i className="fa fa-search px-1"></i>
                </button>

                <div className="w-40 py-1">
                  <h1 className=" text-center font-bold text-[120%]">
                    بوتیک شقایق
                  </h1>
                </div>
                <NavLink
                  to="/bazrafkan-store/ShoppingBag"
                  className=" p-1 px-2 flex "
                >
                  <i className="fa fa-shopping-cart self-center px-1 relative">
                    <span className="absolute bottom-0 right-[-7px] py-[3px] px-[4px] rounded-full text-[45%] bg-blue-400 text-white shadow-sm">
                      {totalQuantity}
                    </span>
                  </i>
                </NavLink>
              </div>
            </div>
            <NavLink
              to={`${account ? "/bazrafkan-store/Login" : "/bazrafkan-store/"}`}
              className={`flex justify-center user rounded-full items-center`}
              onClick={() => setAccount(!account)}
            >
              <i className="fa fa-user "></i>
            </NavLink>
          </div>
          {/* اگه روی فرم سرچ کلیک شد تمام نوبار به فرم سرچ تبدیل میشه */}
          <div
            className={`w-[100%] rounded-sm border-2 text-[#0b3a63] border-[#0b3a63] ${
              fSearch ? "" : "hidden"
            }`}
          >
            <form
              action="#"
              className="p-1 flex  justify-between w-[100%]   "
              dir="ltr"
            >
              <input
                dir="rtl"
                className="pl-2 w-[87%] placeholder:text-[#0b3a63]"
                type="text"
                placeholder="جستجو"
                onFocus={() => setFSearch(true)}
              />
              <button
                type="button"
                className="w-6.5 h-6 flex justify-center items-center"
              >
                <i className="fa fa-search "></i>
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
        className={`fixed z-20 top-0 h-[100vh] bg-[#000000a6]  ${
          meno ? "w-[100vw]" : "w-[0]"
        }`}
      >
        <mymeno.Provider value={{ meno, setMeno }}>
          <Meno></Meno>
        </mymeno.Provider>
        <div
          className={`h-[100vh] fixed top-0 left-0 z-20 w-[15vw] flex items-start justify-end
            ${meno ? "" : "hidden"}
            `}
          onClick={() => setMeno(false)}
        >
          <i
            className={`fa fa-times text-[140%] text-center rounded-full w-6 h-6 m-1 shadow flex justify-center items-center bg-[#9fa8ba]
                        ${meno ? "" : "hidden"}`}
          >
          </i>
        </div>
      </div>
    </>
  );
}
export default memo(Navbar);
