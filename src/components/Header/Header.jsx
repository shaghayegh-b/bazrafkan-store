import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Support from "../Support/Support";
import { memo } from "react";

function Header(prop) {
  return (
    <div className="Header">
      <Navbar></Navbar>
      <Support></Support>
      <div className="h-12"></div>
      <div className="p-1">
        <p className="text-[86%]">
          <Link to="/bazrafkan-store/" className="">
            <i className="fa fa-arrow-right p-2 pr-3"></i>برگشت به صفحه اصلی
          </Link>
          / {prop.children}
        </p>
      </div>
    </div>
  );
}
export default memo(Header);
