/** @format */

import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { Fragment } from "react";
import { BackdropType } from "./Backdrop";

export default function Modal({ onClick, children, className }: BackdropType) {
  const portalElement: HTMLElement = document.getElementById("overlay")!;

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop className={className}  onClick={onClick} />, portalElement)}
      {children}
    </Fragment>
  );
}
