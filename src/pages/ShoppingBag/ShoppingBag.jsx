import { memo, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
import Footer from "../../components/Footer/Footer";
import {  useCart } from "../../context/CartContext";
import { dataProducts } from "../../components/Products/dataProducts";
import { NavLink } from "react-router-dom";

function ShoppingBag() {
  const { cartItems, removeFromCart, clearCart, quantity ,decrease,
    increase } =useCart()
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [result, setResult] = useState("");
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    if (quantity === 0) {
      const userConfirmed = confirm("میخوای کالارو از سبد خریدت حذف کنی؟");
      setResult(userConfirmed);
      setDeleted(true);
      setTimeout(() => {
        setDeleted(false);
      }, 3000);
    }
  }, [quantity]);

  return (
    <>
      <Navbar></Navbar>
      <Support></Support>
      <div className="h-12"></div>

      <div className="">
        <div className="ShoppingBag relative ">
          {cartItems.length === 0 ? (
            <div
              className={`flex flex-col justify-center items-center mt-2 p-1 ${
                result ? "" : "hidden"
              }`}
            >
              <div className="w-[85%] p-3 bg-gray-700 border-t-2 border-solid border-red-600">
                <p>
                  <i className=" fa fa-times text-red-500 font-[600] p-2"></i>
                  سبد خرید شما در حال حاضر خالی است.
                </p>
              </div>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`one flex flex-col bg-gray-700  p-2 rounded-md m-1 ${
                    result ? "hidden" : ""
                  }`}
                >
                  <div>
                    <i
                      onClick={() => (
                        removeFromCart(item.id),
                        setResult(true),
                        setDeleted(true),
                        setTimeout(() => {
                          setDeleted(false);
                        }, 3000)
                      )}
                      className="fa fa-times hover:text-red-700"
                    ></i>
                  </div>
                  <div className="flex ">
                    <div className="w-[120px] h-auto bg-gray-600 rounded-md ml-2">
                      <img
                        src={item.img}
                        alt="محصول"
                        className="w-[120px] h-auto rounded-md "
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="">
                        <span className="font-[600]">محصول : </span>
                        {item.title}
                      </p>
                      <p>
                        <span className="font-[600]">قیمت : </span>
                        {item.price.toLocaleString()} تومان
                      </p>
                    </div>
                  </div>

                  <div className=" flex justify-between py-3  ">
                    <div>
                      <p>
                        <span className="">
                          جمع جزء :
                          {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </p>
                    </div>
                    <div className=" flex justify-center items-center border-[1px] border-solid border-black rounded-sm">
                      <button
                          onClick={() => increase(item.id)}
                        className=" bg-gray-600 px-4 rounded-br-sm rounded-tr-sm"
                      >
                        <i className="fa fa-plus text-[60%]"></i>
                      </button>
                      <p className=" px-4">{item.quantity}</p>
                      <button
                          onClick={() =>decrease(item.id)}
                        className=" bg-gray-600 px-4 rounded-bl-sm rounded-tl-sm"
                      >
                        <i className="fa fa-minus text-[60%]"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className={`flex justify-between p-2 bg-gray-600 rounded-sm m-1 ${
                  result ? "hidden" : ""
                }`}
              >
                <p className="font-[600]">جمع کل سبد خرید : </p>
                <p className="font-[600]">
                  {total.toLocaleString()}
                  <span>تومان</span>
                </p>
              </div>
              <div>
                <button onClick={clearCart}>پاک کردن سبد خرید</button>
              </div>
              <div className={`flex justify-center ${result ? "hidden" : ""}`}>
                <button className="bg-blue-400 rounded-sm p-1 px-2 mt-2">
                  ادامه جهت تسویه حساب
                </button>
              </div>
            </div>
          )}
          <div
            className={`absolute top-1 z-1 transition-all duration-500 ease-in-out w-[100%]  ${
              deleted ? "h-auto" : "h-[0]"
            }`}
          >
            <div className=" flex  justify-center items-center">
              <div
                className={`w-[85%] p-3 bg-gray-700 border-t-2 border-solid border-green-700  ${
                  deleted ? "" : "hidden"
                }`}
              >
                <p className={` ${deleted ? "" : "hidden"}`}>
                  <i className=" fa fa-check text-green-700 font-[600] p-2"></i>
                  "{dataProducts[1].title}" حذف شد
                </p>
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
        </div>
      </div>
      <Footer />
    </>
  );
}
export default memo(ShoppingBag);
