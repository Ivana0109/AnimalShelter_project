import React, { useState } from "react";
import styles from "./DisplayInfo.module.css";
import InfoInput from "../Components/InfoInput";

function DisplayInfo() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    adress: "",
    message: "",
  });
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <img
          className={styles.img}
          src="https://www.thesprucepets.com/thmb/CoCcHC7znMM8fKTixoCinvu8HN8=/1500x0/filters:no_upscale():strip_icc()/GettyImages-936460794-00adc999824b4c0abedaa27e40f1a0b0.jpg"
          alt=""
        />
        <div className={styles.info}>
          {" "}
          <div className={styles.heading}>
            {" "}
            AZIL <div style={{ fontWeight: "lighter" }}>ZA ŽIVOTINJE</div>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.location}>
          <div>
            <h3>
              Adresa: Vukovarska 33 <br />
              21000, Split
            </h3>
            <h3>Kontakt: 095 7350 493</h3>
            <h3>email: azilsplit@gmail.com</h3>
            <h2>KAKO DO NAS?</h2>
            <iframe
              title="Karta"
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.5610400765804!2d16.4511699!3d43.511492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e053cea3d63%3A0xf69699f39d2aa02a!2sVukovarska%2033%2C%2021000%2C%20Split!5e0!3m2!1shr!2shr!4v1684280329860!5m2!1shr!2shr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className={styles.contactForm}>
          <form action="">
            <h2>KONTAKTIRAJTE NAS:</h2>
            <InfoInput
              type="text"
              title="Name"
              value={data.firstName}
              setValue={(value) => setData({ ...data, firstName: value })}
            />
            <InfoInput
              type="text"
              title="Prezime"
              value={data.email}
              setValue={(value) => setData({ ...data, email: value })}
            />
            <InfoInput
              type="text"
              title="Email"
              value={data.adress}
              setValue={(value) => setData({ ...data, adress: value })}
            />
            <InfoInput
              type="text"
              title="Poruka"
              value={data.message}
              setValue={(value) => setData({ ...data, message: value })}
            />
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Pošalji poruku</button>
            </div>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

export default DisplayInfo;
