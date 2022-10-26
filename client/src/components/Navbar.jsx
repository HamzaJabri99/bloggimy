import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/blogg.png";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to={"/?cat=sport"}>
            <h6>Sport</h6>
          </Link>
          <Link className="link" to={"/?cat=art"}>
            <h6>Art</h6>
          </Link>
          <Link className="link" to={"/?cat=science"}>
            <h6>Science</h6>
          </Link>
          <Link className="link" to={"/?cat=technology"}>
            <h6>Technology</h6>
          </Link>
          <Link className="link" to={"/?cat=design"}>
            <h6>Design</h6>
          </Link>
          <Link className="link" to={"/?cat=food"}>
            <h6>Food</h6>
          </Link>

          <span>{user?.username}</span>
          {user ? (
            <span onClick={logout}>logout</span>
          ) : (
            <span className="link">
              <Link className="link" to={"/login"}>
                Login
              </Link>
            </span>
          )}
          <span className="write">
            <Link className="link" to={"/write"}>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
