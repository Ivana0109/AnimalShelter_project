import * as React from "react";
import styles from "./Checkbox.module.css";

function Checkbox({ setValue, value, title }) {
  return (
    <div className={styles.container}>
      <label>{title}</label>
      <label className={styles.switch}>
        <input
          className={styles.input}
          type="checkbox"
          onChange={() => setValue(!value)}
          checked={value}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}

export default Checkbox;
