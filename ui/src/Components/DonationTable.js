import React, { useContext } from "react";
import styles from "./DonationTable.module.css";
import { UserRole } from "./RoleProvider";
import {
  addDonation,
  deleteDonation,
  updateDonation,
} from "../utils/endpoints";
function DonationTable({ data, title, refresh }) {
  const { isAdmin } = useContext(UserRole);
  const onDonate = (item) => {
    updateDonation(item.id, {
      ...item,
      status: "DONATED",
    }).then((res) => refresh());
  };

  const onDelete = (item) => {
    deleteDonation(item.id).then((res) => refresh());
  };

  const onRepeat = (item) => {
    const { type, amount, description } = item;
    addDonation({
      type,
      amount,
      description,
      status: "REQUEST",
    }).then((res) => refresh());
  };
  const constructActions = (item) => {
    switch (item.status) {
      case "REQUEST":
        return (
          <>
            <button
              className={styles.buttonDonate}
              onClick={() => onDonate(item)}
            >
              {isAdmin ? "Donirano" : "Doniraj"}
            </button>
            {isAdmin && (
              <button
                className={styles.buttonDelete}
                onClick={() => onDelete(item)}
              >
                Izbriši
              </button>
            )}
          </>
        );

      case "OFFER":
        return (
          isAdmin && (
            <button
              className={styles.buttonDonate}
              onClick={() => onDonate(item)}
            >
              Prihvati
            </button>
          )
        );
      case "DONATED":
        return (
          isAdmin && (
            <>
              <button
                className={styles.buttonDonate}
                onClick={() => onRepeat(item)}
              >
                Ponovi
              </button>
              <button
                className={styles.buttonDelete}
                onClick={() => onDelete(item)}
              >
                Izbriši
              </button>
            </>
          )
        );

      default:
        return null;
    }
  };

  return (
    <>
      {" "}
      <div className={styles.container}>
        <h2>{title}: </h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tip</th>
              <th>Vrijednost</th>
              <th>Opis</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                const actions = constructActions(item);
                return (
                  <tr className={styles.tableContainer} key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.description}</td>
                    {actions && (
                      <td>
                        <div className={styles.buttons}>{actions}</div>
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DonationTable;
