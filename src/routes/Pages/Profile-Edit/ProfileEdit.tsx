/** @format */

import Wrapper from "../../../components/ui/Wrapper/Wrapper";
import EditProfileNav from "../../../components/layout/nav/EditProfileNav";
import { useParams } from "react-router";
import ProfileSettings from "./Settings/ProfileSettings";
import ProfileNotification from "./Notification/ProfileNotification";
import ProfilePage from "./ProfilePage/ProfilePage";

export default function ProfileEdit() {
  const { editprofileid } = useParams();
  
  let actions;

  switch (editprofileid) {
    case "settings":
      actions = <ProfileSettings />;
      break;
    case "notification":
      actions = <ProfileNotification />;
      break;
    case "profilepage":
      actions = <ProfilePage />;
      break;

    default:
      actions = <ProfilePage />;
  }

  return (
    <Wrapper>
      <EditProfileNav />
      {actions}
    </Wrapper>
  );
}
