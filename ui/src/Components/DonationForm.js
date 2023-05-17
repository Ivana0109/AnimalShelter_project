import React, { useContext, useState } from "react";

import Input from "./Input";
import { UserRole } from "./RoleProvider";
import styles from "./DonationForm.module.css";
import Select from "./Select";
import { addDonation } from "../utils/endpoints";

const INITIAL_STATE = { type: "hrana", amount: "", description: "" };

function DonationForm({ refresh }) {
  const [data, setData] = useState(null);

  const { isAdmin } = useContext(UserRole);

  const handleSubmit = () => {
    addDonation({
      ...data,
      status: isAdmin ? "REQUEST" : "OFFER",
    }).then((res) => {
      refresh();
      setData(null);
    });
  };
  return (
    <div className={styles.container}>
      {data !== null && (
        <>
          <h2>UNOS ZA DONACIJU:</h2>

          <Select
            title="Tip"
            options={["hrana", "ljekovi", "igračke"]}
            setValue={(value) => setData({ ...data, type: value })}
            chosenValue={data.type}
          />
          <Input
            title="Količina"
            type="number"
            setValue={(value) => setData({ ...data, amount: value })}
          />

          <Input
            title="Opis"
            type="text"
            setValue={(value) => setData({ ...data, description: value })}
          />
        </>
      )}
      <div className={styles.buttonContainer}>
        {" "}
        <button
          className={styles.button}
          onClick={data === null ? () => setData(INITIAL_STATE) : handleSubmit}
        >
          {data === null ? "Nova donacija" : "Doniraj"}
        </button>
      </div>
    </div>
  );
}

export default DonationForm;
