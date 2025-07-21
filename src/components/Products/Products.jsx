import { NavLink } from "react-router-dom";
import { memo } from "react";

function Products({ id, title, remaining, score, price, colors }) {
  return (
    <>
      <div></div>
      <NavLink to={`/bazrafkan-store/OneProduct/${id}`} className="Products">
        <div className="flex bg-[#e4f0fd7a]    p-1 rounded-md m-1">
          <div className="w-[40%]">
            <div className="w-[120px] h-auto    rounded-md">
              <img
                src={colors[0].img}
                alt="محصول"
                className="w-[120px] h-auto rounded-md"
              />
            </div>
          </div>
          <div className="px-2 relative w-[60%]">
            <p className=" font-bold text-[107%] w-[fit-content]">{title}</p>
            <div className="h-[2.5rem]"></div>
            <div className="flex justify-between items-center">
              <p className=" text-[80%]">{remaining}</p>
              <p className="flex justify-center items-center text-[80%]">
                {score}
                <i className="fa fa-star text-yellow-200 text-[40%]"></i>
              </p>
            </div>
            <div className=" absolute bottom-0 left-0 z-0">
              {remaining == "اتمام موجودی" ? (
                <p className="relative font-[600] opacity-70">اتمام موجودی</p>
              ) : (
                <p className="relative font-[600]">
                  {price} توما
                  <span className="absolute top-[-47%] left-[5%] z-0">ن</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}
export default memo(Products);
