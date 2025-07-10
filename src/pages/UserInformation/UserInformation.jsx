import { memo } from "react";
import { useIsLogin } from "../../context/loginContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function UserInformation() {
  const { isLogin } = useIsLogin();
  return (
    <>
      <Header>حساب کاربری</Header>
      <div className="flex gap-2 pl-3 pr-5 py-3">
        <ul className=" flex flex-col gap-3">
          <li>اسم</li>
          <li> فامیل</li>
          <li>ایمیل</li>
        </ul>
        <div className="flex flex-col gap-3 w-[85%]">
          <input value={isLogin.given_name} className="px-2 bg-gray-700 rounded-sm w-auto"></input>
          <input value={isLogin.family_name} className="px-2 bg-gray-700 rounded-sm w-auto"></input>
          <input value={isLogin.email} className="px-2 bg-gray-700 rounded-sm w-auto"></input>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default memo(UserInformation);
