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
        className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 "
      >
        <p className=" tracking-tighter pb-1">همه‌محصولات</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=مانتو"
          );
        }}
        className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 "
      >
        <p className=" tracking-tighter pb-1">مانتو</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=شلوار"
          );
        }}
        className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 "
      >
        <p className=" tracking-tighter pb-1">شلوار{"\u2009"}و{"\u2009"}دامن</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=ست"
          );
        }}
        className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 "
      >
        <p className=" tracking-tighter pb-1">ست</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=خونگی"
          );
        }}
        className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 "
      >
        <p className=" tracking-tighter pb-1">
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
        className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 "
      >
        <p className=" tracking-tighter pb-1">ارایشی{"\u2009"}بهداشتی</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=زمستونه"
          );
        }}
        className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 "
      >
        <p className=" tracking-tighter pb-1">لباس{"\u200A"}گرم</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=کیف"
          );
        }}
        className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 "
      >
        <p className=" tracking-tighter pb-1">کیف{"\u2009"}و{"\u2009"}کفش</p>
      </button>
      <button
        type="button"
        onClick={() => {
          funcAxios(
            "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?category=اکسسوری"
          );
        }}
        className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 "
      >
        <p className=" tracking-tighter pb-1">اکسسوری</p>
      </button>
    </>
  );
}
export default memo(Category);
