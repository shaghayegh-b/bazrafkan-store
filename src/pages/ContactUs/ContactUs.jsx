import { memo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
import { NavLink } from "react-router-dom";
import img from "../../assets/img/11.jpg";
import Footer from "../../components/Footer/Footer";

function ContactUs() {
  return (
    <>
      <Navbar></Navbar>
      <Support></Support>
      <div className="h-12"></div>
      <div className="p-3">
        <NavLink to="/bazrafkan-store/">
          <i className="fa fa-arrow-right p-1 pb-4"></i>برگشت به صفحه اصلی
        </NavLink>
        <div className="relative w-[100%] h-[10rem] ">
          <img src={img} alt="" className="h-[10rem]" />
          <h2 className=" absolute text-[170%] font-extrabold text-white top-[35%] w-[100%] text-center ">
            پشتیبانی
          </h2>
        </div>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
            پشتیبانی</h3>
            <p className=" p-2 pb-6">
            فقط از طریق پیام رسان های (تلگرام , واتس اپ , ایتا):
            09399619640</p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
            کانال ها</h3>
            <p className=" p-2 pb-6">
            کانال ما در ایتا و تلگرام : @shaghayegh</p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
            ادمین ثبت سفارش</h3>
            <p className=" p-2 pb-6">
            در پیام رسان تلگرام و ایتا : 09399619640 , @shaghayegh</p>
      </div>
      <Footer></Footer>
    </>
  );
}
export default memo(ContactUs);
