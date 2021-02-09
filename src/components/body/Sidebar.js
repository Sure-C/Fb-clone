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

function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarRow
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F684828687063188925%2F&psig=AOvVaw2kG8Dyl70wlfAw3rDOK6C5&ust=1612956337795000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDVnt_Y3O4CFQAAAAAdAAAAABAD"
        title="Sure C"
      />

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
