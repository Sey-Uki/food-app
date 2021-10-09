import "antd/dist/antd.css";
import { Card } from "antd";
import { DeleteFilled , HeartFilled } from "@ant-design/icons";
import "./Card.css";
import { Spin } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const { Meta } = Card;

export const Cards = () => {

  const foodArr = useSelector((state) => {
    return state.food
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DATA"})
  }, [dispatch])

  if (foodArr.length === 0)
    return <Spin tip="Loading data..." className="spin"/>

  const likeFood = (pos) => {
    const temp = [...foodArr];
    temp[pos].liked = !temp[pos].liked;
    dispatch({type: "PUT_DATA", updatedMeal: temp[pos]})
  }

  const food = foodArr.map((item, pos) => {
    return (
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={item.strMealThumb} />}
        actions={[
          <DeleteFilled key="delete" />,
          <HeartFilled key="heart" onClick={()=>likeFood(pos)} style={{ color:  item.liked && "crimson"}}/>,
        ]}
        className="card"
        key={item.id}
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
