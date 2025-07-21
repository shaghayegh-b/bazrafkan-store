import { memo } from "react";
import { useIsLogin } from "../../context/loginContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate, Link } from "react-router-dom";

function UserInformation() {
  const { isLogin, logout } = useIsLogin();
  const navigate = useNavigate();
  return (
    <>
      <Header>حساب کاربری</Header>
      <div className="flex gap-2 ml-2 mr-4 my-2 p-3 bg-[#4eabfb38]">
        <ul className=" flex flex-col gap-3">
          <li>اسم</li>
          <li> فامیل</li>
          <li>ایمیل</li>
        </ul>
        <div className="flex flex-col gap-3 w-[85%]">
          <input
            value={isLogin.given_name}
            className="px-2  bg-[#fff] text-left rounded-sm w-auto"
          ></input>
          <input
            value={isLogin.family_name}
            className="px-2   bg-[#fff] text-left rounded-sm w-auto"
          ></input>
          <input
            value={isLogin.email}
            className="px-2  bg-[#fff] text-left rounded-sm w-auto"
          ></input>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <Link
          to="/bazrafkan-store/"
          onClick={() => {
            logout(navigate);
          }}
          className="bg-[#81c8ff] rounded-sm p-1 px-2 mt-2"
          type="button"
        >
          خروج از حساب کاربری
        </Link>
      </div>
      <Footer />
    </>
  );
}
export default memo(UserInformation);
