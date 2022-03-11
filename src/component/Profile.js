const Profile = ({ user }) => {
  return (
    <>
      <div className="currUser">
        <h2>
          <img alt={user.username + "Avatar"} src={user.thumb_url} />
          {user.username}
        </h2>
      </div>
    </>
  );
};
export default Profile;
