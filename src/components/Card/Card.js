import "antd/dist/antd.css";
import { Card } from "antd";
import { DeleteFilled , HeartFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./Card.css";
import { Spin } from 'antd';

const { Meta } = Card;

export const Cards = () => {
  const [foodArr, setFoodArr] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(async (res) => {
        const json = await res.json();
        setFoodArr(json.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  if (foodArr.length === 0)
    return <Spin tip="Loading..." />

  const food = foodArr.map((item) => {
    return (
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={item.strMealThumb} />}
        actions={[
          <DeleteFilled key="delete" />,
          <HeartFilled key="heart"/>,
        ]}
        className="card"
        key={item.idMeal}
      >
        <Meta
          title={item.strMeal}
          description={item.strMeal}
        />
      </Card>
    );
  });

  return <div className="cards">{food}</div>;
};
