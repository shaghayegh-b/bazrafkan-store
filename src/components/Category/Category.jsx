import { memo } from "react";
import { useAxios } from "../../context/AxiosContaext";
import { GiLipstick, GiPoloShirt, GiSkirt } from "react-icons/gi";
import { PiDressBold } from "react-icons/pi";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { TbHomeHeart, TbCategory } from "react-icons/tb";
import { FaSnowflake, FaGlasses } from "react-icons/fa6";
function Category() {
  const { funcAxios, setSelectedCategory, selectedCategory, setActiveFilter } =
    useAxios();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products"
          );
          setSelectedCategory("همه");
          setActiveFilter("");
        }}
        className={`Category   ${
          selectedCategory === "همه" ? "bg-[#acd2f2]" : " bg-[#e4f0fd]"
        }`}
      >
        <TbCategory  />
        <p>همه‌محصولات</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=مانتو"
          );
          setSelectedCategory("مانتو");
          setActiveFilter("");
        }}
        className={`Category   ${
          selectedCategory === "مانتو" ? "bg-[#acd2f2]" : " bg-[#e4f0fd]"
        }`}
      >
        <GiPoloShirt  /> <p>مانتو</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=شلوار"
          );
          setSelectedCategory("دامن");
          setActiveFilter("");
        }}
        className={`Category   ${
          selectedCategory === "دامن" ? "bg-[#acd2f2]" : " bg-[#e4f0fd]"
        }`}
      >
        <GiSkirt  />
        <p>
          شلوار{"\u2009"}و{"\u2009"}دامن
        </p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=ست"
          );
          setSelectedCategory("ست");
          setActiveFilter("");
        }}
        className={`Category   ${
          selectedCategory === "ست" ? "bg-[#acd2f2]" : " bg-[#e4f0fd]"
        }`}
      >
        <PiDressBold  />
        <p>ست</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=خونگی"
          );
          setSelectedCategory("خونه ای");
          setActiveFilter("");
        }}
        className={`Category   ${
          selectedCategory === "خونه ای" ? "bg-[#acd2f2]" : " bg-[#e4f0fd]"
        }`}
      >
        <TbHomeHeart  />
        <p>
          تو{"\u2009"}خونه{"\u200A"}ای
        </p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=ارایشی"
          );
          setSelectedCategory("ارایشی");
          setActiveFilter("");
        }}
        className={`Category   ${
          selectedCategory === "ارایشی" ? "bg-[#acd2f2]" : " bg-[#e4f0fd]"
        }`}
      >
        <GiLipstick  />

        <p>ارایشی{"\u2009"}بهداشتی</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=زمستونه"
          );
          setSelectedCategory("زمستونه");
          setActiveFilter("");
        }}
        className={`Category   ${
          selectedCategory === "زمستونه" ? "bg-[#acd2f2]" : " bg-[#e4f0fd]"
        }`}
      >
        <FaSnowflake  />
        <p>لباس{"\u200A"}گرم</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=کیف"
          );
          setSelectedCategory("کفش");
          setActiveFilter("");
        }}
        className={`Category   ${
          selectedCategory === "کفش" ? "bg-[#acd2f2]" : " bg-[#e4f0fd]"
        }`}
      >
        <PiHandbagSimpleBold  />{" "}
        <p>
          کیف{"\u2009"}و{"\u2009"}کفش
        </p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=اکسسوری"
          );
          setSelectedCategory("اکسسوری");
          setActiveFilter("");
        }}
        className={`Category   ${
          selectedCategory === "اکسسوری" ? "bg-[#acd2f2]" : " bg-[#e4f0fd]"
        }`}
      >
        <FaGlasses  />
        <p>اکسسوری</p>
      </button>
    </>
  );
}
export default memo(Category);
