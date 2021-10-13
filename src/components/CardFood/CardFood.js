import styles from './CardFood.module.css';
import { Card, Modal } from "antd";
import { DeleteFilled, HeartFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { confirm } = Modal;

export const CardFood = ({ foodArr, checked }) => {
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState([]);

  const likeFood = (pos) => {
    const temp = [...foodArr];
    const tempFood = filterData.length > 0 ? filterData : temp;
    tempFood[pos].liked = !tempFood[pos].liked;
    dispatch({ type: "PUT_DATA", updatedMeal: tempFood[pos] });
  };

  const deleteFood = (pos) => {
    const temp = [...foodArr];
    confirm({
      title: "Do you want to delete this post?",
      icon: <ExclamationCircleOutlined />,
      content: "It is irreversible",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
        dispatch({ type: "DELETE_DATA", updatedMeal: temp[pos] });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

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
            <div className={styles.card}>
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src={item.strMealThumb} />}
              actions={[
                <DeleteFilled key="delete" onClick={() => deleteFood(pos)} />,
                <HeartFilled
                  key="heart"
                  onClick={() => likeFood(pos)}
                  style={{ color: item.liked && "crimson" }}
                />,
              ]}
              key={item.id}
            >
              <Meta title={item.strMeal} description={item.strMeal} />
            </Card>
            </div>
          );
        }
      )}
    </>
  );
};
