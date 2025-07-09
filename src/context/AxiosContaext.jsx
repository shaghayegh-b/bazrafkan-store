import axios from "axios";
import React, { createContext, useContext, useState } from "react";

// 1. ساخت Context
const AxiosContext = createContext();

// 2. ساخت Provider
export function AxiosProvider({ children }) {
  const [isAxios, setIsAxios] = useState([]); // دیتای اصلی
  const [filteredProducts, setFilteredProducts] = useState([]); // دیتای فیلتر شده
  const [loading, setLoading] = useState(false);

  // تابع دریافت داده از API
  async function funcAxios(url) {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setIsAxios(res.data);
      setFilteredProducts(res.data); // وقتی دیتا میاد، فیلترشده هم برابرشه
    } catch (error) {
      console.error("خطا در دریافت دیتا:", error);
    } finally {
      setLoading(false);
    }
  }

  // تابع فیلتر کردن داده‌ها
  function applyFilter(type) {
    // اول محصولات موجود
    let sorted = isAxios.filter(item => item.remaining !== "اتمام موجودی");

    switch (type) {
      case "cheapest":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "mostExpensive":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      case "mostDiscount":
        sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case "available":
        // همین الان فیلتر شده، فقط لازم نیست کاری کنی
        break;
      default:
        // اگر هیچ فیلتری انتخاب نشه، کل دیتا رو نشون بده
        sorted = isAxios;
    }

    setFilteredProducts(sorted);
  }


  return (
    <AxiosContext.Provider
      value={{
        isAxios,
        filteredProducts,
        setIsAxios,
        funcAxios,
        loading,
        applyFilter,
        setFilteredProducts,
        setLoading,
      }}
    >
      {children}
    </AxiosContext.Provider>
  );
}

// 3. هوک آماده برای استفاده در کامپوننت‌ها
export function useAxios() {
  return useContext(AxiosContext);
}
