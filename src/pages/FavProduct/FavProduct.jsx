import React, { memo } from "react";
import { useFav } from "../../context/FavProvider";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function FavProduct() {
  const { favoriteItems, removeFromFav, clearFav } = useFav();

  // if () {
  //   return (
  //     <div className="p-4">
  //       <h2 className="text-xl font-bold mb-4">علاقه‌مندی‌ها</h2>
  //       <p>هیچ کالایی در لیست علاقه‌مندی نیست.</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <Support />
      <div className="h-12" />
      <p className="text-[85%]">
      <Link to="/bazrafkan-store/">
        <i className="fa fa-arrow-right p-1 pb-4"></i>برگشت به صفحه اصلی
      </Link> / علاقه مندی ها
      </p>
      <div className="">
        {favoriteItems.length === 0 ? (
          <div
            className={`flex flex-col justify-center items-center mt-2 p-1 `}
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
                <div className=" bg-gray-700 ">
                    <i onClick={() => removeFromFav(item.id)}
                    className="fa fa-times px-2 hover:text-red-500 rounded"></i>
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

            <div className="mt-4 flex justify-center items-center">
              <button
                onClick={clearFav}
                className="bg-blue-400 text-white px-2 py-1 rounded-sm"
              >
                پاک کردن همه علاقه مندی&zwnj;ها
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
