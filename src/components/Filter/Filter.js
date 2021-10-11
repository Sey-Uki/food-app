import "antd/dist/antd.css";
import "./Filter.css";
import { Switch } from "antd";

export const Filter = ({ checked, setChecked }) => {
  function onChange() {
    setChecked(!checked);
  }
  return (
    <div className="filter">
      <Switch defaultChecked onChange={onChange} checked={checked} />
      <span className="filterText">Show liked</span>
    </div>
  );
};
