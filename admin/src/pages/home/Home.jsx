import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "header eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmUzN2QwNzM2ZThkNGVkYmRkYWNmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTY0NDIyOSwiZXhwIjoxNjM2MDc2MjI5fQ.rRsosGSXHN3z822rWznrcBZ1EU56Es2HhLYPXHlgB0g",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) => {
          // console.log(item);
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 2], "New User": item.total },
          ]);
        });
      } catch (error) {
        console.log({ error });
      }
    };
    getStats();
  }, [MONTHS]);
  // console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
      <Footer/>
    </div>
  );
}
