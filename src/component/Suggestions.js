import FollowButton from "./FollowButton";
const Suggestions = ({ user, suggestionList }) => {
  return (
    <div className="sidePanel">
      <div className="currUser">
        <h2>
          <img alt={user.username + "Avatar"} src={user.thumb_url} />
          {user.username}
        </h2>
      </div>
      <div>
        <p style={{ color: "#585858", fontWeight: "bold" }}>
          Suggestions for you
        </p>
        <div className="suggestions">
          {suggestionList.map((suggest) => {
            return (
              <div
                className="suggestedUsers"
                suggestion_id={suggest.id}
                key={suggest.id}
              >
                <img
                  alt={suggest.username + "Avatar"}
                  src={suggest.thumb_url}
                />
                <div>
                  <span className="username">{suggest.username}</span>
                  <br />
                  <span className="suggest-for-you">suggested for you</span>
                  <FollowButton suggestion_id={suggest.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Suggestions;
