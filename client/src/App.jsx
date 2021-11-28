import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Detail from "./pages/detail/Detail";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home user={user} /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movies" user={user} />
            </Route>
            <Route path="/series">
              <Home type="series" user={user} />
            </Route>
            <Route path="/watch">
              <Watch user={user} />
            </Route>
            <Route path="/favorite">
              <Detail user={user} title="Phim Yêu Thích của bạn" />
            </Route>
            <Route path="/watched">
              <Detail user={user} title="Những Bộ Phim Gần Đây" />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
