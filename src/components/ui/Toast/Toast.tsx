/** @format */
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";

type ToastType = {
  message: string;
  onToast: boolean;
};

export default function Toast({ message, onToast }: ToastType) {
  //onToast is a state passed as a prop from the parent component

  const SlideVariant = {
    in: {
      y: -400,
    },
    out: {
      y: 0,
    },
  };

  const toastMesage = `${message}!`;

  return (
    <Fragment>
      <motion.main
        variants={SlideVariant}
        initial={onToast ? "in" : "out"}
        animate={onToast ? "out" : "in"}
        transition={{ duration: 1.8 }}
        className='bg-toast w-max text-white px-3 py-2 rounded-md text-sm z-50 fixed top-2 left-1/3'>
        <p>{toastMesage}</p>
      </motion.main>
    </Fragment>
  );
}
