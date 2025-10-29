import "./profile.css";

const Profile = () => {
  // Demo user data
  const user = {
    name: "User Name",
    email: "user@gmail.com",
    role: "Frontend Engineer",
    avatar: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
  };

  return (
    <div className="profile-container">
      <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
      <h2>{user.name}</h2>
      <p className="profile-role">{user.role}</p>
      <p className="profile-email">{user.email}</p>
    </div>
  );
};

export default Profile;
