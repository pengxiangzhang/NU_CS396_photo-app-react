import FollowButton from "./FollowButton";
const Suggestion = ({ suggest }) => {
  return (
    <div className="suggestedUsers" suggestion_id={suggest.id} key={suggest.id}>
      <img alt={suggest.username + "Avatar"} src={suggest.thumb_url} />
      <div>
        <span className="username">{suggest.username}</span>
        <br />
        <span className="suggest-for-you">suggested for you</span>
        <FollowButton suggestion_id={suggest.id} />
      </div>
    </div>
  );
};
export default Suggestion;
