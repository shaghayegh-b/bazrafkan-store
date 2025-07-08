import { useState } from "react";
import { useAxios } from "../../context/AxiosContaext";

function Filter() {
  const { applyFilter } = useAxios();
  const [activeFilter, setActiveFilter] = useState(""); // فقط یکی فعاله

  const filters = [
    { id: "cheapest", label: "ارزان‌ترین" },
    { id: "mostExpensive", label: "گران‌ترین" },
    { id: "mostDiscount", label: "بیشترین تخفیف" },
    { id: "newest", label: "جدیدترین" },
    { id: "available", label: "محصولات موجود" },
  ];

  const handleFilterClick = (id) => {
    // اگر دوباره روی همون کلیک شد، فیلتر رو پاک کن
    if (activeFilter === id) {
      setActiveFilter("");
      applyFilter(""); // همه چیز نشون داده بشه
    } else {
      setActiveFilter(id);
      applyFilter(id); // فیلتر جدید
    }
  };

  return (
    <div className="flex flex-wrap gap-1 justify-center my-4">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`px-3 py-1 rounded-xl text-sm shadow transition
            ${activeFilter === filter.id ? "bg-white text-gray-800" : "bg-gray-800 text-white"}
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
