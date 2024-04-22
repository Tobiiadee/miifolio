/** @format */

import { useSelector } from "react-redux";
import { RootStateType } from "../../../store";

import { NavLink } from "react-router-dom";

type LinksType = string[];

export default function ActionNav() {
  const changeTheme = useSelector(
    (state: RootStateType) => state.theme.isThemeChanged
  );
  const preferredTheme = changeTheme ? "bg-white" : "bg-toast";

  const Links: LinksType = [
    "Timeline",
    "Notes",
    "Events",
    "Campaigns",
    "Deals",
    "Web Stats",
    "Mail",
    "Documents",
  ];

  const navLinks = Links.map((link) => (
    <NavLink
      className={`text-text text-sm px-2 py-2 w-max hover:border-b-text hover:border-b `}
      to={`/profile/${link}`}
      key={link}>
      {link}
    </NavLink>
  ));

  return (
    <nav
      className={`relative ${preferredTheme} flex justify-between w-full overflow-x-scroll laptop:overflow-hidden`}>
      <ul className='flex gap-4 items-center' id='actionnav'>
        {navLinks}
      </ul>
    </nav>
  );
}
