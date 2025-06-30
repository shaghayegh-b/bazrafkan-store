import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
import Footer from "../../components/Footer/Footer";

import { dataProducts } from "../../components/Products/dataProducts";

import { useCart } from "../../context/CartContext";

import "./OneProduct.css";

function OneProduct() {
  const [desc, setDesc] = useState(false);
  const [sizing, setSizing] = useState(false);

  const { addToCart, increase, decrease, cartItems } = useCart();
  const { id } = useParams();
  const produkt = dataProducts.find((item) => item.id === parseInt(id));

  if (!produkt) {
    return <p>محصولی یافت نشد</p>;
  }
  const itemInCart = cartItems.find((item) => item.id === produkt.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;
  const isOutOfStock = produkt.remaining === "اتمام موجودی";

  // یا id مستقیم اگه stringه
  if (!produkt) {
    return (
      <div className="text-center text-red-500">
        محصولی با این شناسه یافت نشد
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Support />
      <div className="h-12" />

      <div className="OneProduct p-2">
        {/* تصویر محصول */}
        <div className="bg-gray-700 p-3">
          <div className="flex flex-col justify-center items-center">
            <img src={produkt.img} alt="" className="h-[25rem]" />
          </div>

          {/* انتخاب رنگ */}
          <div className="flex justify-between items-baseline px-2 pt-3">
            <p>تنوع رنگی:</p>
            <form className="flex gap-2">
              {["bg-blue-100", "bg-black", "bg-blue-900", "bg-amber-950"].map(
                (color, idx) => (
                  <input
                    key={idx}
                    type="radio"
                    name="color"
                    className={`${color} rounded-full w-[15px] h-[15px] focus:border-2 focus:border-solid focus:border-black focus:shadow-2xl`}
                  />
                )
              )}
            </form>
          </div>
        </div>

        {/* اطلاعات محصول */}
        <div className="bg-gray-700 p-3 my-2">
          <p className="font-[600] text-[110%]">{produkt.title}</p>
          <div className="flex justify-between py-3 px-1">
            <p className="text-[90%] tracking-tight">{produkt.remaining}</p>
            <p className={isOutOfStock ? "text-gray-400" : ""}>
              <span className="font-[600]">{produkt.price}</span>
              <span className="text-[95%] pr-1">تومان</span>
            </p>
          </div>

          {/* تعداد و افزودن به سبد */}
          <div
            className={`flex justify-between items-center transition-all duration-300 ease-in-out ${
              isOutOfStock ? "opacity-50 cursor-not-allowed" : ""
            } ${quantity > 0 ? "" : "justify-center"}`}
          >
            {quantity > 0 ? (
              <div className="w-[100%] flex justify-between ">
                <div className="flex justify-center items-center border border-black rounded-sm">
                  <button
                    disabled={isOutOfStock}
                    onClick={() => increase(produkt.id)}
                    className="bg-gray-600 px-4 rounded-br-sm rounded-tr-sm"
                  >
                    <i className="fa fa-plus text-[60%]"></i>
                  </button>
                  <p className="px-4">{isOutOfStock ? 0 : quantity}</p>
                  <button
                    disabled={isOutOfStock || quantity === 0}
                    onClick={() => {
                      if (quantity === 1) {
                        if (
                          window.confirm("میخوای کالارو از سبد خریدت حذف کنی؟")
                        ) {
                          decrease(produkt.id);
                        }
                      } else {
                        decrease(produkt.id);
                      }
                    }}
                    className="bg-gray-600 px-4 rounded-bl-sm rounded-tl-sm"
                  >
                    <i className="fa fa-minus text-[60%]"></i>
                  </button>
                </div>
                <button
                  onClick={() => addToCart({ ...produkt, quantity: 1 })}
                  disabled={isOutOfStock}
                  className="rounded-sm bg-blue-400 px-2 py-1"
                >
                  افزودن به سبد خرید
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart({ ...produkt, quantity: 1 })}
                disabled={isOutOfStock}
                className="rounded-sm bg-blue-400 px-2 py-1"
              >
                افزودن به سبد خرید
              </button>
            )}
          </div>

          {/* <div
            className={`flex justify-between items-center transition-all duration-300 ease-in-out ${
              isOutOfStock ? "opacity-50 cursor-not-allowed" : ""
            }
            ${add ? "" : "justify-center"}`}
          >
            <div className={`flex items-center border border-black rounded-sm ${quantity > 0 ? "" : "hidden"}`}>
  <button
    disabled={isOutOfStock}
    onClick={() => increase(produkt.id)}
    className="bg-gray-600 px-4 rounded-br-sm rounded-tr-sm"
  >
    <i className="fa fa-plus text-[60%]"></i>
  </button>
  <p className="px-4">{isOutOfStock ? 0 : quantity}</p>
  <button
    disabled={isOutOfStock || quantity === 0}
    onClick={() => {
      if (quantity === 1) {
        if (window.confirm("میخوای کالارو از سبد خریدت حذف کنی؟")) {
          decrease(produkt.id);
        }
      } else {
        decrease(produkt.id);
      }
    }}
    className="bg-gray-600 px-4 rounded-bl-sm rounded-tl-sm"
  >
    <i className="fa fa-minus text-[60%]"></i>
  </button>
</div>

            <div
              className={`flex items-center border border-black rounded-sm ${
                add ? "" : "hidden"
              }`}
            >
              <button
                disabled={isOutOfStock}
                onClick={() => setCount(count + 1)}
                className="bg-gray-600 px-4 rounded-br-sm rounded-tr-sm"
              >
                <i className="fa fa-plus text-[60%]"></i>
              </button>
              <p className="px-4">{isOutOfStock ? 0 : count}</p>
              <button
                disabled={isOutOfStock}
                onClick={handdecrea}
                className="bg-gray-600 px-4 rounded-bl-sm rounded-tl-sm"
              >
                <i className="fa fa-minus text-[60%]"></i>
              </button>
            </div>

            <button
              onClick={() => (
                addToCart({ ...produkt, quantity: count }), setAdd(true)
              )}
              disabled={isOutOfStock}
              className={`rounded-sm bg-blue-400 px-2 py-1 `}
            >
              افزودن به سبد خرید
            </button>
          </div> */}
        </div>

        {/* پیام پردازش */}
        <p className="py-1 px-2 bg-gray-800 border-t-4 border-solid border-red-900 text-[85%] text-center">
          پردازش محصولات<span className="font-[600]"> 7 الی 10 </span>روزکاری
          زمان می‌برد!
        </p>

        {/* توضیحات محصول */}
        <div className="bg-gray-700 p-1 py-2 my-2">
          <div
            className={`desc py-1 px-2 rounded-xl mb-1 transition-all duration-400 ${
              desc ? "sizing" : ""
            }`}
          >
            <div
              onClick={() => setDesc(!desc)}
              className="relative cursor-pointer"
            >
              <span className="font-[600]">توضیحات محصول</span>
              <i
                className={`fa fa-chevron-up absolute left-0 top-[7px] transition-transform ${
                  desc ? "rotate-180" : ""
                }`}
              />
            </div>

            {desc && (
              <ul>
                <li>نام : {produkt.title}</li>
                <li>کد : {produkt.code}</li>
                <li>جنس پارچه : {produkt.jens}</li>
                {produkt.dokme && <li>نحوه بسته شدن : {produkt.dokme}</li>}
                <li>سایز : {produkt.size}</li>
              </ul>
            )}
          </div>

          {/* جدول سایزبندی */}
          {(produkt.shoulder ||
            produkt.chest ||
            produkt.arm ||
            produkt.wrist ||
            produkt.stans ||
            produkt.dressLength) && (
            <div
              className={`size desc py-1 px-2 rounded-xl transition-all duration-400 ${
                sizing ? "sizing" : ""
              }`}
            >
              <div
                onClick={() => setSizing(!sizing)}
                className="relative cursor-pointer"
              >
                <span className="font-[600]">جدول سایز بندی</span>
                <i
                  className={`fa fa-chevron-up absolute left-0 top-[7px] transition-transform ${
                    sizing ? "rotate-180" : ""
                  }`}
                />
              </div>

              {sizing && (
                <ul>
                  {produkt.shoulder && (
                    <li>
                      عرض شانه : <span>{produkt.shoulder}</span>
                    </li>
                  )}
                  {produkt.chest && (
                    <li>
                      دور سینه : <span>{produkt.chest}</span>
                    </li>
                  )}
                  {produkt.arm && (
                    <li>
                      دور بازو : <span>{produkt.arm}</span>
                    </li>
                  )}
                  {produkt.wrist && (
                    <li>
                      دور مچ : <span>{produkt.wrist}</span>
                    </li>
                  )}
                  {produkt.stans && (
                    <li>
                      قد آستین : <span>{produkt.stans}</span>
                    </li>
                  )}
                  {produkt.dressLength && (
                    <li>
                      قد کار : <span>{produkt.dressLength}</span>
                    </li>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end p-2">
        <NavLink
          to="/bazrafkan-store/"
          className="text-blue-700 p-2 rounded-sm"
        >
          بازگشت به فروشگاه
          <i className="fa fa-arrow-left pr-1 text-[78%]" />
        </NavLink>
      </div>

      <Footer />
    </>
  );
}

export default memo(OneProduct);
