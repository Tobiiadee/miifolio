/** @format */

import imgP from "../../../assets/Images/TPF.jpg";

export default function UserDetails() {
  return (
    <main className='laptop:border-r border-dotted laptop:pr-2 flex flex-col laptop:w-80 py-2'>
      <h2 className='font-semibold text-center'>Profile</h2>
      <section>
        <div className='mt-4 flex flex-col items-center'>
          <div className='w-32 h-32 rounded-full shadow-md overflow-hidden'>
            <img src={imgP} alt='' />
          </div>
          <div className='flex flex-col gap-2 mt-4 cursor-pointer'>
            <input
              type='file'
              title='profile picture'
              id='profile-picture'
              accept='image/png, image/jpeg'
              className='w-[97px] bg-text'
            />
          </div>
        </div>
      </section>

      <section className='mt-24 flex flex-col items-center'>
        <h2 className='font-semibold mb-4'>Biography</h2>
        <p className='text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolore accusamus error nihil voluptas consectetur numquam? Ullam
          labore veritatis voluptatum.
        </p>
      </section>
    </main>
  );
}
