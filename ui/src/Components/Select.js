import * as React from "react";
import styles from "./Select.module.css";

function Select({ title, options, setValue, chosenValue }) {
  return (
    <div className={styles.container}>
      <label>{title}:</label>
      <select>
        {options.map((item) => {
          return (
            <option
              value={item}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              checked={chosenValue === item}
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
