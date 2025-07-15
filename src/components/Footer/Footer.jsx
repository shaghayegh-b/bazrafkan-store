import { memo } from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="Footer bg-[#090f1a] p-3 text-white">
        <div className=" pb-7 ">
          <h3 className="text-[120%] font-bold px-1 pt-3">دسترسی سریع</h3>
          <ul className="text-[90%] text-gray-100">
            <li>
              <Link to="/bazrafkan-store/OrderTracking">پیگیری سفارش</Link>
            </li>
            <li>
              <Link to="/bazrafkan-store/AskedQuestion">سوالات متداول</Link>
            </li>

            <li>
              <Link to="/bazrafkan-store/Complaints">پیگیری شکایات</Link>
            </li>
          </ul>
          <h3 className="text-[120%] font-bold px-1 pt-3 ">حساب کاربری</h3>
          <ul className="text-[90%] text-gray-100">
            <li>
              <Link to="/bazrafkan-store/ShoppingBag">سبد خرید</Link>
            </li>
            <li>
              <Link to="/bazrafkan-store/FavProduct">لیست علاقه مندی ها</Link>
            </li>
            <li>
              <Link  to="/bazrafkan-store/Login">حساب کاربری من</Link>
            </li>
          </ul>
          <h3 className="text-[120%] font-bold px-1 pt-3 ">اطلاعات</h3>
          <ul className="text-[90%] text-gray-100">
            <li>
              <Link to="/bazrafkan-store/AboutUs">درباره ما</Link>
            </li>
            <li>
              <Link to="/bazrafkan-store/ContactUs">ارتباط با ما</Link>
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
