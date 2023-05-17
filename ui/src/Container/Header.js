import React, { useContext } from "react";

import { UserRole } from "../Components/RoleProvider";
import Checkbox from "../Components/Checkbox";
import styles from "./Header.module.css";
import Menu from "../Components/Menu";

function Header() {
  const { isAdmin, toggleRole } = useContext(UserRole);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {" "}
        AZIL <div style={{ fontWeight: "lighter" }}>ZA ŽIVOTINJE</div>
      </div>
      <Checkbox value={isAdmin} setValue={toggleRole} title="ADMIN" />
      <Menu />
    </div>
  );
}

export default Header;
