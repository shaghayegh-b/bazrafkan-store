import { memo, useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartContext";
import {  Link } from "react-router-dom";
import Header from '../../components/Header/Header'
function ShoppingBag() {
  const { cartItems, removeFromCart, clearCart, decrease, increase } =
    useCart();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [deletedMessage, setDeletedMessage] = useState(false);
    //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
<Header>سبد خرید</Header>
      <div className="relative">
        <div className="ShoppingBag  ">
          <div
            className={`fixed top-14 left-1/2 -translate-x-1/2 z-10 w-[85%] p-3 bg-gray-700 border-t-2 border-solid border-green-700 text-sm rounded-sm shadow-md transition-all duration-300 ${
              deletedMessage ? "" : "hidden"
            }`}
          >
            <i className="fa fa-check p-2"></i>
            {deletedMessage}
          </div>

          {cartItems.length === 0 ? (
            <div
              className={`flex flex-col justify-center items-center mt-1 mb-3 p-1 `}
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
                <Link
                to={`/bazrafkan-store/OneProduct/${item.id}`}
                  key={item.id}
                  className={`one flex flex-col bg-gray-700  p-2 rounded-md m-1 `}
                >
                  <div>
                    <i
                      onClick={() => {
                        let confirmm = confirm(
                          "میخوای کالا رو از سبد خریدت حذف کنی؟"
                        );
                        if (confirmm) {
                          removeFromCart(item.id);
                          setDeletedMessage(
                            `"${item.title}" با رنگ "${item.selectedColor?.name}" از سبد خرید حذف شد`
                          );
                          setTimeout(() => {
                            setDeletedMessage(false);
                          }, 3000);
                        }
                      }}
                      className="fa fa-times hover:text-red-700 cursor-pointer"
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
                      <p className="">
                        <span className="font-[600]">رنگ انتخابی : </span>
                        {item.selectedColor?.name}
                      </p>
                      <p>
                        <span className="font-[600]">قیمت : </span>
                        {item.price} تومان
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
                        onClick={() => increase(item.id, item.selectedColor?.code)}
                        className=" bg-gray-600 px-4 rounded-br-sm rounded-tr-sm"
                      >
                        <i className="fa fa-plus text-[60%]"></i>
                      </button>
                      <p className=" px-4">{item.quantity}</p>
                      <button
                        onClick={() => {
                            if (item.quantity === 1) {
                                let confirmq = confirm(
                                  "میخوای کالا رو از سبد خریدت حذف کنی؟"
                                );
                                if (confirmq) {
                                  removeFromCart(item.id, item.selectedColor?.code);
                                  setDeletedMessage(
                                    `"${item.title}" از سبد خرید حذف شد`
                                  );
                                  setTimeout(() => {
                                    setDeletedMessage(false);
                                  }, 3000);
                                }
                              } else {
                                decrease(item.id, item.selectedColor?.code);
                              }
                        }}
                        className=" bg-gray-600 px-4 rounded-bl-sm rounded-tl-sm"
                      >
                        <i className="fa fa-minus text-[60%]"></i>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}

              <div
                className={`flex justify-between p-2 bg-gray-600 rounded-sm m-1`}
              >
                <p className="font-[600]">جمع کل سبد خرید : </p>
                <p className="font-[600]">
                  {total.toLocaleString()}
                  <span>تومان</span>
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() =>{
                    let confirmp = confirm(
                        "میخوای سبد خرید رو حذف کنی؟"
                      );
                      if (confirmp) {
                        clearCart()
                        setDeletedMessage(
                          `سبد خرید خالی شد`
                        );
                        setTimeout(() => {
                          setDeletedMessage(false);
                        }, 3000);
                      }

                  }}
                  className="bg-red-900 text-white rounded-sm p-1 px-2 mt-2"
                >
                  پاک کردن سبد خرید
                </button>
              </div>
              <div className={`flex justify-center`}>
                <button  type="button" className="bg-blue-400 rounded-sm p-1 px-2 mt-2">
                  ادامه جهت تسویه حساب
                </button>
              </div>
              <div className=" flex justify-end p-2">
                <Link
                  to="/bazrafkan-store/"
                  className="text-blue-700 p-2 rounded-sm"
                >
                  بازگشت به فروشگاه
                  <i className="fa fa-arrow-left pr-1 text-[78%]"></i>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default memo(ShoppingBag);
