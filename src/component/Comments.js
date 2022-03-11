const Comments = ({ posts }) => {
  let comment_number = posts.comments.length;
  if (comment_number === 1) {
    return (
      <>
        <p>
          <span className="username">
            {posts.comments[comment_number - 1].user.username}
          </span>
          {posts.comments[comment_number - 1].text}
        </p>
        <p className="post_time">
          {posts.comments[comment_number - 1].comment_time}
        </p>
      </>
    );
  } else if (comment_number >= 1) {
    return (
      <>
        <a href="#nolink" className="mainTab" style={{ color: "#0074b9" }}>
          View all {comment_number} comments
        </a>
        <p>
          <span className="username" style={{ marginRight: "10px" }}>
            {posts.comments[comment_number - 1].user.username}
          </span>
          {posts.comments[comment_number - 1].text}
        </p>
        <p className="post_time">
          {posts.comments[comment_number - 1].comment_time}
        </p>
      </>
    );
  } else return "The post doesn't have a comment yet.";
};
export default Comments;
