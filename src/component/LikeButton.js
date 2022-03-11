import { getHeaders } from "../utils.js";
import { useState } from "react";

const LikeButton = ({ posts, likeCount, setLikeCount }) => {
  const [likeID, setLikeID] = useState(posts.current_user_like_id);
  const post_id = posts.id;
  function likeUnlike(ev) {
    if (likeID) {
      fetch(`/api/posts/${post_id}/likes/${likeID}`, {
        method: "DELETE",
        headers: getHeaders(),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLikeID();
          setLikeCount(likeCount - 1);
        });
    } else {
      fetch(`/api/posts/${post_id}/likes/`, {
        method: "POST",
        headers: getHeaders(),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLikeID(data.id);
          setLikeCount(likeCount + 1);
        });
    }
  }
  return (
    <span id="likeico">
      <a
        className={
          !likeID
            ? "far" + " fa-heart fa-lg invisibleLink mainTab mainTab"
            : "fas" + " fa-heart red fa-lg invisibleLink mainTab mainTab"
        }
        onClick={likeUnlike}
        href="#nolink"
        style={{ marginRight: "10px" }}
      ></a>
    </span>
  );
};
export default LikeButton;
