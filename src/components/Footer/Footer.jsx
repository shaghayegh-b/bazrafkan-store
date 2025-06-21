import { memo } from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-gray-300 p-3">
        <div className=" p-3 pb-4.5 ">
          <h3 className="text-[120%] font-bold px-1 pt-3 text-gray-200">دسترسی سریع</h3>
          <ul className="text-[90%]">
            <li>
              <a href="">پیگیری سفارش</a>
            </li>
            <li>
              <a href="">سوالات متداول</a>
            </li>
            <li>
              <a href="">شرایط بازگشت کالا</a>
            </li>
            <li>
              <a href="">پیگیری شکایات</a>
            </li>
            <li>
              <a href="">شرایط قوانین فروشگاه</a>
            </li>
          </ul>
          <h3 className="text-[120%] font-bold px-1 pt-3  text-gray-200">
            حساب کاربری
          </h3>
          <ul className="text-[90%]">
            <li>
              <a href="">سبد خرید</a>
            </li>
            <li>
              <a href="">سفارشات من</a>
            </li>
            <li>
              <a href="">لیست علاقه مندی ها</a>
            </li>
            <li>
              <a href="">حساب کاربری من</a>
            </li>
          </ul>
          <h3 className="text-[120%] font-bold px-1 pt-3  text-gray-200">
            اطلاعات
          </h3>
          <ul className="text-[90%]">
            <li>
              <a href="">درباره ما</a>
            </li>
            <li>
              <a href="">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 text-[80%] text-center">
          <div>
            <p>
              تماس با فروشگاه
              <br></br>
              09399619640
            </p>
          </div>
          <div>
            <p>
              تماس با واحد پشتیبانی
              <br></br>
              061 4444444
              <br />
              061 4444444
            </p>
          </div>
          <div>
            <p>هفت روز هفته پاسخگوی شما هستیم</p>
          </div>{" "}
        </div>

        <p className=" bg-gray-800 mt-3 text-center">بوتیک شقایق</p>
      </div>
    </>
  );
}
export default memo(Footer);
