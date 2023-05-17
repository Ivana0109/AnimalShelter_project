import React from "react";
import styles from "./InfoInput.module.css";
function Input({ setValue, title, type, value, error }) {
  return (
    <div className={styles.container}>
      {" "}
      <label>{title}: </label>
      <input
        className={styles.input}
        type={type}
        placeholder={type === "text" ? undefined : "Please enter amount"}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div>{error}</div>
    </div>
  );
}

export default Input;
