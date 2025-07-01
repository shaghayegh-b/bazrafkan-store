import AboutUs from "./pages/AboutUs/AboutUs";
import Account from "./pages/Account/Account";
import Login from "./pages/Account/Login";
import AskedQuestion from "./pages/AskedQuestion/AskedQuestion";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/MyHome/Home";
import OneProduct from "./pages/OneProduct/OneProduct";
import ShoppingBag from "./pages/ShoppingBag/ShoppingBag";

export let router = [
   {path:'/bazrafkan-store/',element:<Home />},
   {path:'/bazrafkan-store/Account',element:<Account />},
   {path:'/bazrafkan-store/Login',element:<Login />},
   {path:'/bazrafkan-store/ContactUs',element:<ContactUs />},
   {path:'/bazrafkan-store/AboutUs',element:<AboutUs />},
   {path:'/bazrafkan-store/AskedQuestion',element:<AskedQuestion />},
   { path: '/bazrafkan-store/OneProduct/:id', element: <OneProduct /> },
    {path:'/bazrafkan-store/ShoppingBag',element:<ShoppingBag />},
]
