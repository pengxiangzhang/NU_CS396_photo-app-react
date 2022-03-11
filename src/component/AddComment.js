import { getHeaders } from "../utils.js";
import React, { useState, useRef } from "react";


const AddComment = ({ posts, setPost }) => {
  const [comment, setComment] = useState("");
  const inputField = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const postData = {
      post_id: posts.id,
      text: comment,
    };

    fetch("/api/comments", {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetch(`/api/posts/${posts.id}`)
          .then((response) => response.json())
          .then((data) => {
            setPost(data);
          });
      });
    setComment("");
    inputField.current.focus();
    return false;
  }
  return (
    <>
      <div className="make_comments">
        <div className="make_comments_inside">
          <form onSubmit={handleSubmit} id="form-${post.id}">
            <i className="far fa-smile"></i>
            <input
              type="text"
              name="comment"
              className="make_comments_hint mainTab"
              aria-label="Input your comment"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              ref={inputField}
              required
            />
            <input
              type="submit"
              className="commentSubmit mainTab"
              value="Post"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default AddComment;
