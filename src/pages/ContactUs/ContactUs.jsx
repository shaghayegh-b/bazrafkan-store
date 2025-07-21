import { memo, useEffect } from "react";
import Header from "../../components/Header/Header";
import img from "../../assets/img/11.jpg";
import Footer from "../../components/Footer/Footer";

function ContactUs() {
  //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header>ارتباط با ما</Header>
      <div className="ContactUs px-2 py-1">
        <div className="relative w-[100%] mt-2">
          <img src={img} alt="" className="" />
          <h2 className=" absolute text-[170%] font-extrabold  top-[35%] w-[100%] text-center ">
            ارتباط با ما
          </h2>
        </div>
        <h3 className="text-[130%] font-bold  px-1 pt-4">
          پشتیبانی
        </h3>
        <p className=" p-2 pb-6 px-3">
          فقط از طریق پیام رسان های (تلگرام , واتس اپ , ایتا):
          <a href="tel:09399619640">09399619640</a>
        </p>
        <h3 className="text-[130%] font-bold  px-1 pt-4">
          کانال ها
        </h3>
        <p className=" p-2 pb-6 px-3">
          کانال ما در ایتا و تلگرام : ,
          <a href="mailto:@bazrafkan">@bazrafkan</a>
        </p>
        <h3 className="text-[130%] font-bold  px-1 pt-4">
          ادمین ثبت سفارش
        </h3>
        <p className=" p-2 pb-6 px-3">
          در پیام رسان تلگرام و ایتا : <a href="tel:09399619640">09399619640</a>
          , <a href="mailto:@bazrafkan">@bazrafkan</a>
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}
export default memo(ContactUs);
