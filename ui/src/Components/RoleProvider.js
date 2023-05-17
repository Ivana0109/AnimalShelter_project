import React, { useState } from "react";
import { createContext } from "react";

export const UserRole = createContext({
  isAdmin: false,

  toggleRole: () => {},
});

function RoleProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleRole = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <UserRole.Provider value={{ isAdmin, toggleRole }}>
      {children}
    </UserRole.Provider>
  );
}

export default RoleProvider;
