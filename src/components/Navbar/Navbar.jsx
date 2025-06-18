import { memo, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [fSearch, setFSearch] = useState(false);
  return (
    <>
      <div className="Navbar w-[100%]">
        <div className="Navbarchild p-1 bg-gray-800 gap-0.5 text-gray-300 flex flex-row ">
          <div className="taskbar w-[95%] bg-gray-700 rounded">
            <div className="w-[100%] gap-1">
              <div className="">
                <p className="p-1"><i className="fas fa-bars"></i></p>
              </div>
              <form action="#" className="p-1 w-[73%]">
                <input
                className="w-[100%]"
                  type="text"
                  placeholder="جستجو"
                  onFocus={() => setFSearch(true)}
                />
                <button type="button" className={`${fSearch ? "" : "hidden"}`}>
                  =
                </button>
              </form>
              <div className="loc p-1">مکان</div>
            </div>
          </div>
          <div className="message p-1">پیام</div>
        </div>
      </div>
    </>
  );
}
export default memo(Navbar);
