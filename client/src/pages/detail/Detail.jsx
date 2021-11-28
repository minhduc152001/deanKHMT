import Display from "../../components/displayMovies/Display";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./detail.scss";

export default function Detail({ user, title }) {
  return (
    <div className="detail">
      <Navbar user={user} />
      <h1 className="h">{title}</h1>
      <Display user={user} />
      <Footer />
    </div>
  );
}
