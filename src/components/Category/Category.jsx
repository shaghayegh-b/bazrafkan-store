import { memo } from "react";

function Category({ title }) {
  return (
    <>
      <div className=" Category flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 ">
        <p className=" tracking-tighter pb-1">{title}</p>
      </div>
    </>
  );
}
export default memo(Category);
