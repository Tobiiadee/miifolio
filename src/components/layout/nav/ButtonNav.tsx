/** @format */

import { useSelector } from "react-redux";
import { RootStateType } from "../../../store";

export default function ButtonNav() {

   const changeTheme = useSelector(
     (state: RootStateType) => state.theme.isThemeChanged
   );

   const preferredTheme = changeTheme ? "bg-white" : "bg-tip";

  return (
    <section className='flex justify-between items-center mt-4 laptop:mt-0'>
      <div className='flex gap-2'>
        <button
          type='button'
          className={`${preferredTheme} hover:scale-125 transition duration-300`}>
          {""}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5 text-text'>
            <path
              fillRule='evenodd'
              d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <button
          type='button'
          className={`${preferredTheme} hover:scale-125 transition duration-300`}>
          {""}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5 text-text'>
            <path
              fillRule='evenodd'
              d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      <div className='flex gap-4'>
        <button
          type='submit'
          className='flex items-center rounded bg-hover gap-1 py-1 px-2 laptop:py-2 laptop:px-6 hover:scale-110 transition duration-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-5 text-text'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
            />
          </svg>

          <span className='text-text text-sm'>Send Email</span>
        </button>

        <button
          type='submit'
          className='flex items-center rounded bg-text gap-1 py-1 px-3 laptop:py-2 laptop:px-8 animate-[pulsing_1s_ease-in-out_infinite] transition duration-300 hover:animate-none'>
          <span className='text-white text-sm'>Actions</span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-7 h-7 text-white'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
