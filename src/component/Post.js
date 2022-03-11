import LikeButton from "./LikeButton";
import BookmarkButton from "./BookmarkButton";
import { useState } from "react";
import Comments from "./Comments";
import AddComment from "./AddComment";
const Post = ({ posts }) => {
  const [likeCount, setLikeCount] = useState(posts.like_count);
  const [post, setPost] = useState(posts);

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
            <BookmarkButton posts={post} />
          </span>
        </p>
        <p className="likesCount">{likeCount} likes</p>
        <span>
          <span className="username">{post.user.username}</span> {post.caption}
          ...
          <a className="mainTab" href="#nolink">
            more
          </a>
          <p className="post_time">{post.display_time}</p>
        </span>
        <div className="comments">
          <Comments posts={post} />
        </div>
      </div>
      <AddComment posts={post} setPost={setPost} />
    </div>
  );
};
export default Post;
