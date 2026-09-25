import { createContext, useContext, useState } from 'react';

const AdmissionsContext = createContext(null);

export function useAdmissions() {
  return useContext(AdmissionsContext);
}

export function AdmissionsProvider({ children }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const openEnquiry = () => setEnquiryOpen(true);
  const closeEnquiry = () => setEnquiryOpen(false);

  return (
    <AdmissionsContext.Provider value={{ enquiryOpen, openEnquiry, closeEnquiry }}>
      {children}
    </AdmissionsContext.Provider>
  );
}

export default AdmissionsContext;