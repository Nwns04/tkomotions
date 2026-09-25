/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const ClinicContext = createContext(null);

export function ClinicProvider({ children }) {
  const [appointment, setAppointment] = useState(null);

  const requestAppointment = (details) => {
    setAppointment({ ...details, submittedAt: new Date().toISOString() });
  };

  const clearAppointment = () => setAppointment(null);

  return (
    <ClinicContext.Provider value={{ appointment, requestAppointment, clearAppointment }}>
      {children}
    </ClinicContext.Provider>
  );
}

export function useClinic() {
  const context = useContext(ClinicContext);
  if (!context) throw new Error('useClinic must be used within a ClinicProvider');
  return context;
}
