/** @format */

import { Fragment } from "react";
import { motion } from "framer-motion";

type NotificationType = {
  message: string;
  title: string;
  onNotification: boolean;
};

export default function SlideInNotification({
  message,
  title,
  onNotification
}: NotificationType) {

  const SlideVariant = {
    in: {
      x: 400,
    },
    out: {
      x: 0,
    },
  };

  return (
    <Fragment>
      <motion.section
        variants={SlideVariant}
        initial={onNotification ? "in" : "out"}
        animate={onNotification ? "out" : "in"}
        transition={{ duration: 1.8 }}
        className='fixed w-max top-10 right-2 z-50 rounded-lg bg-offwhite shadow-md flex flex-col overflow-hidden'>
        <div className='text-sm font-medium w-full px-4 py-2 bg-hover'>
          <h2>{title}</h2>
        </div>
        <div className='text-xs w-full px-4 py-2'>
          <p>{message}</p>
        </div>
      </motion.section>
    </Fragment>
  );
}
