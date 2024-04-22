/** @format */

import { useSelector } from "react-redux";
import { RootStateType } from "../../../store";

import { Tooltip } from "react-tooltip";

export default function Widget() {
   const changeTheme = useSelector(
     (state: RootStateType) => state.theme.isThemeChanged
   );

   const preferredTheme = changeTheme ? "bg-bgcolor" : "bg-tip";
   const preferredText = changeTheme ? "text-toast" : "text-white";

  return (
    <section className=' grid tablet:grid-cols-3 gap-8 mt-8 pb-10'>
      <main
        className={`relative shadow-md rounded-md w-85 px-6 py-4  ${preferredTheme}`}>
        <section className='flex items-center gap-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='40'
            height='40'
            viewBox='0 0 48 48'>
            <path
              fill='#03a9f4'
              d='M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z'></path>
            <circle cx='33.5' cy='33.5' r='11.5' fill='#03a9f4'></circle>
            <circle cx='14.5' cy='14.5' r='11.5' fill='#03a9f4'></circle>
            <path
              fill='#fff'
              d='M24.6,36C18,36,15,32.7,15,30.2c0-1.3,0.9-2.2,2.2-2.2c2.8,0,2.1,4.1,7.4,4.1c2.7,0,4.2-1.5,4.2-3	c0-0.9-0.4-1.9-2.2-2.4l-5.9-1.5c-4.7-1.2-5.6-3.8-5.6-6.3c0-5.1,4.7-6.9,9.1-6.9c4.1,0,8.8,2.2,8.8,5.2c0,1.3-1,2.1-2.3,2.1	c-2.4,0-2-3.4-6.8-3.4c-2.4,0-3.8,1.1-3.8,2.7c0,1.6,1.9,2.1,3.6,2.5l4.4,1c4.8,1.1,5.9,3.9,5.9,6.6C33.9,32.9,30.9,36,24.6,36z'></path>
          </svg>
          <h2 className={`text-sm ${preferredText}`}>Skype</h2>
        </section>

        <section className='flex justify-between items-center mt-4'>
          <div>
            {" "}
            <h2 className={`text-sm font-semibold ${preferredText}`}>
              {"Ogunbayo Oluwatobi"}
            </h2>
            <a className={`text-sm text-text cursor-pointer`}>linkhtnl.com</a>
          </div>

          <button
            type='submit'
            className='w-10 h-10 rounded-full bg-hover flex items-center justify-center hover:scale-125 transition duration-300'>
            {""}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#028c6a'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
              />
            </svg>
          </button>
        </section>
        <button
          type='submit'
          className={`absolute top-2 right-3`}
          data-tooltip-id='my-tooltip'
          data-tooltip-content='more details'>
          {""}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className={`w-7 h-7 ${changeTheme ? "text-tip" : "text-white"} `}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
            />
          </svg>
        </button>
      </main>

      <main
        className={`relative shadow-md rounded-md w-85 px-6 py-4  ${preferredTheme}`}>
        <section className='flex items-center gap-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='40'
            height='40'
            viewBox='0 0 48 48'>
            <path
              fill='#1565C0'
              d='M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z'></path>
            <path
              fill='#039BE5'
              d='M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z'></path>
            <path
              fill='#283593'
              d='M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z'></path>
          </svg>
          <h2 className={`text-sm ${preferredText}`}>Paypal</h2>
        </section>

        <section className='flex justify-between items-center mt-4'>
          <a className='text-sm text-text'>info.ogunbayo.com</a>
          <button
            type='submit'
            className='w-10 h-10 rounded-full bg-hover flex items-center justify-center hover:scale-125 transition duration-300'>
            {""}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className={`w-6 h-6 text-text `}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          </button>
        </section>

        <button
          type='button'
          className='absolute top-2 right-3'
          data-tooltip-id='tooltip'
          data-tooltip-content='more details'>
          {""}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className={`w-7 h-7 text-tip ${
              changeTheme ? "text-tip" : "text-white"
            }`}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
            />
          </svg>
        </button>
      </main>

      <button
        type='button'
        className='shadow-md rounded-md w-85 px-8 py-4 bg-hover flex justify-center items-center hover:scale-110 transition duration-300'>
        <section>
          <div>
            <div className='ml-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='30'
                height='30'
                viewBox='0 0 64 64'>
                <path d='M 8 7 A 1.0001 1.0001 0 0 0 7 8 L 7 17 A 1.0001 1.0001 0 0 0 8 18 L 17 18 A 1.0001 1.0001 0 0 0 18 17 L 18 8 A 1.0001 1.0001 0 0 0 17 7 L 8 7 z M 21 7 A 1.0001 1.0001 0 0 0 20 8 L 20 17 A 1.0001 1.0001 0 0 0 21 18 L 30 18 A 1.0001 1.0001 0 0 0 31 17 L 31 8 A 1.0001 1.0001 0 0 0 30 7 L 21 7 z M 34 7 A 1.0001 1.0001 0 0 0 33 8 L 33 17 L 33 21 L 33 30 A 1.0001 1.0001 0 0 0 34 31 L 43 31 L 56 31 A 1.0001 1.0001 0 0 0 57 30 L 57 17 L 57 8 A 1.0001 1.0001 0 0 0 56 7 L 47 7 L 43 7 L 34 7 z M 9 9 L 16 9 L 16 16 L 9 16 L 9 9 z M 22 9 L 29 9 L 29 16 L 22 16 L 22 9 z M 35 9 L 43 9 L 47 9 L 55 9 L 55 17 L 55 29 L 43 29 L 35 29 L 35 21 L 35 17 L 35 9 z M 39 11.007812 C 38.448 11.007812 38 11.455813 38 12.007812 L 38 14.007812 C 38 14.559812 38.448 15.007812 39 15.007812 C 39.552 15.007812 40 14.559812 40 14.007812 L 40 12.007812 C 40 11.455813 39.552 11.007812 39 11.007812 z M 43 11.007812 C 42.448 11.007812 42 11.455813 42 12.007812 L 42 14.007812 C 42 14.559812 42.448 15.007812 43 15.007812 C 43.552 15.007812 44 14.559812 44 14.007812 L 44 12.007812 C 44 11.455813 43.552 11.007812 43 11.007812 z M 47 11.007812 C 46.448 11.007812 46 11.455813 46 12.007812 L 46 14.007812 C 46 14.559812 46.448 15.007812 47 15.007812 C 47.552 15.007812 48 14.559812 48 14.007812 L 48 12.007812 C 48 11.455813 47.552 11.007812 47 11.007812 z M 51 11.007812 C 50.448 11.007812 50 11.455813 50 12.007812 L 50 14.007812 C 50 14.559812 50.448 15.007812 51 15.007812 C 51.552 15.007812 52 14.559812 52 14.007812 L 52 12.007812 C 52 11.455813 51.552 11.007812 51 11.007812 z M 45.007812 17 A 1.0001 1.0001 0 0 0 44.167969 17.445312 L 42.658203 19.710938 L 41.447266 19.105469 A 1.0001 1.0001 0 0 0 40.105469 19.552734 L 37.105469 25.552734 A 1.0001 1.0001 0 0 0 38 27 L 52 27 A 1.0001 1.0001 0 0 0 52.894531 25.552734 L 49.894531 19.552734 A 1.0001 1.0001 0 0 0 48.292969 19.292969 L 47.273438 20.3125 L 45.894531 17.552734 A 1.0001 1.0001 0 0 0 45.007812 17 z M 44.876953 19.988281 L 46.105469 22.447266 A 1.0001 1.0001 0 0 0 47.707031 22.707031 L 48.726562 21.6875 L 50.382812 25 L 39.617188 25 L 41.447266 21.341797 L 42.552734 21.894531 A 1.0001 1.0001 0 0 0 43.832031 21.554688 L 44.876953 19.988281 z M 8 20 A 1.0001 1.0001 0 0 0 7 21 L 7 30 A 1.0001 1.0001 0 0 0 8 31 L 17 31 A 1.0001 1.0001 0 0 0 18 30 L 18 21 A 1.0001 1.0001 0 0 0 17 20 L 8 20 z M 21 20 A 1.0001 1.0001 0 0 0 20 21 L 20 30 A 1.0001 1.0001 0 0 0 21 31 L 30 31 A 1.0001 1.0001 0 0 0 31 30 L 31 21 A 1.0001 1.0001 0 0 0 30 20 L 21 20 z M 9 22 L 16 22 L 16 29 L 9 29 L 9 22 z M 22 22 L 29 22 L 29 29 L 22 29 L 22 22 z M 8 33 A 1.0001 1.0001 0 0 0 7 34 L 7 43 A 1.0001 1.0001 0 0 0 8 44 L 17 44 A 1.0001 1.0001 0 0 0 18 43 L 18 34 A 1.0001 1.0001 0 0 0 17 33 L 8 33 z M 21 33 A 1.0001 1.0001 0 0 0 20 34 L 20 43 A 1.0001 1.0001 0 0 0 21 44 L 30 44 A 1.0001 1.0001 0 0 0 31 43 L 31 34 A 1.0001 1.0001 0 0 0 30 33 L 21 33 z M 34 33 A 1.0001 1.0001 0 0 0 33 34 L 33 43 A 1.0001 1.0001 0 0 0 34 44 L 43 44 A 1.0001 1.0001 0 0 0 44 43 L 44 34 A 1.0001 1.0001 0 0 0 43 33 L 34 33 z M 47 33 A 1.0001 1.0001 0 0 0 46 34 L 46 43 A 1.0001 1.0001 0 0 0 47 44 L 56 44 A 1.0001 1.0001 0 0 0 57 43 L 57 34 A 1.0001 1.0001 0 0 0 56 33 L 47 33 z M 9 35 L 16 35 L 16 42 L 9 42 L 9 35 z M 22 35 L 29 35 L 29 42 L 22 42 L 22 35 z M 35 35 L 42 35 L 42 42 L 35 42 L 35 35 z M 48 35 L 55 35 L 55 42 L 48 42 L 48 35 z M 8 46 A 1.0001 1.0001 0 0 0 7 47 L 7 56 A 1.0001 1.0001 0 0 0 8 57 L 17 57 A 1.0001 1.0001 0 0 0 18 56 L 18 47 A 1.0001 1.0001 0 0 0 17 46 L 8 46 z M 21 46 A 1.0001 1.0001 0 0 0 20 47 L 20 56 A 1.0001 1.0001 0 0 0 21 57 L 30 57 A 1.0001 1.0001 0 0 0 31 56 L 31 47 A 1.0001 1.0001 0 0 0 30 46 L 21 46 z M 34 46 A 1.0001 1.0001 0 0 0 33 47 L 33 56 A 1.0001 1.0001 0 0 0 34 57 L 43 57 A 1.0001 1.0001 0 0 0 44 56 L 44 47 A 1.0001 1.0001 0 0 0 43 46 L 34 46 z M 47 46 A 1.0001 1.0001 0 0 0 46 47 L 46 56 A 1.0001 1.0001 0 0 0 47 57 L 56 57 A 1.0001 1.0001 0 0 0 57 56 L 57 47 A 1.0001 1.0001 0 0 0 56 46 L 47 46 z M 9 48 L 16 48 L 16 55 L 9 55 L 9 48 z M 22 48 L 29 48 L 29 55 L 22 55 L 22 48 z M 35 48 L 42 48 L 42 55 L 35 55 L 35 48 z M 48 48 L 55 48 L 55 55 L 48 55 L 48 48 z'></path>
              </svg>
            </div>

            <h2 className='text-sm text-text text-center font-semibold'>
              Add Widget
            </h2>
          </div>
        </section>
      </button>
      <Tooltip id='tooltip' />
    </section>
  );
}
