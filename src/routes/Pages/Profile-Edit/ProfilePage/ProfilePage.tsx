import { useSelector } from "react-redux";
import { RootStateType } from "../../../../store";

import UserDetails from "../UserDetails";
import UserInputs from "./userInputs/UserInputs";

export default function ProfilePage() {
const changeTheme = useSelector(
  (state: RootStateType) => state.theme.isThemeChanged
);

// const preferredTheme = changeTheme ? "bg-white" : "bg-toast";
const preferredText = changeTheme ? "text-toast" : "text-white";

  return (
    <section className={`flex flex-col laptop:grid  laptop:grid-cols-3 gap-6 h-screen ${preferredText}`}>
      <UserDetails />
      <UserInputs />
    </section>
  );
}
