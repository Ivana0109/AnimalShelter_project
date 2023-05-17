import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { updatePet } from "../utils/endpoints";
import { useContext } from "react";
import { UserRole } from "./RoleProvider";

function Card({ item, refresh }) {
  const { isAdmin } = useContext(UserRole);
  const navigate = useNavigate();

  const onAdopt = () => {
    updatePet(item.id, { ...item, adopted: true })
      .then((res) => refresh())
      .catch((err) => console.log(err.message));
  };

  const onEdit = () => {
    navigate(`/unos/${item.id}`);
  };
  return (
    <div className={item.adopted ? styles.adoptedContainer : styles.container}>
      {item.photo ? (
        <img
          src={item.photo}
          className={styles.img}
          alt="fotografija životinje"
        />
      ) : (
        <div
          className={styles.img}
          style={{ backgroundColor: "yellowgreen" }}
        />
      )}
      <div> Ime: {item.firstName}</div>
      <div> Vrsta: {item.type}</div>
      <div> Godine: {item.years}</div>
      <div> Opis: {item.description}</div>
      <div> Posvojen: {item.adopted ? "Udomljen" : "Nije udomljen"}</div>
      <div> Čipiran: {item.chip ? "Da" : "Ne"}</div>
      <div>Datum pregleda: {new Date(item.date).toLocaleDateString()}</div>
      <div className={styles.buttons}>
        {!item.adopted && (
          <button
            className={styles.buttonAdopt}
            onClick={() => {
              if (window.confirm("Are you sure you wish to adopt this animal?"))
                onAdopt();
            }}
          >
            Udomi
          </button>
        )}
        {isAdmin && (
          <button className={styles.buttonEdit} onClick={onEdit}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
