/** @format */

import UserAbout from "../UserAbout/UserAbout";
import UserExternslLinks from "../UserExternalLinks/UserExternslLinks";
import UserInputForm from "./UserInputForm";

export default function UserInputs() {
  return (
    <section className=' col-span-2 px-2 py-2'>
      <div className='flex justify-between'>
        <h2 className='font-semibold'>Basic Information</h2>
        <div className='flex gap-2'>
          <button
            type='button'
            className='flex items-center rounded text-sm text-text bg-hover gap-1 py-2 px-6 hover:scale-110 transition duration-300'>
            Cancel
          </button>
        </div>
      </div>
      <UserInputForm />
      <UserAbout />
      <UserExternslLinks />
      <div className="mt-6 flex justify-end pb-10">
        <button
          type='button'
          className='flex items-center rounded text-sm text-white bg-text gap-1 py-2 px-8 transition duration-300 hover:scale-110'>
          Save
        </button>
      </div>
    </section>
  );
}
