import axios from "axios";
import React, { createContext, useContext, useState } from "react";

// 1. ساخت Context
const AxiosContaext = createContext();

// 2. ساخت Provider
export function AxiosProvider({ children }) {
  const [isAxios, setIsAxios] = useState([]);
  const [loading, setLoading] = useState(false);

  async function funcAxios(url) {
    try {
      setLoading(true); // لودینگ شروع شد
      const res = await axios.get(url);
      setIsAxios(res.data);
    } catch (error) {
      console.error("خطا در دریافت دیتا:", error);
    } finally {
      setLoading(false); // لودینگ تموم شد
    }
  }


  // این آبجکت رو به همه کامپوننت‌ها میدیم
  return (
    <AxiosContaext.Provider
      value={{
        isAxios,
        setIsAxios,
        funcAxios,
        loading,
        setLoading
      }}
    >
      {children}
    </AxiosContaext.Provider>
  );
}

// 3. هوک آماده استفاده برای راحتی
export function useAxios() {
  return useContext(AxiosContaext);
}
