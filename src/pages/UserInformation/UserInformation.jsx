import { memo } from "react";
import { useIsLogin } from "../../context/loginContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function UserInformation() {
  const { isLogin, logout } = useIsLogin();
  const navigate = useNavigate();
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
          <input
            value={isLogin.given_name}
            className="px-2 bg-gray-700 rounded-sm w-auto"
          ></input>
          <input
            value={isLogin.family_name}
            className="px-2 bg-gray-700 rounded-sm w-auto"
          ></input>
          <input
            value={isLogin.email}
            dir="ltr"
            className="px-2 bg-gray-700 rounded-sm w-auto"
          ></input>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => {
            logout(navigate);
          }}
          className="bg-red-900 text-white rounded-sm p-1 px-2 mt-2"
          type="button"
        >
          خروج از حساب کاربری
        </button>
      </div>
      <Footer />
    </>
  );
}
export default memo(UserInformation);
