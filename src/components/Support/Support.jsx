import { memo, useState } from "react";

function Support() {
  const [supporting, setSupporting] = useState(false);
  return (
    <>
      <div
        className={`Support  fixed top-0 left-0 z-1 bg-[#8bc7f9] w-[100vw] h-[100vh] ${
          supporting ? "" : "hidden"
        }`}
      >
      <div className="h-15"></div>
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
        className="fixed bottom-4 left-2 z-1 bg-[#81bcf0] rounded-full w-[3.3rem] h-[3.3rem]   flex justify-center items-center  border-2 border-solid border-[#00294c]"
      >
        <i className="fa fa-headset  text-[135%] pt-[1px]"></i>
      </button>
    </>
  );
}
export default memo(Support);
