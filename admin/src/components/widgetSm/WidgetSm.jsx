import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "header eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmUzN2QwNzM2ZThkNGVkYmRkYWNmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTY0NDIyOSwiZXhwIjoxNjM2MDc2MjI5fQ.rRsosGSXHN3z822rWznrcBZ1EU56Es2HhLYPXHlgB0g",
          },
        });
        setNewUsers(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.profilePic ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzfIoDKyi54HW4dEBOp1sR2tztmQ8CkFz4w&usqp=CAU"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
