import React, { useCallback, useEffect, useMemo, useState } from "react";

import styles from "./DisplayInput.module.css";
import { getPets } from "../utils/endpoints";

import DisplayCards from "../Components/DisplayCards";
import RadioInput from "../Components/RadioInput";

const ADOPTED_VALUES = { Svi: null, Udomljen: true, "Nije udomljen": false };
const TYPE_VALUES = { Svi: null, Mačka: "Mačka", Pas: "Pas" };

function DisplayInput() {
  const [filterType, setFilterType] = useState("Svi");
  const [filterAdopted, setFilterAdopted] = useState("Svi");

  const [postData, setPostData] = useState("");

  const constructParams = useMemo(() => {
    const searchParams = new URLSearchParams();

    const parameterValues = [
      { value: TYPE_VALUES[filterType], name: "type" },
      { value: ADOPTED_VALUES[filterAdopted], name: "adopted" },
    ];
    parameterValues
      .filter((item) => item.value !== null)
      .forEach((item) => searchParams.set(item.name, item.value));

    return `?${searchParams.toString()}`;
  }, [filterType, filterAdopted]);

  const refresh = useCallback(() => {
    getPets(constructParams)
      .then((res) => setPostData(res.data))
      .catch((err) => console.log(err.message));
  }, [constructParams]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <>
      {" "}
      <h2 className={styles.heading}>POPIS ŽIVOTINJA</h2>
      <div className={styles.container}>
        <div className={styles.radioContainer}>
          <RadioInput
            title="Vrsta"
            options={Object.keys(TYPE_VALUES)}
            chosenValue={filterType}
            setValue={setFilterType}
          />
          <RadioInput
            title="Filter"
            options={Object.keys(ADOPTED_VALUES)}
            chosenValue={filterAdopted}
            setValue={setFilterAdopted} //kako za ovo napraviti novi filter u axios.get ????
          />
        </div>
        <div className={styles.cardsContainer}>
          <DisplayCards data={postData} refresh={refresh} />
        </div>
      </div>
    </>
  );
}

export default DisplayInput;
