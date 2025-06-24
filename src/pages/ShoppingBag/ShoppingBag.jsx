import { memo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
import Footer from "../../components/Footer/Footer";
import img from "../../assets/img/daman.jpeg";
import { dataProducts } from "../../components/Products/dataProducts";
import { NavLink } from "react-router-dom";
function ShoppingBag() {
  return (
    <>
      <Navbar></Navbar>
      <Support></Support>
      <div className="h-12"></div>

      <div className="ShoppingBag ">
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="w-[85%] p-3 bg-gray-700 border-t-2 border-solid border-red-700">
            <p>
              <i className=" fa fa-times text-red-800 font-[600] p-2"></i>سبد
              خرید شما در حال حاضر خالی است.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col bg-gray-700  p-1 rounded-md m-1">
            <div className="">
              <div>
                <i className="fa fa-times"></i>
              </div>
              <div className="flex w-[100%]">
                <div className="w-[70px] h-auto bg-gray-600 rounded-md ">
                  <img
                    src={img}
                    alt="محصول"
                    className="w-[120px] h-auto rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <p className=""><span className="font-[600]">محصول</span> : {dataProducts[1].title}</p>
                  <p><span className="fon-[600]">قیمت</span> : {dataProducts[1].price} تومان</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-end p-2">
          <NavLink
            to="/bazrafkan-store/"
            className="bg-blue-400 p-2 rounded-sm"
          >
            بازگشت به فروشگاه
            <i className="fa fa-arrow-left pr-2"></i>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default memo(ShoppingBag);
