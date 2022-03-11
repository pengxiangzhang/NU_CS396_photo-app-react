import { getHeaders } from "../utils.js";
import { useState } from "react";

const BookmarkButton = ({ posts }) => {
  const [bookmarkID, setBookmarkID] = useState(posts.current_user_bookmark_id);
  const post_id = posts.id;
  function bookmarkUnbookmark(ev) {
    if (bookmarkID) {
      fetch(`/api/bookmarks/${bookmarkID}`, {
        method: "DELETE",
        headers: getHeaders(),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBookmarkID();
        });
    } else {
      const postData = {
        post_id: post_id,
      };
      fetch("/api/bookmarks/", {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(postData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBookmarkID(data.id);
        });
    }
  }
  return (
    <span id="likeico">
      <a
        className={
          bookmarkID
            ? "fas fa-bookmark fa-lg invisibleLink float-right mainTab"
            : "far fa-bookmark fa-lg invisibleLink float-right mainTab"
        }
        onClick={bookmarkUnbookmark}
        href="#nolink"
        style={{ marginRight: "10px" }}
        aria-label={bookmarkID ? "UnBookmark this post" : "Bookmark this post"}
        aria-checked={bookmarkID ? "true" : "false"}
      ></a>
    </span>
  );
};
export default BookmarkButton;
