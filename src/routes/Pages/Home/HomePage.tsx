/** @format */
import { useSelector } from "react-redux";
import { RootStateType } from "../../../store";

import { Link } from "react-router-dom";

import Wrapper from "../../../components/ui/Wrapper/Wrapper";
import img1 from "../../../assets/Images/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import img2 from "../../../assets/Images/albert-dera-ILip77SbmOE-unsplash.jpg";

export default function HomePage() {
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );

  //Image Max width = 512px

  const preferredText = changeTheme ? "text-toast" : "text-white";
  return (
    <>
      <Wrapper>
        <section className='grid grid-rows-2 laptop:flex laptop:flex-row laptop:gap-6 mt-14 laptop:pr-20'>
          <main className='h-max'>
            <div className='flex flex-col'>
              <div
                className={`uppercase font-semibold text-3xl tablet:text-5xl line-height  leading-10 ${preferredText}`}>
                Empowering Your Vision with Design
                <span className='ml-1 uppercase font-semibold text-text'>
                  Excellence
                </span>
              </div>

              <div
                className={`border-b ${
                  changeTheme ? "border-text" : "border-white"
                } border-dotted mt-6 w-full laptop:w-4/5`}></div>
            </div>

            <div className='flex justify-between text-xs laptop:text-sm mt-4 w-full laptop:w-4/5'>
              <p className='text-text'>OUR SOLUTIONS</p>
              <p className={`${preferredText} w-48`}>
                WE PROVIDE A FULL INNOVATIVE APPROACH
              </p>
            </div>
          </main>

          <main className='rounded-md shadow -mt-20 laptop:mt-0 laptop:w-4/5 h-max relative z-10 overflow-hidden'>
            <div className='flex w-full h-full overflow max-w-full max-h-full'>
              <img src={img1} alt='' className='h-[400px] min-w-full' />
              <img src={img2} alt='' className='h-[400px] min-w-full' />
            </div>

            <div className='absolute top-2 left-2 w-20 text-white z-50 '>
              INSPIRE BY DESIGN
            </div>
            <div className='absolute top-2 right-2 flex gap-1 items-center'>
              <div className='w-2 h-2 rounded-full bg-white'></div>
              <div className='w-2 h-2 rounded-full border-white border'></div>
            </div>
            <div className=''>
              <Link
                to='/projects'
                className='rounded-3xl w-72 flex justify-between items-center px-3 py-1 border-text border absolute z-50 bottom-8 left-8 hover:scale-105 transition duration-300'>
                <h2 className='uppercase text-sm text-white'>View projects</h2>
                <div className='rounded-full w-8 h-8 flex items-center justify-center bg-toast border'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='#ECF3F9'
                    className='w-5 h-5'>
                    <path
                      fillRule='evenodd'
                      d='M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z'
                      clipRule='evenodd'
                    />
                    <path
                      fillRule='evenodd'
                      d='M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </main>
        </section>

        <main className='mt-10 flex flex-col  gap-8 laptop:flex-row laptop:justify-between laptop:pr-20 pb-10'>
          <section>
            <div className='self-start flex items-center gap-1 w-max cursor-pointer hover:scale-105 transition duration-300'>
              <div className="rounded-full w-8 h-8 flex items-center justify-center bg-toast border'">
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='#ECF3F9'
                  className='w-4 h-4'>
                  <path d='M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z' />
                </svg>
              </div>
              <p className={`text-sm uppercase ${preferredText}`}>
                How it's done
              </p>
            </div>

            <div className='flex flex-col gap-2 mt-4'>
              <span
                className={`border border-dotted ${
                  changeTheme
                    ? "border-toast text-toast"
                    : "border-white text-white"
                } px-2 py-1 w-max rounded-2xl uppercase`}>
                web analytics
              </span>
              <span
                className={`border border-dotted ${
                  changeTheme
                    ? "border-toast text-toast"
                    : "border-white text-white"
                } px-2 py-1 w-max rounded-2xl uppercase`}>
                email marketing
              </span>
              <span
                className={`border border-dotted ${
                  changeTheme
                    ? "border-toast text-toast"
                    : "border-white text-white"
                } px-2 py-1 w-max rounded-2xl uppercase`}>
                seo 2.0
              </span>
            </div>
          </section>

          <section className='self-center flex flex-col tablet:grid tablet:grid-cols-2 laptop:flex laptop:flex-row laptop:w-full laptop:justify-end gap-6 laptop:gap-2'>
            <div className='rounded shadow w-72 h-72 laptop:w-40 laptop:h-40 bg-choco relative laptop:hover:scale-105 transition duration-300'>
              <h2 className='text-xl laptop:text-xs font-semibold absolute left-3 top-3 text-toast uppercase'>
                unique bussiness solutions
              </h2>
              <div className='absolute left-3 bottom-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-9 h-9'>
                  <path
                    fillRule='evenodd'
                    d='M14.5 10a4.5 4.5 0 0 0 4.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 0 1-.493.11 3.01 3.01 0 0 1-1.618-1.616.455.455 0 0 1 .11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 0 0-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 1 0 3.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01ZM5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
                    clipRule='evenodd'
                  />
                  <path d='M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 0 1-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012ZM6 4.586l2.33 2.33a.452.452 0 0 1-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 0 1-.447-.276l-1.7-3.402a.5.5 0 0 1 .093-.577l.49-.49a.5.5 0 0 1 .577-.094l3.402 1.7A.5.5 0 0 1 6 3.31v1.277Z' />
                </svg>
              </div>
            </div>
            <div className='rounded shadow w-72 h-72 laptop:w-40 laptop:h-40 bg-ghostwhite relative laptop:hover:scale-105 transition duration-300'>
              <div className='absolute top-5 right-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-semibold absolute left-3 bottom-3 text-toast uppercase'>
                our case studies
              </h2>
            </div>
            <div className='rounded shadow w-72 h-72 laptop:w-40 laptop:h-40 bg-golden relative laptop:hover:scale-105 transition duration-300'>
              <h2 className='text-xl laptop:text-xs font-semibold absolute left-3 top-3 text-toast uppercase w-10'>
                successfull projects
              </h2>
              <div className='absolute left-3 bottom-3'>
                <h2 className='text-3xl font-bold'>
                  80 <span className='absolute bottom-3'>+</span>
                </h2>
              </div>
            </div>
          </section>
        </main>
      </Wrapper>
    </>
  );
}
