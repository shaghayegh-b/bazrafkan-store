import { useAxios } from "../../context/AxiosContaext";
import CustomSelect from "./CustomSelect"; // ← مسیر درست به فایل
import { memo } from "react";
function Filter() {
  const { applyFilter,sortFilter, onlyAvailable, setOnlyAvailable,} = useAxios();

  const handleChange = () => {
    const newAvailable = !onlyAvailable;
    setOnlyAvailable(newAvailable);
    applyFilter(sortFilter, newAvailable);
  };
  return (
    <div className="my-filter h-10 flex gap-1 px-2 justify-right items-center text-[95%]">
      <CustomSelect
        sortFilter={sortFilter}
        applyFilter={applyFilter}
      />
      <div className="">
        <button
          onClick={handleChange}
          className={`
            px-3 py-1 rounded-xl shadow-sm transition min-w-32 focus:ring-1 focus:ring-white
          ${
            onlyAvailable
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
