import Post from "./Post";
const Posts = ({ postList }) => {
  return (
    <div className="postList">
      {postList.map((posts) => {
        return <Post posts={posts} key={posts.id} />;
      })}
    </div>
  );
};
export default Posts;
