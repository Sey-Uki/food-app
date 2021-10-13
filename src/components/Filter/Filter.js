import styles from "./Filter.module.css";
import { Switch } from "antd";

export const Filter = ({ checked, setChecked }) => {
  function onChange() {
    setChecked(!checked);
  }
  return (
    <div className={styles.filter}>
      <Switch defaultChecked onChange={onChange} checked={checked} />
      <span className={styles.filterText}>Show liked</span>
    </div>
  );
};
