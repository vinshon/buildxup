import { createContext, useState } from "react";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  return (
    <DashboardContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
