import { memo } from "react";

function Category({ title }) {
  return (
    <>
      <div className="  flex flex-col justify-center items-center p-1 rounded-sm bg-gray-700 ">
        <p className=" tracking-tighter">{title}</p>
      </div>
    </>
  );
}
export default memo(Category);
