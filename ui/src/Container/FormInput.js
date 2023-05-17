import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import Checkbox from "../Components/Checkbox";
import { getPet, addPet, updatePet } from "../utils/endpoints";
import styles from "./FormInput.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RadioInput from "../Components/RadioInput";
import DatePicker from "../Components/DatePicker";

function FormInput() {
  const { id } = useParams();
  const [data, setData] = useState({
    firstName: "",
    photo: "",
    type: "",
    years: "",
    description: "",
    chip: false,
    adopted: false,
    date: new Date(),
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!!id) {
      getPet(id)
        .then((res) => setData({ ...res.data, date: new Date(res.data.date) }))
        .catch((err) => console.log(err.message));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const saveFunction = !!id ? updatePet(id, data) : addPet(data);

    saveFunction.then((res) => {
      navigate(`/popis`);
    });
  };

  return (
    <>
      <h2>UNOS NOVE ŽIVOTINJE</h2>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.container}>
          <h2>ISPUNI PODATKE: </h2>
          <Input
            type="text"
            title="Name"
            value={data.firstName}
            setValue={(value) => setData({ ...data, firstName: value })}
          />{" "}
          <Input
            type="text"
            title="Photo URL"
            value={data.photo}
            setValue={(value) => setData({ ...data, photo: value })}
          />{" "}
          <RadioInput
            title="Vrsta"
            options={["Ostalo", "Mačka", "Pas"]}
            chosenValue={data.type}
            setValue={(value) => setData({ ...data, type: value })}
          />
          <Input
            type="number"
            title="Years"
            value={data.years}
            setValue={(value) => setData({ ...data, years: value })}
          />{" "}
          <Input
            type="text"
            title="Description"
            value={data.description}
            setValue={(value) => setData({ ...data, description: value })}
          />
          <Checkbox
            title="Čipiran:"
            setValue={(value) => setData({ ...data, chip: value })}
            value={data.chip}
          />
          <DatePicker
            title="Pregled"
            value={data.date}
            setValue={(value) => setData({ ...data, date: value })}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Spremi</button>
        </div>
      </form>
    </>
  );
}

export default FormInput;
