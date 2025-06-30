import React, { createContext, useContext, useState, useEffect } from "react";

// 1. ساخت Context
const CartContext = createContext();

// 2. ساخت Provider
export function CartProvider({ children }) {
  // اینجا state سبد خرید رو نگه می‌داریم
  const [cartItems, setCartItems] = useState(() => {
    // اگر میخوایم سبد رو تو localStorage نگه داریم
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // ذخیره سبد خرید در localStorage هر بار که تغییر کرد
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // اضافه کردن کالا به سبد
  function addToCart(product) {
    setCartItems((prev) => {
      // چک می‌کنیم کالا قبلا اضافه شده یا نه
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // اگر بود، تعدادش رو زیاد کن
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // اگر نبود، کالا جدید اضافه کن با quantity=1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  // حذف کالا از سبد بر اساس id
  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  // افزایش تعداد کالا
  function increase(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // کاهش تعداد کالا (اگر به صفر رسید حذفش کن)
  function decrease(id) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // پاک کردن کل سبد خرید
  function clearCart() {
    setCartItems([]);
  }

  // تعداد کل کالاها (مجموع quantity ها)
  const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // این آبجکت رو به همه کامپوننت‌ها میدیم
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        clearCart,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3. هوک آماده استفاده برای راحتی
export function useCart() {
  return useContext(CartContext);
}
