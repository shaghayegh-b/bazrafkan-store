import React, { createContext, useContext, useState, useEffect } from "react";

// 1. ساخت Context
const FavContext = createContext();

// 2. ساخت Provider
export function FavProvider({ children }) {
  // اینجا state سبد خرید رو نگه می‌داریم
    const [favoriteItems, setfavoriteItems] = useState(() => {

    // اگر میخوایم علاقه مندی رو تو localStorage نگه داریم
    const saved = localStorage.getItem("favoriteItems");
    return saved ? JSON.parse(saved) : [];
  });

  // ذخیره علاقه مندی در localStorage هر بار که تغییر کرد
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  // اضافه کردن کالا به علاقه مندی
  function addToFav(product) {
    setfavoriteItems((prev) => {
      // چک می‌کنیم کالا قبلا اضافه شده یا نه
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // اگر بود، تعدادش رو زیاد کن
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, totalFavorites: item.totalFavorites + 1 }
            : item
        );
      } else {
        // اگر نبود، کالا جدید اضافه کن با totalFavorites=1
        return [...prev, { ...product, totalFavorites: 1 }];
      }
    });
  }

  // حذف کالا از علاقه مندی بر اساس id
  function removeFromFav(id) {
    setfavoriteItems((prev) => prev.filter((item) => item.id !== id));
  }


  // پاک کردن کل علاقه مندی ها
  function clearFav() {
    setfavoriteItems([]);
  }

  // تعداد کل کالاها (مجموع totalFavorites ها)
  const totalFavorites = favoriteItems.reduce((acc, item) => acc + item.totalFavorites, 0);

  // این آبجکت رو به همه کامپوننت‌ها میدیم
  return (
    <FavContext.Provider
      value={{
        favoriteItems,
        addToFav,
        removeFromFav,
        clearFav,
        totalFavorites,
      }}
    >
      {children}
    </FavContext.Provider>
  );
} 

// 3. هوک آماده استفاده برای راحتی
export function useFav() {
  return useContext(FavContext);
}
