import { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    // <div className="login">
    //   <form className="loginForm">
    //     <input
    //       type="email"
    //       className="loginInput"
    //       placeholder="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       className="loginInput"
    //       placeholder="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button
    //       className="loginButton"
    //       onClick={handleLogin}
    //       disabled={isFetching}
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>

    <div class="containerad">
      <form id="signup">
        <div class="header">
          <h3>Admin Netflix</h3>

          <p>Chào mừng bạn! Hãy đăng nhập Admin</p>
        </div>

        <div class="sep"></div>

        <div class="inputs">
          <input
            type="email"
            placeholder="e-mail"
            autofocus
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
          className="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div class="checkboxy">
            <input name="cecky" id="checky" value="1" type="checkbox" />
            <label class="terms">Nhớ mật khẩu</label>
          </div>

          <button
            onClick={handleLogin}
            disabled={isFetching}
            id="submit"
          >
            ĐĂNG NHẬP
          </button>
        </div>
      </form>
    </div>
  );
}
