import React, { useEffect, useMemo, useState } from "react";
import styles from "./DisplayNotifications.module.css";
import NotificationForm from "../Components/NotificationForm";
import NotificationsTable from "../Components/NotificationsTable";
import { getNotifications } from "../utils/endpoints";

function DisplayNotifications() {
  const [notificationData, setNotificationData] = useState(null);

  const refresh = () => {
    getNotifications().then((res) => setNotificationData(res.data));
  };
  useEffect(() => {
    refresh();
  }, []);

  const notifications = useMemo(
    () =>
      notificationData?.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      }),
    [notificationData]
  );

  return (
    <>
      {" "}
      <h2>OBAVIJESTI</h2>
      <div className={styles.container}>
        <NotificationForm refresh={refresh} />
        <NotificationsTable data={notifications} refresh={refresh} />
      </div>
    </>
  );
}

export default DisplayNotifications;
