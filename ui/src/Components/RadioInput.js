import React from "react";
import styles from "./RadioInput.module.css";
function RadioInput({ options, setValue, chosenValue, title }) {
  return (
    <div className={styles.container}>
      <div>{title}: </div>
      {options.map((item) => {
        return (
          <div key={item}>
            <input
              type="radio"
              onChange={(e) => setValue(e.target.value)}
              value={item}
              checked={item === chosenValue}
            />
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default RadioInput;
