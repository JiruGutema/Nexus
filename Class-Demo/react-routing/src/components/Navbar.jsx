import { Link, NavLink } from "react-router-dom";

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#007bff" : "#333",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

export default function Navbar() {
  return (
    <nav
      style={{
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
        flexDirection: "row",
      }}
    >
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>{" "}
      |
      <NavLink to="/project" style={navLinkStyles}>
        Project
      </NavLink>{" "}
      |
      <NavLink to="/phone/Samsung" style={navLinkStyles}>
        Samsung
      </NavLink>{" "}
      |{" "}
      <NavLink to="/phone/Iphone" style={navLinkStyles}>
        Iphone
      </NavLink>
    </nav>
  );
}
