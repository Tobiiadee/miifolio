/** @format */

import { useSelector } from "react-redux";

import { RootStateType } from "../../../store";

import ActionRoutes from "../../../routes/Pages/ActionRoutes/ActionRoutes";
import ActionNav from "../nav/ActionNav";

export default function Actions() {
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );

  const preferredTheme = changeTheme ? "bg-white" : "bg-tip";

  return (
    <section className={`${preferredTheme} shadow-md rounded h-6/6 col-span-2`}>
      <ActionNav />
      <div className='px-6 py-4'>
        <ActionRoutes />
      </div>
    </section>
  );
}
