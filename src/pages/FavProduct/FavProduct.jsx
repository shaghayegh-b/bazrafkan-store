import React, { memo, useEffect, useState } from "react";
import { useFav } from "../../context/FavProvider";
import { useCart } from "../../context/CartContext";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Back from "../../components/Back/Back";

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
      <div className=" min-h-screen flex flex-col">
      <div className="FavProduct relative flex-1">
        <div
          className={`fixed bg-white border-[#0ba5ffed] top-14 left-1/2 -translate-x-1/2 z-20 w-[85%] p-3    border-t-2 border-solid text-sm rounded-sm shadow-md transition-all duration-300 ${
            deletedMessage ? "" : "hidden"
          }`}
        >
          <i className="fa fa-check text-[#0ba5ffed] p-2"></i>
          {deletedMessage}
        </div>
        {favoriteItems.length === 0 ? (
            <>
          <div
            className={`flex flex-col justify-center items-center mt-2 p-1 pb-4`}
          >
            <p className="w-[85%] p-3   bg-[#00c8ec0f]  border-t-2 border-solid border-[#00c7eced]">
              <i className=" fa fa-times text-[#00c7eced] font-[600] p-2"></i>
              هیچ کالایی در لیست علاقه‌مندی نیست!
            </p>
          </div>
          <Back></Back>
          </>
        ) : (
          <div className="p-1 ">
            {favoriteItems.map((item) => (
              <div className="px-1 mb-2  bg-[#a8d2ff33]   ">
                <i
                  onClick={() => {
                    let confirmm = confirm(
                      "میخوای کالا رو از علاقه مندی ها حذف کنی؟"
                    );
                    if (confirmm) {
                      removeFromFav(item.id);
                      setDeletedMessage(
                        `"${item.title}" از علاقه مندی ها حذف شد`
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
                  className="Products flex px-1 pb-1 rounded-md"
                >
                  <div className="w-[40%]">
                    <div className="w-[120px] h-auto    rounded-md">
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
                  </div>
                </Link>

                {item.remaining == "اتمام موجودی" ? (
                  <div className="flex justify-between items-center p-2">
                    <button
                      type="button"
                      className="rounded-sm bg-[#76bcf8c4] px-2 py-1"
                    >
                      موجود شد خبرم کن
                    </button>
                    <p className="relative font-[600] opacity-70">
                      اتمام موجودی
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-between items-center p-2">
                    <Link
                      className="rounded-sm bg-[#76bcf8c4] px-2 py-1"
                      to={`/bazrafkan-store/OneProduct/${item.id}`}
                    >
                      افزودن به سبد خرید
                    </Link>
                    <p className="relative font-[600]">
                      {item.price} توما
                      <span className="absolute top-[-12px] left-[4px] z-0">
                        ن
                      </span>
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* دکمه های افزودن و حذف */}
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
                className="bg-[#00abcbed] text-white rounded-sm p-1 px-2 mt-2"
              >
                پاک کردن همه علاقه مندی&zwnj;ها
              </button>
              <button
                onClick={() => {
                  favoriteItems.forEach((item) => {
                    if (item.remaining !== "اتمام موجودی") {
                      const product = {
                        ...item,
                        quantity: item.totalFavorites || 1, // مقدار پیش‌فرض 1 اگر totalFavorites نبود
                      };
                      addToCart(product);
                      removeFromFav(product);
                    }
                  });

                  const confirmp = confirm(
                    "میخوای همه علاقه مندی ها رو به سبد خرید اضافه کنی؟"
                  );
                  if (confirmp) {
                    setDeletedMessage(`علاقه مندی ها به سبد خرید اضافه شد`);
                  }

                  setTimeout(() => {
                    setDeletedMessage(false);
                  }, 3000);
                }}
                className="rounded-sm bg-[#76bcf8c4] px-2 py-1"
              >
                افزودن علاقه مندی ها به سبد خرید
              </button>
            </div>

            <Back></Back>
          </div>
        )}
      </div>

      <Footer></Footer>
      </div>
    </>
  );
}

export default memo(FavProduct);
