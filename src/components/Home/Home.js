import "antd/dist/antd.css";
import "./Home.css";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { CardFood } from "../CardFood/CardFood";

export const Cards = () => {
  const [checked, setChecked] = useState(false);

  const foodArr = useSelector((state) => {
    return state.food;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
  }, [dispatch]);

  if (foodArr.length === 0)
    return <Spin tip="Loading data..." className="spin" />;

  return (
    <main>
      <Filter checked={checked} setChecked={setChecked} />
      <div className="cards">
        <CardFood foodArr={foodArr} checked={checked} />
      </div>
    </main>
  );
};
