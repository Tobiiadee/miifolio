/** @format */

import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../../store";

import { Link, Navigate } from "react-router-dom";
import { z } from "zod";
import signImg from "../../../assets/Images/diego-ph-bHBPv4ecW9Q-unsplash.jpg";
import Wrapper from "../../../components/ui/Wrapper/Wrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import BackToHomepage from "../../../components/layout/multi-components/BackToHomepage";
import SignInOtherOptions from "../../../components/layout/multi-components/SignInOtherOptions";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { authActions } from "../../../store/slices/Authentication";
import UserLoading from "../../../components/ui/userLoading/UserLoading";
import SlideInNotification from "../../../components/layout/multi-components/SlideInNotification";

const signUpSchema = z.object({
  username: z.string().min(1, { message: "please enter your username" }),
  email: z.string().email({ message: "enter a valid email address" }),
  phoneNumber: z.string().min(11, { message: "enter a valid phone number" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
});

type SignUpField = z.infer<typeof signUpSchema>;

export default function SignIn() {
  const [countryCode, setCountryCode] = useState(false);
  const [createAcct, setCreateAcct] = useState(false);
  const [notification, setNotification] = useState(false);

  const dispatch = useDispatch();
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );
  const signedUp = useSelector((state: RootStateType) => state.auth.isSignedIn);
  // const userId = useSelector((state: RootStateType) => state.auth.userData);

  // Theme toggling
  const preferredTheme = changeTheme ? "bg-bgcolor" : "bg-black";
  const preferredText = changeTheme ? "text-toast" : "text-white";

  // User Authentication
  const userAuthenticated = useSelector(
    (state: RootStateType) => state.auth.isUserAuthenticated
  );
  const userNotAuthenticated = useSelector(
    (state: RootStateType) => state.auth.isUserNotAuthenticated
  );

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpField>({ resolver: zodResolver(signUpSchema) });

  // Sign up handler... Sending user data to server for verification

  const onSignUpHandler: SubmitHandler<SignUpField> = async (formData) => {
    const userData = {
      email: formData.email,
      password: formData.password,
      returnSecureToken: true,
    };
    try {
      const signUp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC411s03v9DRyNR3jvp0FqjDoYhtj7pjpU",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: { "content-type": "application/json" },
        }
      );
      const response = await signUp.json();
      const responseUser = {
        ...formData,
        ...response,
      };

      setTimeout(() => {
        dispatch(authActions.isSignedUp(responseUser));
      }, 1000);

      if (!response) {
        throw new Error("Something went wrong...");
      }
    } catch (error) {
      console.log(error);
    }
    setCreateAcct(true);
    setNotification(true);
  };

  //Reset createAcct to false

  useEffect(() => {
    setTimeout(() => {
      setCreateAcct(false);
    }, 2000);
  });

  // Reset notification
  useEffect(() => {
    setTimeout(() => setNotification(false), 7000);
  }, [notification]);

  const onCountryCodeHandler = () => {
    setCountryCode((prev) => !prev);
  };
  return (
    <>
      <BackToHomepage />
      <Wrapper>
        <div className='pb-8'>
          <section className='relative shadow-md rounded-2xl h-screen overflow-hidden '>
            <main className='absolute -z-20  w-4/6 overflow-hidden '>
              <img src={signImg} alt='' className='rounded-2xl h-5/6' />
            </main>

            <section
              className={`absolute top-0 right-0 z-20 ${preferredTheme} rounded-2xl shadow-md w-4/6 h-full`}>
              <main className=' flex flex-col items-center gap-8 pt-6 pb-8  '>
                <div className='flex flex-col items-center'>
                  <h2 className={`text-toast font-semibold ${preferredText}`}>
                    SIGN UP
                  </h2>
                  <p className={`text-xs text-tip mt-1 ${preferredText}`}>
                    Don't have an account?
                  </p>
                  <p className={`text-xs text-tip ${preferredText}`}>
                    Sign up now!
                  </p>
                </div>
                <form
                  className='flex flex-col gap-5'
                  onSubmit={handleSubmit(onSignUpHandler)}>
                  <input
                    type='text'
                    id='username'
                    placeholder='username'
                    {...register("username")}
                    className={` border px-3 text-sm py-2 rounded-md ${
                      errors.username ? "border-error" : ""
                    } ${
                      changeTheme ? "border-text" : "border-white"
                    } outline-none w-72 placeholder:text-sm`}
                  />
                  <div className={`text-xs text-error -mt-4 -mb-1`}>
                    {errors.username?.message}
                  </div>

                  <input
                    type='text'
                    id='email'
                    placeholder='email'
                    {...register("email")}
                    className={` border px-3 text-sm py-2 rounded-md ${
                      errors.email ? "border-error" : ""
                    } ${
                      changeTheme ? "border-text" : "border-white"
                    } outline-none w-72 placeholder:text-sm`}
                  />
                  <div className={`text-xs text-error -mt-4 -mb-1`}>
                    {errors.email?.message}
                  </div>

                  <div className='flex gap-2'>
                    <div
                      onClick={onCountryCodeHandler}
                      className={`relative w-14 ${
                        errors.phoneNumber ? "border-error" : ""
                      } ${
                        changeTheme ? "border-text " : "border-white bg-white"
                      } border px-1 text-xs py-2 rounded-md flex items-center`}>
                      <span>+234</span>
                      <span className='bg-offwhite rounded'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='w-5 h-5'>
                          <path
                            fillRule='evenodd'
                            d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </span>
                      {countryCode && (
                        <main className='absolute left-0 top-10'>
                          <ul className='flex flex-col gap-2 bg-white rounded w-20'>
                            <li className='text-sm text-toast hover:bg-hover hover:text-offwhite px-3 py-1'>
                              +346
                            </li>
                            <li className='text-sm text-toast hover:bg-hover hover:text-offwhite px-3 py-1'>
                              +346
                            </li>
                            <li className='text-sm text-toast hover:bg-hover hover:text-offwhite px-3 py-1'>
                              +346
                            </li>
                            <li className='text-sm text-toast hover:bg-hover hover:text-offwhite px-3 py-1'>
                              +346
                            </li>
                            <li className='text-sm text-toast hover:bg-hover hover:text-offwhite px-3 py-1'>
                              +346
                            </li>
                          </ul>
                        </main>
                      )}
                    </div>
                    <input
                      type='number'
                      id='phone-number'
                      placeholder='phone number'
                      {...register("phoneNumber")}
                      className={` border px-3 text-sm py-2 rounded-md ${
                        errors.phoneNumber ? "border-error" : ""
                      } ${
                        changeTheme ? "border-text" : "border-white"
                      } outline-none w-56 placeholder:text-sm`}
                    />
                  </div>
                  <div className={`text-xs text-error -mt-4 -mb-1`}>
                    {errors.phoneNumber?.message}
                  </div>
                  <input
                    type='password'
                    id='password'
                    {...register("password")}
                    placeholder='choose a password'
                    className={` border px-3 text-sm py-2 rounded-md ${
                      errors.password ? "border-error" : ""
                    } ${
                      changeTheme ? "border-text" : "border-white"
                    } outline-none w-72 placeholder:text-sm`}
                  />
                  <div className={`text-xs text-error -mt-4 -mb-1`}>
                    {errors.password?.message}
                  </div>
                  <div className={`text-xs text-error -mt-3 -mb-1`}>
                    {errors.root?.message}
                  </div>
                  <button
                    type='submit'
                    className='bg-text text-white font-medium  hover:bg-hover hover:text-tip px-3 text-sm py-2 rounded-md outline-none w-72'>
                    Create Account
                    {signedUp && userAuthenticated  && (
                      <Navigate to='/' />
                    )}
                  </button>

                  <span
                    className={`text-sm text-text w-max ${preferredText} ${
                      changeTheme ? "hover:text-text" : "hover:text-text"
                    }`}>
                    <Link to='/sign-in'>Already have an account?</Link>
                  </span>
                </form>

                <main>
                  <section>
                    <div className='flex'>
                      <span
                        className={`w-20 border-b ${
                          changeTheme ? "border-tip" : "border-white"
                        } border-dotted`}></span>
                      <span className={`text-xs ${preferredText}`}>
                        or sign in using
                      </span>
                      <span
                        className={`w-20 border-b  ${
                          changeTheme ? "border-tip" : "border-white"
                        } border-dotted`}></span>
                    </div>
                  </section>
                </main>

                <SignInOtherOptions />
              </main>
            </section>
          </section>
        </div>
        {createAcct && <UserLoading text='Creating your account...' />}
        {userNotAuthenticated && (
          <SlideInNotification
            onNotification={notification}
            title='Invalid Credentials'
            message='Incorrect login details. Check and try again!'
          />
        )}
      </Wrapper>
    </>
  );
}
