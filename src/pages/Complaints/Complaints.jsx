import { memo, useEffect } from "react";
import Header from "../../components/Header/Header";
import img from "../../assets/img/7.webp";
import Footer from "../../components/Footer/Footer";
function Complaints() {
  //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header>پیگیری شکایات</Header>
      <div className="OrderTracking px-2 py-1">
        <div className=" w-[100%] mt-2">
          <img src={img} alt="" className="" />
        </div>
        <h3 className="text-[130%] font-bold text-blue-200 px-1 pt-4">
          پیگیری شکایات
        </h3>

        <p className=" p-2 pb-6">
          برای پیگیری شکایات خود میتوانید با شماره{" "}
          <span className="text-red-300">09399619640</span> و یا{" "}
          <span className="text-red-300">09399619640</span>
          تماس بگیرید
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}
export default memo(Complaints);
