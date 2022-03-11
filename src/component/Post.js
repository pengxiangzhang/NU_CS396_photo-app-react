import LikeButton from "./LikeButton";
import BookMark from "./BookMark";
import { useState } from "react";
import Comments from "./Comments";
import { getHeaders } from "../utils.js";

const Post = ({ posts }) => {
  const [likeCount, setLikeCount] = useState(posts.like_count);
  const [comment, setComment] = useState("");
  const [post, setPost] = useState(posts);

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
    }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      fetch(`/api/posts/${posts.id}`)
        .then((response) => response.json())
        .then((data) => {
          setPost(data)
        });
    });
    setComment("");
    return false;
  }
  return (
    <div className="card" post_id={post.id} key={post.id}>
      <div>
        <h2>
          <a className="invisibleLink mainTab" href="#nolink">
            {post.user.username}
          </a>
          <a
            className="fas fa-ellipsis-h invisibleLink float-right mr10 mainTab"
            aria-label="More Option"
          ></a>
        </h2>
      </div>
      <img alt={post.title} src={post.image_url} />
      <div>
        <p>
          <LikeButton
            posts={post}
            likeCount={likeCount}
            setLikeCount={setLikeCount}
          />
          <a
            className="far fa-comment fa-lg invisibleLink mainTab"
            aria-label="View Comments"
            href="#nolink"
          ></a>
          &ensp;
          <a
            className="far fa-paper-plane fa-lg invisibleLink mainTab"
            aria-label="Share"
            href="#nolink"
          ></a>
          <span id="bookmarkico">
            <BookMark posts={post} />
          </span>
        </p>
        <p className="likesCount">{likeCount} likes</p>
        <span>
          <span className="username">{post.user.username}</span>{" "}
          {post.caption}...
          <a className="mainTab" href="#nolink">
            more
          </a>
          <p className="post_time">{post.display_time}</p>
        </span>
        <div className="comments">
          <Comments posts={post} />
        </div>
      </div>
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
    </div>
  );
};
export default Post;
