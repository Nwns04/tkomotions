import { createContext, useContext, useState } from 'react';

const ReservationContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function useReservation() {
  return useContext(ReservationContext);
}

export function ReservationProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ReservationContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ReservationContext.Provider>
  );
}

export default ReservationContext;