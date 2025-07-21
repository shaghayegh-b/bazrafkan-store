import { memo } from "react";
import { useAxios } from "../../context/AxiosContaext";
import { GiLipstick, GiPoloShirt, GiSkirt } from "react-icons/gi";
import { PiDressBold } from "react-icons/pi";
import { PiHandbagSimpleBold } from "react-icons/pi";
import {  TbHomeHeart ,TbCategory } from "react-icons/tb";
import { FaSnowflake, FaGlasses } from "react-icons/fa6";
function Category() {
  const { funcAxios } = useAxios();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products"
          );
        }}
        className=" Category"
      >
        <TbCategory size={20}/>
        <p  >همه‌محصولات</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=مانتو"
          );
        }}
        className=" Category "
      >
<GiPoloShirt size={20} />        <p  >مانتو</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=شلوار"
          );
        }}
        className=" Category "
      >
<GiSkirt size={20} />
        <p  >
          شلوار{"\u2009"}و{"\u2009"}دامن
        </p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=ست"
          );
        }}
        className=" Category "
      >
<PiDressBold size={20} />
        <p  >ست</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=خونگی"
          );
        }}
        className=" Category "
      >
<TbHomeHeart size={20} />
 <p  >
          تو{"\u2009"}خونه{"\u200A"}ای
        </p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=ارایشی"
          );
        }}
        className=" Category "
      >
<GiLipstick size={20} />

        <p  >ارایشی{"\u2009"}بهداشتی</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=زمستونه"
          );
        }}
        className=" Category "
      >
<FaSnowflake size={20} />
        <p  >لباس{"\u200A"}گرم</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=کیف"
          );
        }}
        className=" Category "
      >
<PiHandbagSimpleBold size={20} />        <p  >
          کیف{"\u2009"}و{"\u2009"}کفش
        </p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=اکسسوری"
          );
        }}
        className=" Category "
      >
 <FaGlasses size={20} />
        <p  >اکسسوری</p>
      </button>
    </>
  );
}
export default memo(Category);
