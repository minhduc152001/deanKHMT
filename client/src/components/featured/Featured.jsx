import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./featured.scss";

export default function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log({ error });
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>--Thể Loại--</option>
            <option value="adventure">Phiêu Lưu</option>
            <option value="comedy">Hài</option>
            <option value="crime">Tội Ác</option>
            <option value="fantasy">Viễn Tưởng</option>
            <option value="historical">Lịch Sử</option>
            <option value="horror">Kinh Dị</option>
            <option value="romance">Lãng Mạn</option>
            <option value="sci-fi">Hành Động</option>
            <option value="thriller">Sợ Hãi</option>
            <option value="western">Miền Tây</option>
            <option value="animation">Hoạt Hình</option>
            <option value="drama">Kịch</option>
            <option value="documentary">Phim Tài Liệu</option>
          </select>
        </div>
      )}
      {/* src="https://wallpaperaccess.com/full/329598.jpg" */}
      <img src={content.img} alt="" />
      <div className="info">
        {/* src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" */}
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link to={{ pathname: "/watch", movie: content }}>
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
