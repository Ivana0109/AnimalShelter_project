import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./Container/Header";
import styles from "./App.module.css";
import DisplayInput from "./Container/DisplayInput";
import FormInput from "./Container/FormInput";
import RoleProvider, { UserRole } from "./Components/RoleProvider";
import { useContext } from "react";
import DisplayDonations from "./Container/DisplayDonations";

import DisplayNotifications from "./Container/DisplayNotifications";
import DisplayInfo from "./Container/DisplayInfo";

function App() {
  const { isAdmin } = useContext(UserRole);
  return (
    <Router>
      <Header />

      <div className={styles.container}>
        <Routes>
          <Route path="onama" element={<DisplayInfo />} />
          <Route path="unos" element={<FormInput />}>
            {isAdmin && <Route path=":id" element={<FormInput />} />}
            <Route path="*" element={<Navigate to="popis" replace={true} />} />
          </Route>

          <Route path="popis" element={<DisplayInput />} />

          <Route path="donacije" element={<DisplayDonations />} />
          <Route path="obavijesti" element={<DisplayNotifications />} />
          <Route path="*" element={<Navigate to="onama" replace={true} />} />
        </Routes>
      </div>
    </Router>
  );
}
const AppWrapper = () => (
  <RoleProvider>
    <App />
  </RoleProvider>
);
export default AppWrapper;
