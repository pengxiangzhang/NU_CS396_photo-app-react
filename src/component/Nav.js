const Nav = ({ user }) => {
  return (
    <nav>
      <h1>Photo App</h1>
      <div className="userControlPannel">
        <a href="/" className="mainTab">
          Home
        </a>
        <a style={{ marginLeft: 10 }}>{user.username}</a>
      </div>
    </nav>
  );
};
export default Nav;
