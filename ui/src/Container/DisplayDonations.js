import React, { useEffect, useMemo, useState } from "react";
import DonationTable from "../Components/DonationTable";
import DonationForm from "../Components/DonationForm";
import styles from "./DisplayDonations.module.css";
import { getDonations } from "../utils/endpoints";

function DisplayDonations() {
  const [donationData, setDonationData] = useState(null);

  const refresh = () => {
    getDonations().then((res) => setDonationData(res.data));
  };
  useEffect(() => {
    refresh();
  }, []);

  const { requestData, offerData, donatedData } = useMemo(
    () => ({
      requestData: donationData?.filter((item) => item.status === "REQUEST"),
      offerData: donationData?.filter((item) => item.status === "OFFER"),
      donatedData: donationData?.filter((item) => item.status === "DONATED"),
    }),
    [donationData]
  );

  return (
    <>
      {" "}
      <h2>DONACIJE</h2>
      <div className={styles.container}>
        <DonationForm refresh={refresh} />

        <DonationTable title={"TRAŽIMO"} data={requestData} refresh={refresh} />
        <DonationTable title={"NUDI SE"} data={offerData} refresh={refresh} />
        <DonationTable
          title={"DONIRANO"}
          data={donatedData}
          refresh={refresh}
        />
      </div>
    </>
  );
}

export default DisplayDonations;
