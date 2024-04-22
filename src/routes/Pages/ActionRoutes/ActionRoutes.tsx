/** @format */

import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../store";

import Campaign from "./Campaign";
import Docs from "./Docs";
import Events from "./Events";
import Mail from "./Mail";
import Notes from "./Notes";
import Timeline from "./Timeline";
import WebStats from "./WebStats";
import Deals from "./Deals";

export default function ActionRoutes() {
  const changeTheme = useSelector(
     (state: RootStateType) => state.theme.isThemeChanged
   );

  //  const preferredTheme = changeTheme ? "bg-bgcolor" : "bg-tip";
   const preferredText = changeTheme ? "text-toast" : "text-white";

  const { actionId } = useParams();

  let actions;

  switch (actionId) {
    case "Campaigns":
      actions = <Campaign />;
      break;
    case "Documents":
      actions = <Docs />;
      break;
    case "Events":
      actions = <Events />;
      break;
    case "Mail":
      actions = <Mail />;
      break;
    case "Notes":
      actions = <Notes />;
      break;
    case "Timeline":
      actions = <Timeline />;
      break;
    case "Web Stats":
      actions = <WebStats />;
      break;
    case "Deals":
      actions = <Deals />;
      break;
    default:
      actions = <Timeline />;
  }

  return (
    <div>
      <div className={`h-96 mt-10 text-xl font-semibold flex items-center justify-center ${preferredText}`}>
        {actions}
      </div>
    </div>
  );
}
