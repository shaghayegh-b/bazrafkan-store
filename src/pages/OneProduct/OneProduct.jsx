import { memo, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import Footer from "../../components/Footer/Footer";

import { useCart } from "../../context/CartContext";

import Slider from "react-slick";
import Header from "../../components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OneProduct.css";
import { useFav } from "../../context/FavProvider";
import { useAxios } from "../../context/AxiosContaext";

function OneProduct() {
  const { isAxios, funcAxios, loading } = useAxios();
  // حالت نمایش توضیحات محصول (باز یا بسته)
  const [desc, setDesc] = useState(true);
  const [sizing, setSizing] = useState(true);
  const [fav, setFav] = useState(false);
  const { addToFav, removeFromFav, favoriteItems } = useFav();
  const { addToCart, increase, decrease, cartItems } = useCart();
  const { id } = useParams();
  const produkt = isAxios;

  // وقتی کامپوننت لود شد، داده‌ها رو از API بگیر
  useEffect(() => {
    funcAxios(
      `https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products/${id}`
    );
  }, []);

  const sliderRef = useRef(null);

  // رنگ‌ها و تصاویر مربوطه (مثلا اینجا باید از محصول بگیری)
  // فرض کردم هر رنگ یه عکس مربوط داره
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const colors = produkt.colors || [
    { name: "تک رنگ", code: "#ccc", img: produkt.img },
  ];

  const handleColorChange = (index) => {
    setSelectedColorIndex(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const itemInCart = cartItems.find((item) => item.id === produkt.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;
  const isOutOfStock = produkt.remaining === "اتمام موجودی";

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <i className="fa fa-arrow-circle-left"></i>{" "}
        {/* چون در RTL "next" به چپه */}
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <i className="fa fa-arrow-circle-right"></i>{" "}
        {/* چون در RTL "prev" به راسته */}
      </div>
    );
  };

  const settings = {
    dots: true, // دایره‌های کوچک پایین اسلایدر (برای رفتن به اسلاید خاص)
    infinite: false, // نذاره اسلایدر به ابتدای لیست برگرده (loop نداشته باشه)
    speed: 400, // سرعت تغییر اسلاید (بر حسب میلی‌ثانیه)
    slidesToShow: 1, // در هر بار نمایش، چند اسلاید دیده بشه (۱ یعنی فقط یکی)
    slidesToScroll: 1, // با هر اسکرول چند اسلاید بره جلو
    arrows: true, // دکمه‌های فلش چپ و راست نشون بده
    adaptiveHeight: true, // اگر تصاویر ارتفاع متفاوت دارن، ارتفاع اسلایدر تغییر کنه
    rtl: true,
    prevArrow: <SampleNextArrow />, // ← اینجا فلش‌ها برعکس تعریف شدن
    nextArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      setSelectedColorIndex(next);
    },
  };

  // بررسی وجود محصول در علاقه‌مندی هنگام لود کامپوننت
  useEffect(() => {
    const isFav = favoriteItems.some((item) => item.id === produkt.id);
    setFav(isFav);
  }, [favoriteItems, produkt.id]);
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(selectedColorIndex);
    }
  }, [selectedColorIndex]);
  //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const favorite = () => {
    if (fav) {
      removeFromFav(produkt.id);
    } else {
      addToFav(produkt);
    }
  };

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
      <Header>محصولات</Header>
      {loading ? (
        <div className="flex justify-center items-center h-40 ">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.2s]"></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.4s]"></div>
          </div>
        </div>
      ) : (
        <div className="OneProduct p-2">
          {/* تصویر محصول با اسلایدر */}
          <div className="bg-gray-700  p-3">
            <Slider ref={sliderRef} {...settings}>
              {colors.map((color, idx) => (
                <div key={idx} className="flex justify-center items-center">
                  <img
                    src={color.img}
                    alt={`${produkt.title} - رنگ ${color.name || "نامشخص"}`}
                    className="max-h-[40rem] w-full object-contain"
                  />
                </div>
              ))}
            </Slider>
            {/* انتخاب رنگ */}
            {colors.length > 1 && (
              <div className="flex justify-between items-baseline px-2 pt-3">
                <p>تنوع رنگی:</p>
                <form className="flex gap-2">
                  {colors.map((color, idx) => (
                    <label key={idx} className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        checked={selectedColorIndex === idx}
                        onChange={() => handleColorChange(idx)}
                        className="hidden"
                      />
                      <span
                        className={`rounded-full w-[25px] h-[25px] inline-block border-2  transition-all duration-300  ${
                          selectedColorIndex === idx
                            ? "border-black shadow-md scale-110"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color.code }}
                      />
                    </label>
                  ))}
                </form>
              </div>
            )}
          </div>

          {/* مشخصات کلی محصول */}
          <div className="bg-gray-700 p-3 my-2">
            <div className="flex justify-between items-baseline">
              <h1 className="font-[600] text-[110%]">{produkt.title}</h1>
              <i
                title={fav ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
                className={`fa fa-star ${
                  fav ? "text-yellow-300" : "text-gray-50"
                }`}
                onClick={favorite}
              ></i>
            </div>
            <div className="flex justify-between py-3 px-1">
              <p className="text-[90%] tracking-tight">{produkt.remaining}</p>
              <p className={isOutOfStock ? "text-gray-400" : ""}>
                <span className="font-[600]">{produkt.price}</span>
                <span className="text-[95%] pr-1">تومان</span>
              </p>
            </div>
            <div className="flex justify-between font-[500] px-1 py-3">
              <p className="">رنگ انتخابی:</p>{" "}
              <span className="">{colors[selectedColorIndex].name}</span>
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
                            window.confirm(
                              "میخوای کالارو از سبد خریدت حذف کنی؟"
                            )
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
                    className={`rounded-sm bg-blue-400 px-2 py-1
                  ${
                    isOutOfStock
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-400"
                  }`}
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
      )}

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
