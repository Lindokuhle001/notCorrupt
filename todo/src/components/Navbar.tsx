import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navItem">
          <Link to="/completed">Completed</Link>{" "}
        </div>
        <div className="navItem">
          <Link to="/">Inprogress</Link>{" "}
        </div>
        <div className="navItem">
          <Link to="deleted">Deleted</Link>{" "}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
