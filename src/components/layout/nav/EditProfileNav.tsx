/** @format */

import { useSelector } from "react-redux";
import { RootStateType } from "../../../store";
import { NavLink } from "react-router-dom";

export default function EditProfileNav() {
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );

  const preferredTheme = changeTheme ? "bg-white" : "bg-toast";
  const preferredText = changeTheme ? "text-toast" : "text-white";

  return (
    <nav className='grid grid-cols-3 items-center mb-4 mt-8 laptop:mt-0'>
      <div className=''>
        <h2
          className={`font-semibold text-sm w-max px-2 py-1 ${preferredText} ${preferredTheme}`}>
          Edit Your Profile
        </h2>
      </div>

      <menu className={`flex gap-8 items-center ${preferredText} ml-4`} id="profile-edit">
        <NavLink
          to='/edit-profile/profile-page'
          className='py-2 text-sm text-text hover:border-text hover:border-b'>
          Profile
        </NavLink>
        <NavLink
          to='/edit-profile/settings'
          className='py-2 text-sm text-text hover:border-text hover:border-b'>
          Settings
        </NavLink>
        <NavLink
          to='/edit-profile/notification'
          className='py-2 text-sm text-text hover:border-text hover:border-b'>
          Notification
        </NavLink>
      </menu>
    </nav>
  );
}
