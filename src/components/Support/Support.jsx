import { memo, useState } from "react";

function Support() {
  const [supporting, setSupporting] = useState(false);
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-1 w-[100vw] h-[100vh] bg-gray-800 ${
          supporting ? "" : "hidden"
        }`}
      >
        <div className="relative ">
          <button
            onClick={() => setSupporting(!supporting)}
            type="button"
            className="w-6.5 h-6  flex justify-center items-center absolute top-0 left-0 z-1 "
          >
            <i className="fa fa-arrow-left"></i>
          </button>
        </div>
        <p className="p-6">صفحه چت درحال ساخت...</p>
      </div>
      <button
        onClick={() => setSupporting(!supporting)}
        className="fixed bottom-4 left-2 z-1 rounded-full w-[3.3rem] h-[3.3rem] bg-gray-900 text-gray-300 flex justify-center items-center  border-1 border-solid border-gray-300"
      >
        <i className="fa fa-headset text-[135%] pt-[1px]"></i>
      </button>
    </>
  );
}
export default memo(Support);
