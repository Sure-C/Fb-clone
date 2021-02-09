import "./NewPost.css";

import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";

function NewPost() {
  const [input, setInput] = useState("");
  const [imgurl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setImgUrl("");
  };
  return (
    <div className="newPost">
      <div className="newPost__top">
        <Avatar />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="newPost__input"
            placeholder="What is on your mind ?"
          />
          <input
            placeholder="image URl ( Optional )"
            type=""
            text
            value={imgurl}
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="newPost__bottom">
        <div className="newPost__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="newPost__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/video</h3>
        </div>
        <div className="newPost__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
