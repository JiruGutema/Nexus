import "../App.css";

export default function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img
        src={user.avatar}
        alt={user.name}
        className="profile-avatar"
      />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-role">{user.role}</p>
    </div>
  );
}
