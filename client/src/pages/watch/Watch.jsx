import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Comment from "../../components/comment/Comment";
import Footer from "../../components/footer/Footer";
import "./watch.scss";

export default function Watch({user}) {
  const location = useLocation();
  // console.log(location);
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video src={movie.video} progress loop controls></video>
      <Comment user={user} />
      <Footer />
    </div>
  );
}
