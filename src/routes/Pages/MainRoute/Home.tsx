/** @format */

import { Outlet } from "react-router";
import SideBar from "../../../components/layout/sideBar/SideBar";
import Background from "../../../components/main/Background";
import HomeNav from "../../../components/layout/nav/HomeNav";
// import Toast from "../../../components/ui/Toast/Toast";
import { useDispatch, useSelector } from "react-redux";
import { PhoneNavActions } from "../../../store/slices/PhoneNavSlice";
import { RootStateType } from "../../../store";
import SideBarMobile from "../../../components/layout/sideBar/SideBarMobile";
// import Toast from "../../components/ui/Toast/Toast";

export default function Home() {
  const dispatch = useDispatch();

  //Mobile Navigation
  const mobileNavhandler = () => {
    dispatch(PhoneNavActions.onActiveNav());
  };
  const onActiveNav = useSelector(
    (state: RootStateType) => state.phoneNav.activeNav
  );

  //Preffered Theme
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );
  const preferredText = changeTheme ? "text-toast" : "text-white";

  return (
    <>
      <button
        type='button'
        onClick={mobileNavhandler}
        className='fixed top-10 laptop:hidden ml-2 active:border border-hover rounded-md z-40'>
        {""}
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`w-7 h-7 ${preferredText}`}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
            />
          </svg>
        </div>
      </button>
      <HomeNav />
      <SideBar />
      {onActiveNav && <SideBarMobile />}
      <Background />
      {/* <Toast message='This is a test notification' onToast /> */}
      <Outlet />
    </>
  );
}
