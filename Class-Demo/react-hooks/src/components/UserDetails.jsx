import { useContext } from "react";
import "../App.css";
import { UserContext } from "../hooks/UserContext";

export default function UserDetails() {
  const user = useContext(UserContext);

  if (!user) return <p>Loading user...</p>;

  return (
    <div className="user-details">
      <h3>User Details (via useContext)</h3>
      <ul>
        <li><strong>Name:</strong> {user.name}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Role:</strong> {user.role}</li>
      </ul>
    </div>
  );
}
