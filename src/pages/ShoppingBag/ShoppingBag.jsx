import { memo, useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Back from "../../components/Back/Back";
function ShoppingBag() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    decrease,
    increase,
    addToCart,
  } = useCart();

  const [colorPickerVisible, setColorPickerVisible] = useState({});
  const toggleColorPicker = (id) => {
    setColorPickerVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleColorSelect = (produkt, colorToSend) => {
    // حذف فقط آیتم بی‌رنگ
    const itemWithoutColor = cartItems.find(
      (item) => item.id === produkt.id && !item.selectedColor
    );

    if (itemWithoutColor) {
      removeFromCart(produkt.id); // این الان فقط آیتم‌های بی‌رنگ رو حذف می‌کنه
    }

    // آیا آیتم با رنگ موردنظر قبلاً هست؟
    const itemExists = cartItems.some(
      (item) =>
        item.id === produkt.id && item.selectedColor?.code === colorToSend?.code
    );

    if (itemExists) {
      increase(produkt.id, colorToSend?.code);
    } else {
      addToCart({
        ...produkt,
        quantity: 1,
        selectedColor: colorToSend,
      });
    }

    setColorPickerVisible((prev) => ({
      ...prev,
      [produkt.id]: false,
    }));
  };

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
            className={`fixed bg-[white] top-14 left-1/2 -translate-x-1/2 z-10 w-[85%] p-3    border-t-2 border-solid border-[#0ba5ffed] text-sm rounded-sm shadow-md transition-all duration-300 ${
              deletedMessage ? "" : "hidden"
            }`}
          >
            <i className="fa fa-check text-[#0ba5ffed] p-2"></i>
            {deletedMessage}
          </div>

          {cartItems.length === 0 ? (
            <div
              className={`flex flex-col justify-center items-center mt-1 mb-3 p-1 `}
            >
              <div className="w-[85%] p-3  bg-[#00c8ec0f]  border-t-2 border-solid border-[#00c7eced]">
                <p>
                  <i className=" fa fa-times text-[#00c7eced] font-[600] p-2"></i>
                  سبد خرید شما در حال حاضر خالی است.
                </p>
              </div>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="oneprodukt  bg-[#a8d2ff33] ">
                  <div
                    className={` relative one flex flex-col     p-2 rounded-md m-1 `}
                  >
                    <div>
                      <i
                        onClick={() => {
                          let confirmm = confirm(
                            "میخوای کالا رو از سبد خریدت حذف کنی؟"
                          );
                          if (confirmm) {
                            removeFromCart(item.id, item.selectedColor?.code);
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
                      <div className="w-[120px] h-auto    rounded-md ml-2">
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
                        <p className="flex">
                          <span className="font-[600]">رنگ انتخابی : </span>
                          &nbsp;
                          {item.selectedColor?.name ? (
                            item.selectedColor.name
                          ) : (
                            <>
                              <button
                                type="button"
                                onClick={() => toggleColorPicker(item.id)}
                                className="bg-[#6faff9] rounded-sm px-1 mx-1"
                              >
                                رنگ را انتخاب کنید
                              </button>
                              {colorPickerVisible[item.id] && (
                                <div className="flex items-center gap-1">
                                  {item.colors.map((color) => (
                                    <button
                                      key={color.code}
                                      className={` w-4 h-4 rounded-full border-solid border-1 border-black`}
                                      style={{
                                        backgroundColor: color.code,
                                      }}
                                      title={color.name}
                                      onClick={() =>
                                        handleColorSelect(item, color)
                                      }
                                    />
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </p>

                        <p>
                          <span className="font-[600]">قیمت : </span>
                          {item.price} تومان
                        </p>
                        <Link
                          to={`/bazrafkan-store/OneProduct/${item.id}`}
                          className="text-[80%]"
                        >
                          برای دیدن مشخصات محصول کلیک کن!
                        </Link>
                      </div>
                    </div>

                    <div className=" flex justify-between py-3  ">
                      <div>
                        <p>
                          <span className="font-[600]">جمع جزء :</span>&nbsp;
                          {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                      <div className=" flex justify-center items-center border-[1px] border-solid border-black rounded-sm">
                        <button
                          onClick={() =>
                            increase(item.id, item.selectedColor?.code)
                          }
                          className="  bg-[#92999d2b]    px-4 rounded-br-sm rounded-tr-sm"
                        >
                          <i className="fa fa-plus text-[80%]"></i>
                        </button>
                        <p className=" px-4">{item.quantity}</p>
                        <button
                          onClick={() => {
                            if (item.quantity === 1) {
                              let confirmq = confirm(
                                "میخوای کالا رو از سبد خریدت حذف کنی؟"
                              );
                              if (confirmq) {
                                removeFromCart(
                                  item.id,
                                  item.selectedColor?.code
                                );
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
                          className=" bg-[#92999d2b]     px-4 rounded-bl-sm rounded-tl-sm"
                        >
                          <i className="fa fa-minus text-[80%]"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className={`flex justify-between p-2    rounded-sm m-1`}>
                <p className="font-[600]">جمع کل سبد خرید : </p>
                <p className="font-[600]">
                  {total.toLocaleString()}
                  <span>تومان</span>
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    let confirmp = confirm("میخوای سبد خرید رو حذف کنی؟");
                    if (confirmp) {
                      clearCart();
                      setDeletedMessage(`سبد خرید خالی شد`);
                      setTimeout(() => {
                        setDeletedMessage(false);
                      }, 3000);
                    }
                  }}
                  className="bg-red-800 text-white rounded-sm p-1 px-2 mt-2"
                >
                  پاک کردن سبد خرید
                </button>
              </div>
              <div className={`flex justify-center`}>
                <button
                  type="button"
                  className="bg-[#6faff9] rounded-sm p-1 px-2 mt-2"
                >
                  ادامه جهت تسویه حساب
                </button>
              </div>

              <Back />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default memo(ShoppingBag);
