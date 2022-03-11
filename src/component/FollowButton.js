import { getHeaders } from "../utils.js";
import { useState } from "react";

const FollowButton = ({ suggestion_id }) => {
  const [followID, setfollowID] = useState();
  function followUnFollow(ev) {
    if (followID) {
      fetch(`/api/following/${followID}`, {
        method: "DELETE",
        headers: getHeaders(),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setfollowID();
        });
    } else {
      const postData = {
        user_id: suggestion_id,
      };
      fetch("/api/following/", {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(postData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setfollowID(data.id);
        });
    }
  }

  return (
    <span id="followButton">
      <a
        href="#nolink"
        className="float-right mainTab"
        aria-label={followID ? "UnFollow this user" : "Follow this user"}
        aria-checked={followID ? "true" : "false"}
        onClick={followUnFollow}
      >
        {followID ? "unfollow" : "follow"}
      </a>
    </span>
  );
};
export default FollowButton;
