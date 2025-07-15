import React, { createContext, useContext, useState, useEffect } from "react";

// 1. ساخت Context
const LoginContext = createContext();

// 2. ساخت Provider
export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(() => {
    const storedUser = localStorage.getItem("isLogin");
    return storedUser ? JSON.parse(storedUser) : "";
  });
  // ذخیره لاگین در localStorage هر بار که تغییر کرد
  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);
  // این آبجکت رو به همه کامپوننت‌ها میدیم

  //   خروج از حساب کاربری
  const logout = () => {
    setIsLogin(null), localStorage.removeItem("isLogin");
    navigate("/bazrafkan-store/");
  };
  return (
    <LoginContext.Provider
      value={{
        isLogin,
        setIsLogin,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

// 3. هوک آماده استفاده برای راحتی
export function useIsLogin() {
  return useContext(LoginContext);
}
