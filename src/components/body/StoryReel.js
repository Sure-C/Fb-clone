import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import b from "../../images/b.jpg";
import a from "../../images/a.jpg";
import f from "../../images/f.jpg";
import e from "../../images/e.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/originals/79/28/be/7928bea834ab32a9f4b7692a04815dda.png"
        profileSrc="https://en.wikipedia.org/wiki/Ala_Vaikunthapurramuloo#/media/File:Ala_Vaikunthapurramuloo.jpeg"
        title="Ram Chandra"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQ5fe13-AUys0QHvTl8KJrGanriBHYwK6EzPC0fyR4K3kH2qCFI-3iyRk8C2AX31GI2WzvGiabA4MlzdMUtk&usqp=CAU&ec=45774424"
        profileSrc={b}
        title="Syam"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IYQ-aR7CFONwix0-L0H70MSuyZyFBV7o896B1TFrovM0s-SBkegUZmMyJ3UogbQuqljy9rd9-vPAX8ad3jo&usqp=CAU&ec=45774424"
        profileSrc={a}
        title="Bhede Nepali"
      />
      <Story
        image="../../../images/d.jpg"
        profileSrc="images/d.jpg"
        title="Mukunde"
      />
      <Story image="../../../images/e.jpg" profileSrc={e} title="Mukunde" />
      <Story image="../../../images/d.jpg" profileSrc={f} title="Mukunde" />
    </div>
  );
}

export default StoryReel;
