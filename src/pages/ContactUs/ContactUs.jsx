import { memo } from "react"
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
import { NavLink } from "react-router-dom";

function ContactUs() {
    return(
        <>
            <Navbar></Navbar>
    <Support></Support>
     <div className="h-12"></div>
        <div className="p-3">
            <NavLink to="/bazrafkan-store/">
            <i className="fa fa-arrow-right p-1"></i>برگشت</NavLink>
            <h3 className="text-[120%] font-bold  px-1 pt-4">پشتیبانی:</h3>
            <p>فقط از طریق پیام رسان های
                 (تلگرام , واتس اپ , ایتا):09399619640
                 </p>
                 <h3 className="text-[120%] font-bold  px-1 pt-4">کانال ها:</h3>
                 <p>کانال ما در ایتا و تلگرام:@shaghayegh</p>
                 <h3 className="text-[120%] font-bold  px-1 pt-4">ادمین ثبت سفارش:</h3>
                 <p>در پیام رسان تلگرام و ایتا : 09399619640 , @shaghayegh</p>
        </div>
        </>
    )
}
export default memo(ContactUs)
