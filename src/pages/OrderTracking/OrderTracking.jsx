import { memo, useEffect } from "react";
import Header from "../../components/Header/Header";
import img from "../../assets/img/5.jpg";
import Footer from "../../components/Footer/Footer";
function OrderTracking() {
  //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header>پیگیری سفارشات</Header>
      <div className="OrderTracking px-2 py-1">
        <div className="relative w-[100%] mt-2">
          <img src={img} alt="" className="" />
          <h2 className=" absolute text-[170%] font-extrabold top-[35%] w-[100%] text-center ">
            پیگیری سفارشات
          </h2>
        </div>
        <h3 className="text-[130%] font-bold  px-1 pt-4">
          پیگیری سفارشات
        </h3>

        <p className=" p-2 pb-6">
          ضمن تشکر بابت اعتماد شما
          <br />
          ما به منظور راحتی شما در پیگیری سفارش و اطلاع از وضعیت مرسوله، کد
          رهگیری مرسوله شما را پس از ارسال، به شماره تلفن ثبت شده هنگام خرید
          ارسال می‌کنیم.
          <br />
          برای پیگیری مرسولات پستی، شما می‌توانید با استفاده از کد رهگیری
          دریافتی، در سامانه رهگیری مرسولات اداره پست از آخرین وضعیت مرسوله خود
          مطلع شوید.
          <br />
          همچنین عزیزانی که به علت مسدود کردن پیامک‌های تبلیغاتی روی خط خود و یا
          ثبت شماره تلفن منزل هنگام ثبت سفارش قادر به دریافت پیامک کد رهگیری
          نیستند، می توانند کد رهگیری مرسوله خود را در صفحه اینستاگرام و یا
          کانال تلگرام وانیک مشاهده کنند.
        </p>
        <a
          href="https://tracking.post.ir/"
          className=" flex justify-center text-[135%] font-bold text-red-500 mb-8"
        >
          ورود به سامانه رهگیری مرسولات اداره پست
        </a>
      </div>
      <Footer></Footer>
    </>
  );
}
export default memo(OrderTracking);
