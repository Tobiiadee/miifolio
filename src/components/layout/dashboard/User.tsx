/** @format */

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "react-tooltip";

import { useSelector } from "react-redux";
import { RootStateType } from "../../../store";

import img1 from "../../../assets/Images/TPF.jpg";

export default function User() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPhoneNumberCopied, setIsPhoneNumberCopied] = useState(false);
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );

  const preferredTheme = changeTheme ? "bg-white" : "bg-tip";
  const preferredText = changeTheme ? "text-toast" : "text-white";

  const onCopyEmailToClipboard = () => {
    setIsEmailCopied(true);

    const copyTimer = setTimeout(() => {
      setIsEmailCopied(false);
      console.log("complete");
    }, 1000);

    () => {
      clearTimeout(copyTimer);
    };
  };
  const onCopyPhoneNumberToClipboard = () => {
    setIsPhoneNumberCopied(true);

    const copyTimer = setTimeout(() => {
      setIsPhoneNumberCopied(false);
      console.log("complete");
    }, 1000);

    () => {
      clearTimeout(copyTimer);
    };
  };

  const devName = "Ogunbayo oluwatobi";
  const devOption = "Software Developer";
  const ownerName = "Ogunbayo Oluwatobi";
  const email = "example@email.com";
  const phoneNumber = "+2348034685185";
  const address = "13 MercyLand";
  const ownerImage = img1;

  return (
    <section className={`${preferredTheme} shadow-md rounded h-6/6 px-4 py-8`}>
      <div className='flex flex-col items-center'>
        <div className='w-32 h-32 mb-1 rounded-full overflow-hidden flex place-content-center shadow cursor-pointer'>
          <img src={ownerImage} alt='profile picture' />
        </div>
        <h2 className={`font-semibold text-sm ${preferredText}`}>{devName}</h2>
        <p className={`text-sm ${preferredText}`}>{devOption}</p>

        <div className='flex items-center justify-around shadow rounded-md w-64 mt-4 px-2 py-4'>
          <span className={`${preferredText}`}>rating</span>
          <span className='border border-offwhite rounded h-6'></span>
          <span className={`${preferredText}`}>rating</span>
        </div>
      </div>

      <section className='mt-6'>
        <h2 className={`font-semibold ${preferredText}`}>Contact Information</h2>

        <h2 className={`mt-3 text-text text-sm`}>Email Address</h2>
        <div className='flex gap-1 items-center cursor-pointer'>
          <CopyToClipboard text={email}>
            <h3
              className={`text-sm ${preferredText} ${isEmailCopied ? "text-text" : ""}`}
              onClick={onCopyEmailToClipboard}
              data-tooltip-id='my-tooltip'
              data-tooltip-content='click to copy'>
              {email}
            </h3>
          </CopyToClipboard>
        </div>
        <Tooltip id='my-tooltip' />

        <h2 className={`mt-3 text-text text-sm`}>Phone Number</h2>
        <div className='flex gap-1 items-center cursor-pointer'>
          <CopyToClipboard text={phoneNumber}>
            <h3
              className={`text-sm ${preferredText} ${isPhoneNumberCopied ? "text-text" : ""}`}
              onClick={onCopyPhoneNumberToClipboard}
              data-tooltip-id='my-tooltip'
              data-tooltip-content='click to copy'>
              {phoneNumber}
            </h3>
          </CopyToClipboard>
        </div>

        <h2 className='mt-3 text-text text-sm'>Address</h2>
        <h3 className={`text-sm ${preferredText}`}>{address}</h3>
      </section>

      <section className='mt-6'>
        {" "}
        <h3 className={`font-semibold ${preferredText}`}>Tags</h3>
        <div></div>
      </section>

      <section className='mt-6'>
        <div className='flex gap-4 items-center'>
          <div className='w-7 h-7 mb-1 rounded-full overflow-hidden flex place-content-center shadow'>
            <img src={ownerImage} alt='Owners profile picture' />
          </div>
          <div className='flex items-center gap-2'>
            <h2 className='text-text text-sm'>Owner:</h2>
            <h2 className={`text-sm ${preferredText}`}>{ownerName}</h2>
          </div>
        </div>
      </section>
    </section>
  );
}
