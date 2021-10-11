import "antd/dist/antd.css";
import { Card } from "antd";
import { DeleteFilled, HeartFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const { Meta } = Card;

export const CardFood = ({ foodArr, checked }) => {
  const dispatch = useDispatch();

  const likeFood = (pos) => {
    const temp = [...foodArr];
    temp[pos].liked = !temp[pos].liked;
    dispatch({ type: "PUT_DATA", updatedMeal: temp[pos] });
  };

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const temp = [...foodArr];
    if (checked) {
      const tempFilter = temp.filter((item) => {
        return item.liked === true;
      });
      setFilterData(tempFilter);
    } else {
      setFilterData([]);
    }
  }, [checked, foodArr]);

  return (
    <>
      {(filterData.length >= 0 && checked ? filterData : foodArr).map(
        (item, pos) => {
          return (
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src={item.strMealThumb} />}
              actions={[
                <DeleteFilled key="delete" />,
                <HeartFilled
                  key="heart"
                  onClick={() => likeFood(pos)}
                  style={{ color: item.liked && "crimson" }}
                />,
              ]}
              className="card"
              key={item.id}
            >
              <Meta title={item.strMeal} description={item.strMeal} />
            </Card>
          );
        }
      )}
    </>
  );
};
