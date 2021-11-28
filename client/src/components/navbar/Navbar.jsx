import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

export default function Navbar({ user }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Trang Chủ</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Phim Bộ</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Phim Lẻ</span>
          </Link>
          <Link to="/favorite" className="link">
            <span>Phim Yêu Thích</span>
          </Link>
          <Link to="/watched" className="link">
            <span>Lịch Sử Xem</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>{user.username}</span>
          <Notifications className="icon" />
          <img style={{ borderRadius: "50%" }} src={user.profilePic} alt="" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Cài Đặt</span>
              <span onClick={() => dispatch(logout())}>Đăng xuất</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
