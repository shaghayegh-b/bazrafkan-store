import { memo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
import { NavLink } from "react-router-dom";
import img from "../../assets/img/11.jpg";
import Footer from "../../components/Footer/Footer";
function AskedQuestion() {
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
            سوالات متداول و پر تکرار
          </h2>
        </div>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          شیوه ی خرید
        </h3>
        <p className=" p-2 pb-6">
          شما مشتریان محترم میتوانید از روش آنلاین سفارش خود را ثبت کنید.
          <br></br>
          همواره برای خرید اینترنتی از ما در هر ساعت از شبانه روز میتوانید از
          طریق سایت محصولات مورد نظر خود را انتخاب و سفارش خود را ثبت کنید.
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          آیا بوتیک شقایق پشتیبانی دارد؟
        </h3>
        <p className=" p-2 pb-6">
          بله شما میتوانید از طریق شماره های زیر با پشتیبانی تماس بگیرید و
          سوالات خود را با همکاران ما مطرح کنید.
          <br />
          09399619640
          <br />
          09399619640
          <br />
          09399619640
          <br />
          شنبه تا چهارشنبه ۸ – 18
          <br />
          پنجشنبه 8 تا 14
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          ارسال سفارشات چند روز طول میکشه؟
        </h3>
        <p className=" p-2 pb-6">
          از زمان ثبت سفارش بین 7 الی 10 روز کاری از طریق پست و یا تیپاکس براتون
          ارسال میشه.
          <br />
          در صورتی که محصول پیش فروش را خریداری کنید زمان ارسال از تاریخ ذکر شده
          روی محصول مورد نظر محاسبه میشود.
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          آیا سایزها دقیقاً مطابق با اندازه‌های من هستند؟
        </h3>
        <p className=" p-2 pb-6">
          ما یک راهنمای اندازه گیری دقیق در صفحه هر محصول داریم. لطفاً قبل از
          خرید، اندازه‌های خود را با این راهنما مقایسه کنید.
        </p>
        {/* <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          آیا می‌توانم کالای خریداری شده را بازگشت دهم؟
        </h3>
        <p className=" p-2 pb-6">
          بله، شما می‌توانید محصولات خریداری شده را در صورت عدم استفاده و در
          شرایط درج شده در فاکتور به ما بازگشت دهید. لطفاً قوانین بازگشت کالا را
          در صفحه “شرایط بازگشت کالا” مطالعه کنید.
        </p> */}
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          آیا امکان ارسال رایگان وجود دارد؟
        </h3>
        <p className=" p-2 pb-6">
          با خرید ۳ محصول به ارزش 900 هزار تومان و یا بیشتر از ارسال رایگان بهره
          مند شوید.
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          آیا می‌توانم وضعیت سفارش خود را پیگیری کنم؟
        </h3>
        <p className=" p-2 pb-6">
          بله، پس از ثبت سفارش یک شناسه برای شما پیامک میشود و شما را از تایید
          سفارشتان و روند آماده سازی مطلع میسازد.همچنین پس از تحویل به اداره ی
          پست و تیپاکس برایتان کد رهگیری مرسوله پیامک میگردد.
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          آیا امکان تغییر یا اصلاح سفارش وجود دارد؟
        </h3>
        <p className=" p-2 pb-6">
          بله شما میتوانید تا قبل از ارسال مرسوله با پشتیبانی تماس بگیرین و
          تغییرات مورد نظر خود را هماهنگ کنید.توجه بفرمایید که ویرایش مرسوله فقط
          از طریق تماس تلفنی انجام میشود و از طریق ارسال پیامک پیگیری نمیشود.
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          آیا تصاویر لباس‌ها واقعی هستند؟
        </h3>
        <p className=" p-2 pb-6">
          بله تمامی لباسهایی که مشاهده میکنید در مجموعه ی شقایق عکاسی میشود.
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          اگر هنگام تحویل کالا مشکلی وجود داشت، چه باید بکنم؟
        </h3>
        <p className=" p-2 pb-6">
          چنانچه هرگونه ایراد و اشکال هنگام تحویل لباس مشاهده کردید لطفا در همان
          روز با شماره ی پشتیبانی تماس بگیرید تا امکان مرجوعی و تعویض کالا
          برایتان فراهم شود.
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          هزینه ارسال بازگشت کالا بر عهده کیست؟
        </h3>
        <p className=" p-2 pb-6">
          اگر کالا به دلیل اشتباه ما ارسال شده باشد، هزینه بازگشت بر عهده ما
          است.
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          آیا می‌توانم کد تخفیف دریافت کنم؟
        </h3>
        <p className=" p-2 pb-6">
          با عضویت در <span className="text-red-500">باشگاه مشتریان</span>{" "}
          میتوانید از شرایط ویژه هنگام خرید بهره مند شوید.
        </p>
        <h3 className="text-[130%] font-bold text-blue-300 px-1 pt-4">
          چطور می‌توانم سفارش خود را لغو کنم؟
        </h3>
        <p className=" p-2 pb-6">
          امکان لغو سفارش فقط از طریق تماس با پشتیبانی امکان پذیر است.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}
export default memo(AskedQuestion);
