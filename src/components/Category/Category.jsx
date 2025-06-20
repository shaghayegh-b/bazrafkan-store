import { memo } from "react";

function Category({ title }) {
  return (
    <>
      <div className=" text-gray-200 text-center p-2 flex flex-col justify-center items-center">
        <div>
          <span className="bg-gray-600 rounded-full p-2">
            <i className="fa fa-shirt"></i>
          </span>
        </div>
        <p className="pt-1 tracking-tighter">{title}</p>
      </div>
    </>
  );
}
export default memo(Category);
