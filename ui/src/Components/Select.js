import * as React from "react";
import styles from "./Select.module.css";

function Select({ title, options, setValue, chosenValue }) {
  return (
    <div className={styles.container}>
      <label>{title}:</label>
      <select
        value={chosenValue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {options.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default Select;
