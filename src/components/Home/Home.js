import styles from "./Home.module.css";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { CardFood } from "../CardFood/CardFood";

export const Home = () => {
  const [checked, setChecked] = useState(false);

  const foodArr = useSelector((state) => state.food);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DATA" })
  }, [dispatch]);

  if (foodArr.length === 0)
    return (
      <div className={styles.spin}><Spin tip="Loading data..." /></div>
    );

  return (
    <main>
      <Filter checked={checked} setChecked={setChecked} />
      <div className={styles.cards}>
        <CardFood foodArr={foodArr} checked={checked} />
      </div>
    </main>
  );
};
