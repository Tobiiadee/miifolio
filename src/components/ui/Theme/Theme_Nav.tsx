/** @format */

import { useState } from "react";
import Theme_Select from "./Theme_Select";
import { themeActions } from "../../../store/slices/ThemeSlice";
import DarkMode from "../../layout/multi-components/DarkMode";
import LightMode from "../../layout/multi-components/LightMode";
import System from "../../layout/multi-components/System";
import { useDispatch } from "react-redux";

export default function Theme_Nav() {

  const dispatch = useDispatch();
  // Theme selection
  const [theme, setTheme] = useState(false);
  const setThemeHandler = () => setTheme((prev) => !prev);

  const [selectedTheme, setSelectedTheme] = useState("");

  //Themes
  const selectedThemes = ["Light", "Dark", "System"];
  const themes = selectedThemes.map((theme) => (
    <button
      type='button'
      onClick={() => {
        setSelectedTheme(theme)
        dispatch(themeActions.changeTheme())
      }}
      className='px-10 py-1 text-sm border-b border-dotted hover:bg-hover'
      key={theme}>
      {theme}
    </button>
  ));

  let themeSelected;

  switch (selectedTheme) {
    case "Dark":
      themeSelected = <DarkMode/>
      break;
    case "System":
      themeSelected = <System/>
      break;

    case "Light":
      themeSelected = <LightMode/>
      break;

    default:
      themeSelected = <LightMode/>

      break;
  }

  return (
    <>
      <button
        type='button'
        onClick={setThemeHandler}
        className='flex gap-2 items-center ml-14'>
        <div>{themeSelected}</div>
      </button>
      {theme && <Theme_Select closeThemeSelect={setThemeHandler} themeElement={themes} />}
    </>
  );
}
