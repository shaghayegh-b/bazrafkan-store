import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { memo } from "react";

const filters = [
  { id: '', label: 'همه محصولات' },
  { id: 'cheapest', label: 'ارزان‌ترین' },
  { id: 'mostExpensive', label: 'گران‌ترین' },
  { id: 'mostDiscount', label: 'بیشترین تخفیف' },
  { id: 'newest', label: 'جدیدترین' },
];

function CustomSelect({ applyFilter }) {
  const [selected, setSelected] = useState(filters[0]);

  const handleSelect = (value) => {
    setSelected(value);
    applyFilter(value.id);
  };

  return (
    <Listbox value={selected} onChange={handleSelect}>
      {({ open }) => ( // 👈 این خط اضافه شده
        <div className="relative">
          <Listbox.Button className="flex justify-between items-center text-right w-full rounded-xl px-3 py-1 shadow transition bg-gray-800 focus:outline-none focus:ring-1 focus:ring-white">
            <span className={`w-[90%]`}>{selected.label}</span>
            <i
              className={`fa fa-chevron-up px-[5px] ${
                open ? 'rotate-[180deg]' : ''
              } transition-all duration-300 text-[85%]`}
            ></i>
          </Listbox.Button>

          <Listbox.Options className="absolute mt-1 w-full text-[90%] shadow-lg text-right border-1 border-solid border-white z-3 focus:outline-none">
            {filters.map((filter) => (
              <Listbox.Option
                key={filter.id}
                value={filter}
                className={({ active }) =>
                  `px-3 py-1 cursor-pointer ${
                    active ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
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
