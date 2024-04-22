/** @format */
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useSelector } from "react-redux";
import { RootStateType } from "../../../../../store";
import UserDropDown from "./UserDropDown";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const profileSchema = z.object({
  firstName: z.string().min(1, { message: "first name is required" }),
  lastname: z.string().min(1, { message: "last name is required" }),
  email: z.string().email().optional(),
  phoneNumber: z.string().optional(),
});

type ProfileType = z.infer<typeof profileSchema>;
export default function UserInputForm() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProfileType>({
    resolver: zodResolver(profileSchema),
  });

  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );
  const userDetails = useSelector(
    (state: RootStateType) => state.auth.userData
  );

  const email = userDetails?.email;
  const phoneNumber = userDetails?.phoneNumber;

  const dropdownHandler = () => {
    setOpenDropdown((prev) => !prev);
  };

  const onSubmitForm: SubmitHandler<ProfileType> = (formData) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className='mt-6 flex flex-col gap-6'>
      <section className='flex flex-col laptop:flex-row gap-6 laptop:gap-4'>
        <div className='flex flex-col'>
          <input
            type='text'
            placeholder='first name'
            {...register("firstName")}
            className={` ${changeTheme ? "border-text" : "border-white"} ${
              errors.firstName ? "border-error" : ""
            } border bg-offwhite px-3 text-sm py-2 rounded-md outline-none laptop:w-72 text-black placeholder:text-sm`}
          />
          <div className={`text-xs text-error -mb-1`}>
            {errors.firstName?.message}
          </div>
        </div>

        <div>
          <input
            type='text'
            placeholder='last name'
            {...register("lastname")}
            className={` ${changeTheme ? "border-text" : "border-white"} ${
              errors.lastname ? "border-error" : ""
            } border bg-offwhite px-3 text-sm py-2 rounded-md outline-none w-[340px] laptop:w-72 text-black placeholder:text-sm`}
          />
          <div className={`text-xs text-error -mb-1`}>
            {errors.lastname?.message}
          </div>
        </div>
      </section>

      <section className='flex flex-col laptop:flex-row gap-6 laptop:gap-4'>
        <input
          type='text'
          placeholder='email'
          value={email}
          {...register("email")}
          className={` ${
            changeTheme ? "border-text" : "border-white"
          } border bg-offwhite px-3 text-sm py-2 rounded-md outline-none laptop:w-72 text-black placeholder:text-sm`}
        />

        <div
          onClick={dropdownHandler}
          className={`flex justify-between items-center cursor-pointer ${
            changeTheme ? "border-text" : "border-white"
          } border bg-offwhite px-3 text-sm py-1 relative rounded-md outline-none laptop:w-72 placeholder:text-sm`}>
          <h2 className='text-sm text-black'>Menu</h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 text-black'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m19.5 8.25-7.5 7.5-7.5-7.5'
            />
          </svg>
          {openDropdown && <UserDropDown />}
        </div>
      </section>

      <section className='flex flex-col laptop:flex-row gap-6 laptop:gap-24'>
        <input
          type='number'
          value={phoneNumber}
          placeholder='phone number'
          {...register("phoneNumber")}
          className={` ${
            changeTheme ? "border-text" : "border-white"
          } border bg-offwhite px-3 text-sm py-2 rounded-md outline-none laptop:w-72 text-black placeholder:text-sm`}
        />

        <button
          type='submit'
          className='flex items-center w-20 rounded text-sm  text-white bg-text gap-1 py-1 px-6 transition duration-300 hover:scale-110'>
          Save
        </button>
      </section>
    </form>
  );
}
