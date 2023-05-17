import * as React from "react";
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";

export default function DatePicker({ setValue, title, value }) {
  return (
    <>
      <label>{title}:</label>
      <DatePickerComponent
        className={styles.datePicker}
        selected={value}
        onChange={(date) => setValue(date)}
      />
    </>
  );
}
