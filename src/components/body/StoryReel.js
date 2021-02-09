import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://en.wikipedia.org/wiki/Ala_Vaikunthapurramuloo#/media/File:Ala_Vaikunthapurramuloo.jpeg"
        profileSrc="https://en.wikipedia.org/wiki/Ala_Vaikunthapurramuloo#/media/File:Ala_Vaikunthapurramuloo.jpeg"
        title="Ram Chandra"
      />
      <Story
        image="../../../images/b.jpg"
        profileSrc="../../../images/b.jpg"
        title="Syam"
      />
      <Story
        image="../../../images/c.jpg"
        profileSrc={null}
        title="Bhede Nepali"
      />
      <Story
        image="../../../images/d.jpg"
        profileSrc="images/d.jpg"
        title="Mukunde"
      />
      <Story
        image="../../../images/d.jpg"
        profileSrc="images/d.jpg"
        title="Mukunde"
      />
      <Story
        image="../../../images/d.jpg"
        profileSrc="images/d.jpg"
        title="Mukunde"
      />
    </div>
  );
}

export default StoryReel;
