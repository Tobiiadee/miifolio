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
import { zodResolver } from "@hookform/resolvers/zod";
import { authActions } from "../../../store/slices/Authentication";
import UserLoading from "../../../components/ui/userLoading/UserLoading";
import { useEffect, useState } from "react";
import SlideInNotification from "../../../components/layout/multi-components/SlideInNotification";

const signInSchema = z.object({
  email: z.string().email({ message: "please enter a vaild email" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
});

type SignInField = z.infer<typeof signInSchema>;

export default function SignIn() {
  const [Signing, setSigning] = useState(false);
  const [notification, setNotification] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInField>({
    resolver: zodResolver(signInSchema),
  });

  const dispatch = useDispatch();

  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );

  // User on sign in
  const signedIn = useSelector((state: RootStateType) => state.auth.isSignedIn);

  // User Authentication
  const userAuthenticated = useSelector(
    (state: RootStateType) => state.auth.isUserAuthenticated
  );
  const userNotAuthenticated = useSelector(
    (state: RootStateType) => state.auth.isUserNotAuthenticated
  );

  console.log(userAuthenticated, userNotAuthenticated);
  


  const preferredTheme = changeTheme ? "bg-bgcolor" : "bg-black";
  const preferredText = changeTheme ? "text-toast" : "text-white";

  const onSignInHandler: SubmitHandler<SignInField> = async (formData) => {
    const userData = {
      email: formData.email,
      password: formData.password,
      returnSecureToken: true,
    };

    try {
      const signIn = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC411s03v9DRyNR3jvp0FqjDoYhtj7pjpU",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: { "Content-type": "application/json" },
        }
      );

      const signInResponse = await signIn.json();
      // console.log(signInResponse);

      setTimeout(() => {
        dispatch(authActions.isSignedIn(signInResponse));
      }, 1000);

      if (!signIn) {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
    setSigning(true);
    setNotification(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setSigning(false);
    }, 2000);
  });

  // Reset notification
  useEffect(() => {
    setTimeout(() => setNotification(false), 7000);
  }, [notification]);

  return (
    <div className={``}>
      <BackToHomepage />
      <Wrapper>
        <section
          className={`relative shadow-md rounded-2xl h-5/6 overflow-hidden`}>
          <main className='absolute -z-20  w-4/6 overflow-hidden'>
            <img src={signImg} alt='' className='rounded-2xl h-5/6' />
          </main>

          <main
            className={`absolute top-0 right-0 z-20 ${preferredTheme} flex flex-col items-center gap-8 py-6 rounded-2xl shadow-md w-4/6 h-full`}>
            <div className='flex flex-col items-center'>
              <h2 className={`text-toast font-semibold ${preferredText}`}>
                SIGN IN
              </h2>
              <p className={`text-xs ${preferredText} mt-1`}>
                Enter your email and password
              </p>
            </div>
            <form
              className='flex flex-col gap-5'
              onSubmit={handleSubmit(onSignInHandler)}>
              <input
                type='text'
                id='email'
                placeholder='email'
                {...register("email")}
                className={` ${changeTheme ? "border-text" : "border-white"} ${
                  errors.email ? "border-error" : ""
                } border px-3 text-sm py-2 rounded-md outline-none w-72 placeholder:text-sm`}
              />
              <div className={`text-xs text-error -mt-4 -mb-1`}>
                {errors.email?.message}
              </div>
              <input
                type='password'
                id='password'
                {...register("password")}
                placeholder='password'
                className={`${changeTheme ? "border-text" : "border-white"} ${
                  errors.password ? "border-error" : ""
                } border px-3 text-sm py-2 rounded-md outline-none w-72 placeholder:text-sm`}
              />
              <div className={`text-xs text-error -mt-4 -mb-1`}>
                {errors.password?.message}
              </div>
              <div
                className={`-mt-4  w-max ${
                  changeTheme
                    ? "text-toast hover:text-text"
                    : "text-white hover:text-text"
                }`}>
                <Link to='' className='text-xs'>
                  Forgot password?
                </Link>
              </div>
              <div>
                <button
                  type='submit'
                  className='bg-text text-white font-medium  hover:bg-hover hover:text-tip px-3 text-sm py-2 rounded-md outline-none w-72'>
                  Sign In
                  {signedIn && userAuthenticated && (
                    <Navigate to='/profile' />
                  )}
                </button>
              </div>
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
        {Signing && <UserLoading text='Signing you in...' />}
      </Wrapper>
      {userNotAuthenticated && (
        <SlideInNotification
          onNotification={notification}
          title='Invalid Credentials'
          message='Incorrect login details. Check and try again!'
        />
      )}
    </div>
  );
}
