const Story = ({ storyList }) => {
  return (
    <div className="storyList">
      {storyList.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img
              src={story.user.thumb_url}
              className="pic"
              alt={"profile pic for" + story.user.username}
            />
            <p>{story.user.username}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Story;
