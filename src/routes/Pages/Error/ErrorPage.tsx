
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className='bg-bgcolor flex flex-col justify-center items-center w-full h-screen'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.2}
          stroke='#028c6a'
          className='w-28 h-28'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
          />
        </svg>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-center text-3xl text-text font-bold'>404 Error</h1>
        <p className='text-text mt-1 text-sm'>Sorry, page not found!</p>
      </div>
      <div className='mt-4'>
        <NavLink
          to='/'
          className='border-2 text-text text-sm bg-hover border-text rounded-md px-3 py-2 font-semibold'>
          Back to homepage
        </NavLink>
      </div>
    </div>
  );
}
