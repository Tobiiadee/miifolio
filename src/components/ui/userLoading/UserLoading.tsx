/** @format */

import { Fragment } from "react/jsx-runtime";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

type UserLoadingType = {
  text: string;
};

export default function UserLoading({ text }: UserLoadingType) {
  return (
    <Fragment>
      <section className='w-screen h-screen fixed top-0 left-0 bg-toast flex justify-center items-center z-50'>
        <div className='text-white text-3xl flex gap-1 items-center'>
          <h2>{text}</h2>
          <LoadingSpinner />
        </div>
      </section>
    </Fragment>
  );
}
