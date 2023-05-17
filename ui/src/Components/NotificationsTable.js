import React, { useContext } from "react";
import styles from "./NotificationsTable.module.css";
import { UserRole } from "./RoleProvider";
import { deleteNotification } from "../utils/endpoints";
function NotificationsTable({ data, title, refresh, important }) {
  const { isAdmin } = useContext(UserRole);

  const onDelete = (item) => {
    deleteNotification(item.id).then((res) => refresh());
  };

  return (
    <div className={styles.box}>
      {" "}
      <h2>NOVE OBAVIJESTI</h2>
      {data &&
        data.map((item) => (
          <div className={styles.container}>
            <div
              className={
                item.important ? styles.headerImportant : styles.header
              }
            >
              <div>{item.heading}</div>
              <div>{item.important ? "VAŽNO!" : null}</div>
              <div>{new Date(item.date).toLocaleDateString()}</div>
            </div>
            <div className={styles.tableContainer} key={item.id}>
              <div> {item.text}</div>
              {isAdmin && (
                <div className={styles.buttons}>
                  <button
                    className={styles.buttonDelete}
                    onClick={() => onDelete(item)}
                  >
                    Izbriši
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default NotificationsTable;
