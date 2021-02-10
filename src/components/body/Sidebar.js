import React from "react";
import "./Sidebar.css";
import {
  Chat,
  EmojiFlags,
  ExpandMore,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import SideBarRow from "./SideBarRow";
import NewPost from "./NewPost";
import { useStateValue } from "../../middleware/StateProvider";

function Sidebar() {
  const [user] = useStateValue();

  return (
    <div className="sidebar">
      <SideBarRow src={user.photoURL} title={user.displayName} />

      <SideBarRow Icon={EmojiFlags} title="Pages" />

      <SideBarRow Icon={People} title="Friends" />

      <SideBarRow Icon={Chat} title="Messenger" />

      <SideBarRow Icon={Storefront} title=" Market place" />

      <SideBarRow Icon={VideoLibrary} title="videos" />

      <SideBarRow Icon={ExpandMore} title="Market place" />
    </div>
  );
}

export default Sidebar;
