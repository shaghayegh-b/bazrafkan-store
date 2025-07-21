import { memo } from "react";
import { useAxios } from "../../context/AxiosContaext";

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
        <p  >مانتو</p>
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
        <p  >
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
        <p  >اکسسوری</p>
      </button>
    </>
  );
}
export default memo(Category);
