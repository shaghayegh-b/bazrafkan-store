import Account from "./pages/Account/Account";
import Login from "./pages/Account/Login";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/MyHome/Home";

export let router = [
   {path:'/bazrafkan-store/',element:<Home />},
   {path:'/bazrafkan-store/Account',element:<Account />},
   {path:'/bazrafkan-store/Login',element:<Login />},
   {path:'/bazrafkan-store/ContactUs',element:<ContactUs />},
]
