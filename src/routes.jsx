import AboutUs from "./pages/AboutUs/AboutUs";
import Account from "./pages/Account/Account";
import Login from "./pages/Account/Login";
import AskedQuestion from "./pages/AskedQuestion/AskedQuestion";
import Complaints from "./pages/Complaints/Complaints";
import ContactUs from "./pages/ContactUs/ContactUs";
import FavProduct from "./pages/FavProduct/FavProduct";
import Home from "./pages/MyHome/Home";
import OneProduct from "./pages/OneProduct/OneProduct";
import OrderTracking from "./pages/OrderTracking/OrderTracking";
import ShoppingBag from "./pages/ShoppingBag/ShoppingBag";
import UserInformation from "./pages/UserInformation/UserInformation";

export let router = [
  { path: "/bazrafkan-store/", element: <Home /> },
  { path: "/bazrafkan-store/Account", element: <Account /> },
  { path: "/bazrafkan-store/Login", element: <Login /> },
  { path: "/bazrafkan-store/UserInformation", element: <UserInformation /> },
  { path: "/bazrafkan-store/ContactUs", element: <ContactUs /> },
  { path: "/bazrafkan-store/AboutUs", element: <AboutUs /> },
  { path: "/bazrafkan-store/OrderTracking", element: <OrderTracking /> },
  { path: "/bazrafkan-store/Complaints", element: <Complaints /> },
  { path: "/bazrafkan-store/AskedQuestion", element: <AskedQuestion /> },
  { path: "/bazrafkan-store/OneProduct/:id", element: <OneProduct /> },
  { path: "/bazrafkan-store/ShoppingBag", element: <ShoppingBag /> },
  { path: "/bazrafkan-store/FavProduct", element: <FavProduct /> },
];
