import React, { memo, useEffect, useState } from "react";
import { useFav } from "../../context/FavProvider";
import { useCart } from "../../context/CartContext";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function FavProduct() {
  const { favoriteItems, removeFromFav, clearFav } = useFav();
  const { addToCart } = useCart();
  //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [deletedMessage, setDeletedMessage] = useState(false);

  return (
    <>
      <Header>علاقه مندی ها</Header>
      <div className="FavProduct relative">
        <div
          className={`fixed top-14 left-1/2 -translate-x-1/2 z-10 w-[85%] p-3 bg-gray-700 border-t-2 border-solid border-green-700 text-sm rounded-sm shadow-md transition-all duration-300 ${
            deletedMessage ? "" : "hidden"
          }`}
        >
          <i className="fa fa-check p-2"></i>
          {deletedMessage}
        </div>
        {favoriteItems.length === 0 ? (
          <div
            className={`flex flex-col justify-center items-center mt-2 p-1 pb-4`}
          >
            <div className="w-[85%] p-3 bg-gray-700 border-t-2 border-solid border-red-600">
              <p>
                <i className=" fa fa-times text-red-500 font-[600] p-2"></i>
                هیچ کالایی در لیست علاقه‌مندی نیست!
              </p>
            </div>
          </div>
        ) : (
          <div className="p-1">
            {favoriteItems.map((item) => (
              <div className="px-1 pt-1 bg-gray-700 ">
                <i
                  onClick={() => {
                    let confirmm = confirm(
                      "میخوای کالا رو از علاقه مندی ها حذف کنی؟"
                    );
                    if (confirmm) {
                      removeFromFav(item.id);
                      setDeletedMessage(
                        `"${item.title}" با رنگ "${item.selectedColor?.name}" از علاقه مندی ها حذف شد`
                      );
                      setTimeout(() => {
                        setDeletedMessage(false);
                      }, 3000);
                    }
                  }}
                  className="fa fa-times px-2 hover:text-red-500 rounded"
                ></i>
                <Link
                  to={`/bazrafkan-store/OneProduct/${item.id}`}
                  className="Products"
                >
                  <div className="flex px-1 pb-1 rounded-md m-1">
                    <div className="w-[40%]">
                      <div className="w-[120px] h-auto bg-gray-600 rounded-md">
                        <img
                          src={item.img}
                          alt="محصول"
                          className="w-[120px] h-auto rounded-md"
                        />
                      </div>
                    </div>
                    <div className="px-2 relative w-[60%]">
                      <p className=" font-bold text-[107%] w-[fit-content]">
                        {item.title}
                      </p>
                      <div className="h-[2.5rem]"></div>
                      <div className="flex justify-between items-center">
                        <p className=" text-[80%]">{item.remaining}</p>
                        <p className="flex justify-center items-center text-[80%]">
                          {item.score}
                          <i className="fa fa-star text-yellow-200 text-[40%]"></i>
                        </p>
                      </div>
                      <div className=" absolute bottom-0 left-0 z-0">
                        {item.remaining == "اتمام موجودی" ? (
                          <p className="relative font-[600] opacity-70">
                            اتمام موجودی
                          </p>
                        ) : (
                          <p className="relative font-[600]">
                            {item.price} توما
                            <span className="absolute top-[-12px] left-[4px] z-0">
                              ن
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            <div className="mt-4 flex flex-col  justify-center gap-2 items-center">
              <button
                onClick={() => {
                  let confirmp = confirm(
                    "میخوای همه علاقه مندی ها رو حذف کنی؟"
                  );
                  if (confirmp) {
                    clearFav();
                    setDeletedMessage(`علاقه مندی ها خالی شد`);
                  }
                  setTimeout(() => {
                    setDeletedMessage(false);
                  }, 3000);
                }}
                className="bg-red-900 text-white rounded-sm p-1 px-2 mt-2"
              >
                پاک کردن همه علاقه مندی&zwnj;ها
              </button>
              <button
  onClick={() => {
    favoriteItems.forEach((item) => {
      const product = {
        ...item,
        quantity: item.totalFavorites, // استفاده از مقدار موجود در علاقه‌مندی
      };
      addToCart(product);
    });

    const confirmp = confirm("میخوای همه علاقه مندی ها رو حذف کنی؟");
    if (confirmp) {
      clearFav();
      setDeletedMessage(`علاقه مندی ها به سبد خرید اضافه شد`);
    }

    setTimeout(() => {
      setDeletedMessage(false);
    }, 3000);
  }}
  className="rounded-sm bg-blue-400 px-2 py-1"
>
  افزودن علاقه مندی ها به سبد خرید
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

      <Footer></Footer>
    </>
  );
}

export default memo(FavProduct);
