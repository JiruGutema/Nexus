import { useContext } from "react";
import "../App.css";
import { UserContext } from "../hooks/UserContext";

export default function Navbar() {
  const user = useContext(UserContext);
  return (
    <nav className="navbar">
      <h1 className="navbar-title">MyApp</h1>
      <p className="navbar-user">{user ? `Hello, ${user.name}` : "Not logged in"}</p>
    </nav>
  );
}
