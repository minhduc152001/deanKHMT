import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedInfo() {
  const [movies, setMovies] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [lists, setLists] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res1 = await axios.get("/movies/stats", {
          headers: {
            token:
              "header eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmUzN2QwNzM2ZThkNGVkYmRkYWNmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDkxNjU2NSwiZXhwIjoxNjM1MzQ4NTY1fQ.QWIB6_8z2xuuLvxOUIpvwfsiDZFVm4vWSiDcYPIHekQ",
          },
        });
        setMovies(res1.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res2 = await axios.get("/users/stats", {
  //         headers: {
  //           token:
  //             "header eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmUzN2QwNzM2ZThkNGVkYmRkYWNmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDkxNjU2NSwiZXhwIjoxNjM1MzQ4NTY1fQ.QWIB6_8z2xuuLvxOUIpvwfsiDZFVm4vWSiDcYPIHekQ",
  //         },
  //       });
  //       setUsers(res2.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUsers();
  // }, []);

  // useEffect(() => {
  //   const getLists = async () => {
  //     try {
  //       const res3 = await axios.get("/lists/stats", {
  //         headers: {
  //           token:
  //             "header eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmUzN2QwNzM2ZThkNGVkYmRkYWNmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDkxNjU2NSwiZXhwIjoxNjM1MzQ4NTY1fQ.QWIB6_8z2xuuLvxOUIpvwfsiDZFVm4vWSiDcYPIHekQ",
  //         },
  //       });
  //       setLists(res3.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getLists();
  // }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Movie</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">51</span>
          <span className="featuredMoneyRate">
            +22
            {/* {movies[0].total - movies[1].total < 0 ? ( */}
            {/* <ArrowDownward className="featuredIcon negative" /> */}
            {/* ) : ( */}
            <ArrowUpward className="featuredIcon" />
            {/* )} */}
            {/* {movies[0].total - movies[1].total}{" "} */}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">21</span>
          <span className="featuredMoneyRate">
            -7
            {/* {users[0].total - users[1].total < 0 ? ( */}
            <ArrowDownward className="featuredIcon negative" />
            {/* ) : ( */}
            {/* <ArrowUpward className="featuredIcon" /> */}
            {/* )} */}
            {/* {users[0].total - users[1].total}{" "} */}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">List</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">12</span>
          <span className="featuredMoneyRate">
            +2
            {/* {lists[0].total - lists[1].total < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : ( */}
            <ArrowUpward className="featuredIcon" />
            {/* )}
            {lists[0].total - lists[1].total}{" "} */}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
