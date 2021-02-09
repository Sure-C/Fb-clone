import React from "react";
import "./Feed.css";
import NewPost from "./NewPost";
import Posts from "./Posts";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <NewPost />
      <Posts />
    </div>
  );
}

export default Feed;
