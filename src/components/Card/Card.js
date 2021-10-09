import "antd/dist/antd.css";
import { Card } from "antd";
import { DeleteFilled , HeartFilled } from "@ant-design/icons";
import "./Card.css";
import { Spin } from 'antd';
import { useSelector } from "react-redux";

const { Meta } = Card;

export const Cards = () => {

  const foodArr = useSelector((state) => {
    return state.food
  });

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
