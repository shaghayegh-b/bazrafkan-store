import { memo, useState } from "react";

function Support() {
  const [supporting, setSupporting] = useState(false);
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-1 w-[100vw] h-[100vh] bg-gray-800 relative ${
          supporting ? "" : "hidden"
        }`}
      >
        <button
          onClick={() => setSupporting(!supporting)}
          type="button"
          className="w-6.5 h-6  flex justify-center items-center absolute top-0 left-0 z-1"
        >
          <i className="fa fa-arrow-left"></i>
        </button>
        <p className="p-6">صفحه چت درحال ساخت...</p>
      </div>
      <button
        onClick={() => setSupporting(!supporting)}
        className="fixed bottom-2 left-2 z-1 rounded-full w-9 h-9 bg-gray-900 text-gray-300 flex justify-center items-center"
      >
        <i className="fa fa-headset text-2xl pt-[1px]"></i>
      </button>
    </>
  );
}
export default memo(Support);
