/** @format */
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../store/slices/Authentication";
import { RootStateType } from "../../../store";

import { Link, NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
import Theme_Nav from "../../ui/Theme/Theme_Nav";

export default function HomeNav() {
  const [signOut, setSignOut] = useState(false);
  const dispatch = useDispatch();
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );

  const { isSignedIn: signedIn, isUserAuthenticated } = useSelector(
    (state: RootStateType) => state.auth
  );

  const onSignOutHandler = () => {
    setTimeout(() => {
      dispatch(authActions.isSignedOut());
    }, 1000);
    setSignOut(true);
  };

  const preferredTheme = changeTheme ? "bg-white" : "bg-tip";
  const preferredText = changeTheme ? "text-toast" : "text-white";

  return (
    <div
      className={`fixed top-0 left-0 laptop:left-40 z-40 px-4 w-screen laptop:w-11/12 laptop:h-10 ${preferredTheme}`}>
      <div className='flex gap-8 justify-between items-center'>
        <div className='flex justify-between items-center laptop:w-96'>
          <div>
            <Link to='/' className='flex gap-2 items-center'>
              <div className='animate-[pulsing_1s_ease-in-out_infinite]'>
                <svg
                  version='1.1'
                  id='Layer_1'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='20px'
                  height='20px'
                  viewBox='0 0 194.302 182.09'
                  enableBackground='new 0 0 194.302 182.09'>
                  <path
                    fill='#B8860B'
                    d='M187.214,182.09H7.088c-3.909,0-7.088-3.179-7.088-7.087V44.742c0-3.909,3.179-7.089,7.088-7.089h180.126
	c3.909,0,7.088,3.18,7.088,7.089v130.261C194.302,178.911,191.123,182.09,187.214,182.09 M7.088,41.653
	C5.385,41.653,4,43.039,4,44.742v130.261c0,1.703,1.385,3.087,3.088,3.087h180.126c1.703,0,3.088-1.384,3.088-3.087V44.742
	c0-1.703-1.385-3.089-3.088-3.089H7.088z'></path>
                  <path
                    fill='##B8860B'
                    d='M113.433,127.137H80.868c-6.714,0-12.176-5.462-12.176-12.176v-12.212c0-6.714,5.462-12.177,12.176-12.177
	h32.565c6.714,0,12.177,5.463,12.177,12.177v12.212C125.61,121.675,120.147,127.137,113.433,127.137 M80.868,94.572
	c-4.508,0-8.176,3.668-8.176,8.177v12.212c0,4.508,3.668,8.176,8.176,8.176h32.565c4.509,0,8.177-3.668,8.177-8.176v-12.212
	c0-4.509-3.668-8.177-8.177-8.177H80.868z'></path>
                  <path
                    fill='#D2691E'
                    d='M143.2,111.363h-21.59v-8.614c0-4.509-3.668-8.177-8.176-8.177H80.868c-4.508,0-8.176,3.668-8.176,8.177
	v8.614h-21.59C22.924,111.363,0,88.439,0,60.261V44.742c0-3.909,3.179-7.089,7.088-7.089h180.126c3.909,0,7.088,3.18,7.088,7.089
	v15.519C194.302,88.439,171.378,111.363,143.2,111.363 M125.61,107.363h17.59c25.973,0,47.102-21.13,47.102-47.102V44.742
	c0-1.703-1.385-3.089-3.088-3.089H7.088C5.385,41.653,4,43.039,4,44.742v15.519c0,25.972,21.13,47.102,47.102,47.102h17.59v-4.614
	c0-6.714,5.462-12.177,12.176-12.177h32.566c6.714,0,12.176,5.463,12.176,12.177V107.363z'></path>
                  <path
                    fill='##D2691E'
                    d='M113.433,127.138H80.868c-6.714,0-12.176-5.463-12.176-12.177v-12.212c0-6.714,5.462-12.177,12.176-12.177
	h32.565c6.714,0,12.177,5.463,12.177,12.177v12.212C125.61,121.675,120.147,127.138,113.433,127.138 M80.868,94.572
	c-4.508,0-8.176,3.668-8.176,8.177v12.212c0,4.509,3.668,8.177,8.176,8.177h32.565c4.509,0,8.177-3.668,8.177-8.177v-12.212
	c0-4.509-3.668-8.177-8.177-8.177H80.868z M113.433,118.996H80.868c-2.225,0-4.035-1.81-4.035-4.035v-12.212
	c0-2.225,1.81-4.036,4.035-4.036h32.565c2.226,0,4.036,1.811,4.036,4.036v12.212C117.469,117.186,115.659,118.996,113.433,118.996
	 M80.868,102.712l-0.035,12.248l32.6,0.035l0.036-0.035v-12.212L80.868,102.712z'></path>
                  <path
                    fill='#028c6a'
                    d='M113.433,118.996H80.868c-2.225,0-4.035-1.81-4.035-4.035v-12.212c0-2.225,1.81-4.036,4.035-4.036h32.565
	c2.226,0,4.036,1.811,4.036,4.036v12.212C117.469,117.186,115.659,118.996,113.433,118.996 M80.868,102.712l-0.035,12.248
	l32.6,0.035l0.036-12.247c0-0.016-0.022-0.036-0.036-0.036H80.868z'></path>
                  <path
                    fill='#028c6a'
                    d='M136.295,41.653H56.988v-2C56.988,17.788,74.777,0,96.643,0c21.864,0,39.653,17.788,39.653,39.653V41.653z
	 M61.044,37.653h71.195C131.199,18.92,115.63,4,96.643,4C77.653,4,62.084,18.92,61.044,37.653'></path>
                  <path
                    fill='#D2691E'
                    d='M104.444,51.83H48.133c-1.105,0-2-0.896-2-2c0-1.104,0.895-2,2-2h56.311c1.104,0,2,0.896,2,2
	C106.444,50.934,105.548,51.83,104.444,51.83'></path>
                  <path
                    fill='#028c6a'
                    d='M32.869,51.83H18.452c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h14.417c1.104,0,2,0.896,2,2
	C34.869,50.934,33.973,51.83,32.869,51.83'></path>
                  <path
                    fill='##B8860B'
                    d='M12.176,137.992c-1.104,0-2-0.896-2-2v-22.389c0-1.104,0.896-2,2-2s2,0.896,2,2v22.389
	C14.176,137.096,13.28,137.992,12.176,137.992'></path>
                </svg>
              </div>
              <h2 className={`text-sm text-toast ${preferredText}`}>
                MiiFOLIO
              </h2>
            </Link>
          </div>
        </div>

        <div className='laptop:mr-28 flex gap-4 items-center w-full justify-end' id='homenav'>
          {isUserAuthenticated == false && (
            <NavLink
              to='/sign-up'
              className='py-2 text-sm text-text hover:border-b border-text'>
              SIGN UP
            </NavLink>
          )}

          {isUserAuthenticated == false && (
            <NavLink
              to='/sign-in'
              className='py-2 text-sm text-text hover:border-b border-text'>
              SIGN IN
            </NavLink>
          )}

          {signedIn && isUserAuthenticated && (
            <button
              type='button'
              onClick={onSignOutHandler}
              className='py-2 text-sm text-text hover:border-b border-text'>
              SIGN OUT
              {signOut && <Navigate to='/' />}
            </button>
          )}
          <Theme_Nav />
        </div>
      </div>
    </div>
  );
}
