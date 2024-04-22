/** @format */

import { useSelector } from "react-redux";
import { RootStateType } from "../../../../../store";

export default function UserExternslLinks() {
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );

  return (
    <section className='mt-10'>
      <h2 className='font-semibold mb-4'>External Links</h2>
      <main>
        <div className='flex flex-col gap-1'>
          <label htmlFor='github-url' className='text-sm font-semibold'>
            Github url:
          </label>
          <input
            type='text'
            id='github-url'
            className={` ${
              changeTheme ? "border-text" : "border-white"
            } border bg-offwhite px-3 text-sm py-2 rounded-md outline-none laptop:w-[600px] text-black placeholder:text-sm`}
          />
        </div>

        <div className='flex flex-col gap-1 mt-4'>
          <label htmlFor='twitter-url' className='text-sm font-semibold'>
            Twitter url:
          </label>
          <input
            type='text'
            id='twitter-url'
            className={` ${
              changeTheme ? "border-text" : "border-white"
            } border bg-offwhite px-3 text-sm py-2 rounded-md outline-none laptop:w-[600px] text-black placeholder:text-sm`}
          />
        </div>

        <div className='flex flex-col gap-1 mt-4'>
          <label htmlFor='linkedin-url' className='text-sm font-semibold'>
            LinkedIn url:
          </label>
          <input
            type='text'
            id='linkedin-url'
            className={` ${
              changeTheme ? "border-text" : "border-white"
            } border bg-offwhite px-3 text-sm py-2 rounded-md outline-none laptop:w-[600px] text-black placeholder:text-sm`}
          />
        </div>

        <div className='flex flex-col gap-1 mt-4'>
          <label htmlFor='anyother-url' className='text-sm font-semibold'>
            Anyother url:
          </label>
          <input
            type='text'
            id='anyother-url'
            className={` ${
              changeTheme ? "border-text" : "border-white"
            } border bg-offwhite px-3 text-sm py-2 rounded-md outline-none laptop:w-[600px] text-black placeholder:text-sm`}
          />
        </div>
      </main>
    </section>
  );
}
