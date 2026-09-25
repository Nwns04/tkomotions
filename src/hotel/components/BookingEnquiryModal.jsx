import { useState, useEffect } from 'react';
import Modal from '../../shared/components/Modal';
import BookingForm from './BookingForm';

// Global event system for opening/closing the modal
const bookingModalEvents = {
  listeners: new Set(),
  
  open(room = null) {
    this.listeners.forEach(listener => listener('open', room));
  },
  
  close() {
    this.listeners.forEach(listener => listener('close'));
  },
  
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },
};

// Export function to open modal from anywhere
export function openBookingModal(room = null) {
  bookingModalEvents.open(room);
}

// Export function to close modal from anywhere
export function closeBookingModal() {
  bookingModalEvents.close();
}

function BookingEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [success, setSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const unsubscribe = bookingModalEvents.subscribe((action, room) => {
      if (action === 'open') {
        setSelectedRoom(room);
        setSuccess(false);
        setIsOpen(true);
      } else {
        setIsOpen(false);
        setSelectedRoom(null);
      }
    });
    
    return unsubscribe;
  }, []);

  const handleClose = () => {
    setSuccess(false);
    setIsOpen(false);
    setSelectedRoom(null);
    setBookingDetails(null);
  };

  const handleSuccess = (details) => {
    setBookingDetails(details);
    setSuccess(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={success ? 'Booking Confirmed' : 'Reserve Your Stay'}
    >
      {success ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-hotel-bronze/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-hotel-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-xl font-serif mb-2">Booking Request Received</h4>
          <p className="text-hotel-ink/60 mb-2">
            Thank you for choosing Meridian House.
          </p>
          <p className="text-hotel-ink/60 mb-6">
            Our reservations team will contact you within 24 hours to confirm your stay.
          </p>
          
          {/* Booking Summary */}
          {bookingDetails && (
            <div className="bg-hotel-stone border border-hotel-sand p-4 mb-6 text-left">
              <p className="text-sm font-medium mb-2">Booking Summary</p>
              <div className="space-y-1 text-sm text-hotel-ink/60">
                <p>Room: {bookingDetails.roomName}</p>
                <p>Check-In: {bookingDetails.checkIn}</p>
                <p>Check-Out: {bookingDetails.checkOut}</p>
                <p>Guests: {bookingDetails.adults} Adult{bookingDetails.adults > 1 ? 's' : ''}{bookingDetails.children > 0 ? `, ${bookingDetails.children} Child${bookingDetails.children > 1 ? 'ren' : ''}` : ''}</p>
                <p className="font-medium text-hotel-ink">Total: {bookingDetails.total}</p>
              </div>
            </div>
          )}
          
          <button onClick={handleClose} className="btn-hotel btn-hotel-dark">
            Close
          </button>
        </div>
      ) : (
        <BookingForm 
          selectedRoom={selectedRoom}
          onSuccess={handleSuccess} 
        />
      )}
    </Modal>
  );
}

export default BookingEnquiryModal;