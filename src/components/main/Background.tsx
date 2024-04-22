/** @format */
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";

export default function Background() {
   const changeTheme = useSelector(
     (state: RootStateType) => state.theme.isThemeChanged
   );

    const preferredTheme = changeTheme ? "bg-white" : "bg-toast";
  return (
    <div className={`${preferredTheme} fixed left-0 top-0 w-full h-full -z-40 transition-all duration-300`}></div>
  );
}
