import React, { useEffect, useState } from "react";
import NavBar from "./component/NavBar.js";
import Suggestions from "./component/Suggestions.js";
import Story from "./component/Stories.js";
import Posts from "./component/Posts.js";
import { getHeaders } from "./utils.js";
import Profile from "./component/Profile.js";
const App = () => {
  const [user, setUser] = useState();
  const [suggestionList, setSuggestionList] = useState();
  const [storyList, setStoryList] = useState();
  const [postList, setPostList] = useState();

  useEffect(() => {
    fetch(`/api/profile`, {
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/suggestions`, {
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuggestionList(data);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/stories`, {
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then((data) => {
        setStoryList(data);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/posts`, {
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostList(data);
      });
  }, []);

  if (!user || !suggestionList || !storyList || !postList) {
    return "";
  }

  return (
    <>
      <NavBar user={user} />
      <div className="page-wrap">
        <div className="mainPanel">
          <Story storyList={storyList} />
          <Posts postList={postList} />
        </div>
        <div className="sidePanel">
          <Profile user={user} />
          <Suggestions suggestionList={suggestionList} />
        </div>
      </div>
    </>
  );
};

export default App;
