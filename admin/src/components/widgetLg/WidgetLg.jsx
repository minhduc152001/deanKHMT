import { useEffect, useState } from "react";
import "./widgetLg.css";
import axios from "axios";

export default function WidgetLg() {
  const Button = ({ type, genre }) => {
    return <button className={"widgetLgButton " + type}>{genre}</button>;
  };
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const getNewMovies = async () => {
      try {
        const res = await axios.get("/movies?new=true", {
          headers: {
            token:
              "header eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmUzN2QwNzM2ZThkNGVkYmRkYWNmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTY0NDIyOSwiZXhwIjoxNjM2MDc2MjI5fQ.rRsosGSXHN3z822rWznrcBZ1EU56Es2HhLYPXHlgB0g",
          },
        });
        setNewMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewMovies();
  }, []);
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Movies</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Name</th>
            <th className="widgetLgTh">Time</th>
            <th className="widgetLgTh">Length</th>
            <th className="widgetLgTh">Genre</th>
          </tr>
          {newMovies.map((movie) => (
            <tr className="widgetLgTr" key={movie._id}>
              <td className="widgetLgUser">
                <img src={movie.img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">{movie.title}</span>
              </td>
              <td className="widgetLgDate">{movie.createdAt}</td>
              <td className="widgetLgAmount">{movie.duration}m</td>
              <td className="widgetLgStatus">
                <Button type="Approved" genre={movie.genre} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
