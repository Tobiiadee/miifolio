/** @format */

// import { useState } from "react";

// import { useState } from "react";

type ThemeType = {
  themeElement: React.ReactElement[];
  closeThemeSelect: () => void;
};

export default function Theme_Select({
  themeElement,
  closeThemeSelect,
}: ThemeType) {
  //    const [themeSelected, setThemeSelected] = useState(true);

  //    const themeSelectedHandler = () => setThemeSelected(false)

  return (
    <section
      className='absolute rounded-md bg-white shadow-md right-4 laptop:right-24 -bottom-28 overflow-hidden'
      onClick={closeThemeSelect}>
      <menu className='flex flex-col gap-1'>{themeElement}</menu>
    </section>
  );
}
