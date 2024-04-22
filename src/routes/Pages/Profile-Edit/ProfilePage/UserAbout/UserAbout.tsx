/** @format */

import { useSelector } from "react-redux";
import { RootStateType } from "../../../../../store";
import { useRef } from "react";

export default function UserAbout() {
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );

  // let biograpghy;

  // if (bioRef.current) {
  //   biograpghy = bioRef.current.value
  // }

  // console.log(biograpghy);

  return (
    <section className='mt-10'>
      <h2 className='font-semibold mb-4'>About Me</h2>
      <div className='flex flex-col gap-2'>
        <label htmlFor='bio' className='font-semibold text-sm'>
          BIOGRAPHY
        </label>
        <textarea
          name='biograpghy'
          id='bio'
          ref={bioRef}
          className={` ${
            changeTheme ? "border-text" : "border-white"
          } border bg-offwhite px-3 text-sm py-2 rounded-md outline-none w-[350px] laptop:w-[600px] laptop:min-w-[600px] h-[150px] min-h-[150px] text-black placeholder:text-sm`}></textarea>
      </div>
    </section>
  );
}
