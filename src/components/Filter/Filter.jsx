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
    <div className="my-filter  flex gap-1 px-2 items-center">
      <div className="w-33">
        <CustomSelect applyFilter={applyFilter} />
      </div>
      <div className="flex gap-1 overflow-auto">
        <button
          onClick={() =>
            handleChange({
              target: {
                value: activeFilter === "available" ? "" : "available",
              },
            })
          }
          className={`
            px-3 py-1 rounded-xl shadow transition min-w-31
          ${
            activeFilter === "available"
              ? "bg-white text-gray-800"
              : "bg-gray-800 text-white"
          }`}
        >
          محصولات موجود
        </button>
      </div>
    </div>
  );
}

export default memo(Filter);
