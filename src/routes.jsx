import Account from "./pages/Account/Account";
import Login from "./pages/Account/Login";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/MyHome/Home";
import OneProduct from "./pages/OneProduct/OneProduct";
import ShoppingBag from "./pages/ShoppingBag/ShoppingBag";

export let router = [
   {path:'/bazrafkan-store/',element:<Home />},
   {path:'/bazrafkan-store/Account',element:<Account />},
   {path:'/bazrafkan-store/Login',element:<Login />},
   {path:'/bazrafkan-store/ContactUs',element:<ContactUs />},
   {path:'/bazrafkan-store/OneProduct',element:<OneProduct />},
   {path:'/bazrafkan-store/ShoppingBag',element:<ShoppingBag />},
]
