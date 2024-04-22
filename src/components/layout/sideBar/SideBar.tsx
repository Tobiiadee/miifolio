/** @format */
import { useDispatch, useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";
import { themeActions } from "../../../store/slices/ThemeSlice";
import { RootStateType } from "../../../store";

import DarkMode from "../multi-components/DarkMode";
import LightMode from "../multi-components/LightMode";
import imgP from "../../../assets/Images/TPF.jpg";

//width: 48

export default function SideBar() {
  const dispatch = useDispatch();

  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );

  // const isPhoneNavActive = useSelector((state: RootStateType) => state.phoneNav.activeNav)

  //Authentication
  const { userData } = useSelector((state: RootStateType) => state.auth);

  // User Preffered theme
  const preferredTheme = changeTheme ? "bg-white" : "bg-black";

  const onChangeThemeHandler = () => {
    dispatch(themeActions.changeTheme());
  };

  const username = userData.username;

  return (
    <nav
      className={`hidden laptop:flex py-14 tablet:py-6 fixed left-0 top-0 ${preferredTheme} w-20 h-full tablet:w-20 tablet:h-full hover:w-40 transition-all delay-200 duration-300 shadow-md rounded-r z-50 overflow-hidden`}>
      <section className='flex flex-col  gap-24'>
        <div
          onClick={onChangeThemeHandler}
          className='border border-hover border-dotted'>
          {changeTheme ? <DarkMode /> : <LightMode />}
        </div>
        <main className='flex flex-col gap-16 tablet:gap-4'>
          <NavLink
            to='/'
            className='flex gap-6 items-center px-8 py-2 hover:bg-hover hover:text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6 text-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>
            <h4 className='text-text text-xl tablet:text-sm'>Home</h4>
          </NavLink>

          <NavLink
            to='/profile'
            className='flex gap-6 items-center px-8 py-2 hover:bg-hover hover:text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
              />
            </svg>

            <h4 className='text-text text-xl tablet:text-sm'>Profile</h4>
          </NavLink>

          <NavLink
            to='/services'
            className='flex gap-6 items-center px-8 py-2 hover:bg-hover hover:text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z'
              />
            </svg>

            <h4 className='text-text text-xl tablet:text-sm'>Services</h4>
          </NavLink>

          <NavLink
            to='/About'
            className='flex gap-6 items-center px-8 py-2 hover:bg-hover hover:text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
              />
            </svg>

            <h4 className='text-text text-xl tablet:text-sm w-16'>About Us</h4>
          </NavLink>
          <NavLink
            to='/faq'
            className='flex gap-6 items-center px-8 py-2 hover:bg-hover hover:text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
              />
            </svg>

            <h4 className='text-text text-xl tablet:text-sm w-16'>FAQ</h4>
          </NavLink>
        </main>
        <div>
          <Link
            to='/edit-profile'
            className='flex gap-6 items-center px-8 py-2'>
            <div className='w-8 h-8 overflow-hidden rounded-full'>
              <img src={imgP} alt='' />
            </div>
            <h4 className='text-text text-sm'>{username}</h4>
          </Link>
        </div>
      </section>
    </nav>
  );
}
