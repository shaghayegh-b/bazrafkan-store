import { useAxios } from "../../context/AxiosContaext";
import CustomSelect from "./CustomSelect"; // ← مسیر درست به فایل
import { memo, useState } from "react";
function Filter() {
  const { applyFilter } = useAxios();
  const [activeFilter, setActiveFilter] = useState("");

  const handleChange = (e) => {
    const id = e.target.value;
    setActiveFilter(id);
    applyFilter(id);
  };
  return (
    <div className="my-filter h-10 flex gap-1 px-2 justify-right items-center text-[95%]">
        <CustomSelect applyFilter={applyFilter} />
      <div className="">
        <button
          onClick={() =>
            handleChange({
              target: {
                value: activeFilter === "available" ? "" : "available",
              },
            })
          }
          className={`
            px-3 py-1 rounded-xl shadow-sm transition min-w-32 focus:ring-1 focus:ring-white
          ${
            activeFilter === "available"
              ? "bg-[#81bcf0] border-[3px] border-[#97a7b461]"
              : ""
          }`}
        >
          محصولات موجود
        </button>
      </div>
    </div>
  );
}

export default memo(Filter);
