import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Feed.css";
import NewPost from "./NewPost";
import Posts from "./Posts";
import StoryReel from "./StoryReel";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <NewPost />
      {posts.map((posts) => (
        <Posts
          key={posts.id}
          profilePic={posts.data.profilePic}
          message={posts.data.message}
          timeStamp={posts.data.timeStamp}
          userName={posts.data.userName}
          image={posts.data.image}
        />
      ))}
      {/* <posts.data
        profilePic="https://static.india.com/wp-content/uploads/2021/01/KGF1200.jpg"
        message="This is Second post"
        timeStamp="10 pm"
        userName="YASH"
        image="https://static.india.com/wp-content/uploads/2021/01/KGF1200.jpg"
      /> */}
    </div>
  );
}

export default Feed;
