import { memo } from "react";
import { useIsLogin } from "../../context/loginContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function UserInformation() {
  const { isLogin } = useIsLogin();
  return (
    <>
      <Header>حساب کاربری</Header>
      <div className="flex">
        <ul className="p-2 pt-3 pb-5 flex flex-col gap-2">
          <li>اسم</li>
          <li> فامیل</li>
          <li>ایمیل</li>
        </ul>
        <div className="p-2 pt-3 pb-5 flex flex-col gap-2 w-[85%]">
          <input placeholder={isLogin.given_name} className="px-2 bg-gray-700 rounded-sm w-auto"></input>
          <input placeholder={isLogin.family_name} className="px-2 bg-gray-700 rounded-sm w-auto"></input>
          <input placeholder={isLogin.email} className="px-2 bg-gray-700 rounded-sm w-auto"></input>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default memo(UserInformation);
