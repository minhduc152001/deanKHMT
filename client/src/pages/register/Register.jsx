import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (error) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="logo"
          />
          <Link to="/login">
            <button className="loginButton">Đăng Nhập</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Không giới hạn các loại phim,</h1>
        <h1>chương trình TV và hơn thế nữa.</h1>
        <h2>Xem ở mọi nơi, miễn phí, tốc độ cao.</h2>
        <p>Sẵn sàng chưa? Hãy nhập Email đăng ký hoặc đăng nhập ngay!</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Bắt Đầu
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
