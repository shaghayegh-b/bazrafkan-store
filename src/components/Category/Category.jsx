import { memo } from "react";

function Category({ title }) {
  return (
    <>
      <div className=" text-gray-200 flex flex-col justify-center items-center  rounded-sm bg-gray-700 ">
        <p className=" tracking-tighter">{title}</p>
      </div>
    </>
  );
}
export default memo(Category);
