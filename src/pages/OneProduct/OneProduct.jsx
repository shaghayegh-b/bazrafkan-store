import { memo, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
import { dataProducts } from "../../components/Products/dataProducts";
import "./OneProduct.css";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
function OneProduct() {
  const [count, setCount] = useState(1);
  const [desc, setDesc] = useState(false);
  const [sizing, setSizing] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Support></Support>
      <div className="h-12"></div>
      <div className="OneProduct p-2">
        <div className="bg-gray-700 p-3">
          <div className=" flex flex-col justify-center items-center">
            <img src={dataProducts[0].img} alt="" className="h-[25rem]" />
          </div>
          <div className="flex justify-between items-baseline px-2 pt-3">
            <p>تنوع رنگی:</p>
            <form className="flex gap-2">
              <input
                type="radio"
                name="color"
                className="bg-blue-100 rounded-full  w-[15px] h-[15px] focus:border-2 focus:border-solid focus:border-black focus:shadow-2xl"
              />
              <input
                type="radio"
                name="color"
                className="bg-black rounded-full  w-[15px] h-[15px] focus:border-2 focus:border-solid focus:border-black focus:shadow-2xl"
              ></input>
              <input
                type="radio"
                name="color"
                className="bg-blue-900 rounded-full  w-[15px] h-[15px] focus:border-2 focus:border-solid focus:border-black focus:shadow-2xl fo"
              ></input>
              <input
                type="radio"
                name="color"
                className="bg-amber-950 rounded-full  w-[15px] h-[15px] focus:border-2 focus:border-solid focus:border-black focus:shadow-2xl"
              ></input>
            </form>
          </div>
        </div>
        <div className="bg-gray-700 p-3 my-2 ">
          <div className="">
            <p className="font-[600] text-[110%]">{dataProducts[0].title}</p>
            <div className="flex justify-between py-3 px-1">
              <p className="text-[90%] tracking-tight">
                {dataProducts[0].remaining}
              </p>
              <p
                className={`${
                  dataProducts[0].remaining == "اتمام موجودی"
                    ? "text-gray-400"
                    : ""
                }`}
              >
                <span className="font-[600]">{dataProducts[0].price}</span>
                <span className="text-[95%] pr-1">تومان</span>
              </p>
            </div>
            <div
              className={`flex justify-between items-center ${
                dataProducts[0].remaining == "اتمام موجودی"
                  ? "disabled:opacity-50 cursor-not-allowed "
                  : ""
              }`}
            >
              <div className="h-[fit-content]  flex justify-center items-center border-[1px] border-solid border-black rounded-sm ">
                <button
                  disabled={dataProducts[0].remaining == "اتمام موجودی"}
                  onClick={() => setCount(count + 1)}
                  className={` bg-gray-600 px-4 rounded-br-sm rounded-tr-sm ${
                    dataProducts[0].remaining == "اتمام موجودی"
                      ? "disabled:opacity-50 cursor-not-allowed "
                      : ""
                  }`}
                >
                  <i className="fa fa-plus text-[60%]"></i>
                </button>
                <p className=" px-4">
                  {dataProducts[0].remaining == "اتمام موجودی" ? 0 : count}
                </p>
                <button
                  disabled={dataProducts[0].remaining == "اتمام موجودی"}
                  onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 1))}
                  className={` bg-gray-600 px-4 rounded-br-sm rounded-tr-sm ${
                    dataProducts[0].remaining == "اتمام موجودی"
                      ? "disabled:opacity-50 cursor-not-allowed "
                      : ""
                  }`}
                >
                  <i className="fa fa-minus text-[60%]"></i>
                </button>
              </div>
              <div>
                <button
                  disabled={dataProducts[0].remaining == "اتمام موجودی"}
                  className={`rounded-sm bg-blue-400 px-2 py-1 ${
                    dataProducts[0].remaining == "اتمام موجودی"
                      ? "disabled:opacity-50 cursor-not-allowed "
                      : ""
                  }`}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="py-1 px-2 bg-gray-800 border-t-4 border-solid border-red-900 text-[85%] text-center">
          پردازش محصولات<span className="font-[600]"> 7 الی 10 </span>روزکاری
          زمان می برد!
        </p>
        <div className="bg-gray-700 p-1 py-2 my-2 ">
          <div
            className={`desc py-1 px-2 rounded-xl mb-1 transition-all duration-400 ease-in-out ${
              desc ? "sizing" : ""
            }`}
          >
            <div href="" onClick={() => setDesc(!desc)} className=" relative">
              <span className="font-[600]">توضیحات محصول</span>
              <i
                className={` fa fa-chevron-up  absolute left-0 top-[7px] transition-all duration-300 ease-in-out ${
                  desc ? "rotate-[180deg]" : ""
                }`}
              ></i>
            </div>
            <div
              className={`transition-all duration-1000 ease-in-out ${
                desc ? "" : "hidden"
              }`}
            >
              <ul
                className={`transition-all duration-1000 ease-in-out ${
                  desc ? "" : "h-0"
                }`}
              >
                <li>نام : {dataProducts[0].title}</li>
                <li>کد : {dataProducts[0].code}</li>
                <li>جنس پارچه : {dataProducts[0].jens}</li>
                <li className={` ${dataProducts[0].dokme ? "" : "hidden"}`}>
                  نحوه بسته شدن : {dataProducts[0].dokme}
                </li>
                <li>سایز : {dataProducts[0].size}</li>
              </ul>
            </div>
          </div>
          <div
            className={`size ${
              dataProducts[0].shoulder ||
              dataProducts[0].chest ||
              dataProducts[0].arm ||
              dataProducts[0].wrist ||
              dataProducts[0].stans ||
              dataProducts[0].dressLength
                ? ""
                : "hidden"
            } desc py-1 px-2 rounded-xl transition-all duration-400 ease-in-out ${
              sizing ? "sizing" : ""
            }`}
          >
            <div
              href=""
              onClick={() => setSizing(!sizing)}
              className="relative"
            >
              <span className="font-[600]">جدول سایز بندی</span>
              <i
                className={` fa fa-chevron-up  absolute left-0 top-[7px] transition-all duration-300 ease-in-out ${
                  sizing ? "rotate-[180deg]" : ""
                }`}
              ></i>
            </div>
            <div
              className={`transition-all duration-1000 ease-in-out ${
                sizing ? "" : "hidden"
              }`}
            >
              <ul
                className={`transition-all duration-1000 ease-in-out ${
                  sizing ? "" : "h-0"
                }`}
              >
                <li className={` ${dataProducts[0].shoulder ? "" : "hidden"}`}>
                  عرض شانه : <span>{dataProducts[0].shoulder}</span>
                </li>
                <li className={` ${dataProducts[0].chest ? "" : "hidden"}`}>
                  دور سینه : <span>{dataProducts[0].chest}</span>
                </li>
                <li className={` ${dataProducts[0].arm ? "" : "hidden"}`}>
                  دور بازو : <span>{dataProducts[0].arm}</span>
                </li>
                <li className={` ${dataProducts[0].wrist ? "" : "hidden"}`}>
                  دور مچ : <span>{dataProducts[0].wrist}</span>
                </li>
                <li className={` ${dataProducts[0].stans ? "" : "hidden"}`}>
                  قد استین : <span>{dataProducts[0].stans}</span>
                </li>
                <li
                  className={` ${dataProducts[0].dressLength ? "" : "hidden"}`}
                >
                  قد کار : <span>{dataProducts[0].dressLength}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-end p-2">
        <NavLink
          to="/bazrafkan-store/"
          className="text-blue-700 p-2 rounded-sm"
        >
          بازگشت به فروشگاه
          <i className="fa fa-arrow-left pr-1 text-[78%]"></i>
        </NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}
export default memo(OneProduct);
