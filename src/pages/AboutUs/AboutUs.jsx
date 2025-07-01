import { memo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
import { NavLink } from "react-router-dom";
import img from "../../assets/img/11.jpg";
import Footer from "../../components/Footer/Footer";

function AboutUs() {
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
          <h2 className="absolute text-[170%] font-extrabold text-white top-[35%] w-[100%] text-center ">
            درباره ما
          </h2>
        </div>
        <h3 className="text-[130%] p-3 pt-4 w-[100%] text-center  font-bold text-yellow-300">     خوش اومدی به فروشگاه شقایق 💛
        </h3>
     <p>
ما اینجا دور هم جمع شدیم تا خرید پوشاک زنونه رو برات ساده‌تر، سریع‌تر و مهم‌تر از همه، لذت‌بخش‌تر کنیم.
<br />
از همون روز اول، هدفمون فقط فروش لباس نبود — می‌خواستیم تجربه‌ای بسازیم که حس خوب بده، مثل وقتی لباسی که دوست داری رو پیدا می‌کنی و با ذوق می‌پوشیش.

باور داریم که لباس خوب، فقط ظاهر قشنگ نیست؛ باید راحت، باکیفیت و موندگار باشه.
<br />
 برای همین با دقت سراغ انتخاب طرح‌ها، پارچه‌ها و دوخت می‌ریم تا محصولی بهت بدیم که همون‌قدر که زیباست، کاربردی هم باشه — با قیمتی منصفانه و بدون اضافه‌گویی.
<br />
<br />
تیم ما یه گروه پرانرژیه؛ از طراحی و تولید محتوا گرفته تا پشتیبانی، انبار و بسته‌بندی، همه با عشق کار می‌کنن تا سفارشت دقیق، شیک و به‌موقع به دستت برسه.
<br/>
ما به جزئیات اهمیت می‌دیم، چون می‌دونیم همین چیزهای کوچیکه که باعث می‌شه یه خرید معمولی تبدیل به یه تجربه‌ی خوب بشه.
</p>


<p className="text-center w-[100%] text-yellow-300 py-2">اعتماد تو بزرگ‌ترین سرمایه‌ی ماست.
</p>

<p>
ما هر روز با انگیزه‌ی بیشتر تلاش می‌کنیم تا بهتر بشیم، چون می‌خوایم همیشه انتخاب اولت باشیم!
<br />
نه فقط برای خرید، بلکه برای حس خوب همراهی💛
     </p>
      </div>
      <Footer></Footer>
    </>
  );
}
export default memo(AboutUs);
