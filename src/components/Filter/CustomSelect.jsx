import { Listbox } from "@headlessui/react";
import { memo } from "react";

function CustomSelect({ sortFilter, applyFilter }) {
  const filters = [
    { id: "", label: "همه محصولات" },
    { id: "cheapest", label: "ارزان‌ترین" },
    { id: "mostExpensive", label: "گران‌ترین" },
    { id: "mostDiscount", label: "بیشترین تخفیف" },
    { id: "newest", label: "جدیدترین" },
  ];

  const selected = filters.find(f => f.id === sortFilter) || filters[0];

  const handleSelect = (value) => {
    applyFilter(value.id); // فقط sort را تغییر می‌دهیم
  };

  return (
    <Listbox value={selected} onChange={handleSelect}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button
            className={`${
              open ? "border-[1px] border-[#97a7b461]" : ""
            } flex justify-between items-center text-right w-full rounded-xl px-3 py-1 shadow-sm transition focus:outline-none focus:ring-1 focus:ring-white`}
          >
            <span className={`w-[90%]`}>{selected.label}</span>
            <i
              className={`fa fa-chevron-up px-[5px] ${
                open ? "rotate-[180deg]" : ""
              } transition-all duration-300 text-[85%]`}
            ></i>
          </Listbox.Button>

          <Listbox.Options className="absolute bg-white mt-1 w-full text-[90%] rounded-sm border-[2px] border-[#97a7b461] z-3 focus:outline-none">
            {filters.map((filter) => (
              <Listbox.Option
                key={filter.id}
                value={filter}
                className={({ active }) =>
                  `px-3 py-1 cursor-pointer ${
                    active ? "bg-[#81bcf0] border-[3px] border-[#97a7b461]" : ""
                  }`
                }
              >
                {filter.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      )}
    </Listbox>
  );
}

export default memo(CustomSelect);
