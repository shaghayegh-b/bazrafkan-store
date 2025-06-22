import img from '../../assets/img/daman.jpeg'
import { memo } from "react";
function Products({ title, remaining, score, price }) {
  return (
    <>
      <div className="">
        <a href="" className="flex bg-gray-700  p-1 rounded-md m-1">
          <div className="w-[40%]">
            <div className="w-[120px] h-auto bg-gray-600 rounded-md">
              <img
                src={img}
                alt="محصول"
                className="w-[120px] h-auto rounded-md"
              />
            </div>
          </div>
          <div className="px-2 relative w-[60%]">
            <p className=" font-bold text-[107%]">{title}</p>
            <div className="h-[1.5rem]"></div>
            <div className="flex justify-between items-center">
              <p className=" text-[80%]">{remaining}</p>
              <p className="flex justify-center items-center text-[80%]">
                {score}
                <i className="fa fa-star text-yellow-200 text-[40%]"></i>
              </p>
            </div>
            <div className=" absolute bottom-0 left-0 z-0">
              <p className="relative">
                {price} توما
                <span className="absolute top-[-10px] left-[2px] z-0">ن</span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
export default memo(Products);
