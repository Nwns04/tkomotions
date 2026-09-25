import { createContext, useContext, useState } from 'react';

// Create context with default value
const BookingContext = createContext({
  checkIn: null,
  checkOut: null,
  adults: 2,
  children: 0,
  roomType: '',
  selectedRoom: null,
  isModalOpen: false,
  updateBooking: () => {},
  openModal: () => {},
  closeModal: () => {},
  resetBooking: () => {},
});

export function useBooking() {
  const context = useContext(BookingContext);
  return context;
}

export function BookingProvider({ children }) {
  const [bookingState, setBookingState] = useState({
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0,
    roomType: '',
    selectedRoom: null,
    isModalOpen: false,
  });

  const updateBooking = (updates) => {
    setBookingState(prev => ({ ...prev, ...updates }));
  };

  const openModal = (room = null) => {
    setBookingState(prev => ({
      ...prev,
      isModalOpen: true,
      selectedRoom: room || prev.selectedRoom,
    }));
  };

  const closeModal = () => {
    setBookingState(prev => ({
      ...prev,
      isModalOpen: false,
      selectedRoom: null,
    }));
  };

  const resetBooking = () => {
    setBookingState({
      checkIn: null,
      checkOut: null,
      adults: 2,
      children: 0,
      roomType: '',
      selectedRoom: null,
      isModalOpen: false,
    });
  };

  const value = {
    ...bookingState,
    updateBooking,
    openModal,
    closeModal,
    resetBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

export default BookingContext;