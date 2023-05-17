import React, { useContext, useState } from "react";
import Input from "./Input";
import { UserRole } from "./RoleProvider";
import styles from "./NotificationForm.module.css";
import Checkbox from "./Checkbox";
import useFieldValidation from "../utils/useFieldValidation";
import { addNotification } from "../utils/endpoints";

const INITIAL_STATE = { heading: "", text: "", important: false };

function NotificationForm({ refresh }) {
  const [data, setData] = useState(null);

  const headingError = useFieldValidation(data?.heading, {
    max: 20,
    required: true,
  });
  const textError = useFieldValidation(data?.text, { min: 10, max: 200 });

  const { isAdmin } = useContext(UserRole);
  const handleSubmit = () => {
    addNotification({
      ...data,
      date: new Date(),
    }).then((res) => {
      refresh();
      setData(null);
    });
  };
  return (
    <div className={styles.container}>
      {data !== null && (
        <>
          <h2>UNOS ZA OBAVIJEST:</h2>

          <Input
            error={headingError}
            title="Naslov"
            type="text"
            setValue={(value) => setData({ ...data, heading: value })}
          />

          <Input
            error={textError}
            title="Tekst"
            type="text"
            setValue={(value) => setData({ ...data, text: value })}
          />
          {isAdmin && (
            <Checkbox
              setValue={(value) => setData({ ...data, important: value })}
              value={data.important}
              title="Važno:"
            />
          )}
        </>
      )}
      <div className={styles.buttonContainer}>
        {" "}
        <button
          disabled={headingError || textError}
          className={styles.button}
          onClick={data === null ? () => setData(INITIAL_STATE) : handleSubmit}
        >
          {data === null ? "Nova obavijest" : "Dodaj obavijest"}
        </button>
      </div>
    </div>
  );
}

export default NotificationForm;
